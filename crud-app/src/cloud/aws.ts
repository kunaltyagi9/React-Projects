const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'users-repo';
const userPath = '/users';


exports.handler = async (event) => {
    let response;

    switch(event.httpMethod) {
        case 'GET': 
            response = await getUsers();
            break;
        case 'POST': 
            response = await saveUser(JSON.parse(event.body))
            break;
        case 'PUT':
            const requestBody = JSON.parse(event.body);
            response = await updateUser(requestBody.id, requestBody.updateKey, requestBody.updateValue);
            break;
        case 'DELETE':
            response = await deleteUser(JSON.parse(event.body).id);
            break;
        default:
            response = buildResponse(404, '404 Not Found');
    }
    return response;
}

async function saveUser(requestBody) {
    const Params = {
        TableName: dynamodbTableName,
        Item: requestBody
    }
    return await dynamodb.put(Params).promise().then(() => {
        const body = {
            Operation: 'SAVE',
            Message: 'SUCCESS',
            Item: requestBody
        }
        return buildResponse(200, body);
    }, (error) => {
        console.log(error)
    })
}

async function getUsers() {
    const params = {
        TableName: dynamodbTableName
    }
    const allUsers = await dynamodb.scan(params).promise();
    const body = {
        users: allUsers
    }
    return buildResponse(200, body);
}

async function updateUser(id, updateKey, updateValue) {
    const Params = {
        TableName: dynamodbTableName,
        Key: {
            'id': id
        },
        UpdateExpression: `set ${updateKey} = :value`,
        ExpressionAttributeValues: {
            ':value': updateValue
        },
        returnValues: 'UPDATED_NEW' 
    }
    return await dynamodb.update(Params).promise().then(response => {
        const body = {
            Operation: 'UPDATE',
            Message: 'SUCCESS',
            Item: response
        }
        return buildResponse(200, body);
    }, (error) => {
        console.error(error)
    })
}

async function deleteUser(id) {
    const Params = {
        TableName: dynamodbTableName,
        Key: {
            'id': id
        },
        returnValues: 'ALL_OLD' 
    }
    return await dynamodb.delete(Params).promise().then(response => {
        const body = {
            Operation: 'DELETE',
            Message: 'SUCCESS',
            Item: response
        }
        return buildResponse(200, body);
    }, (error) => {
        console.error(error)
    })
}

function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}
