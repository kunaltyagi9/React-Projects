import { useContext, useState } from 'react';

import { Box } from '@mui/material';
import { makeStyles } from "@mui/styles";

import { DataContext } from '../context/DataProvider';
import { checkParams } from '../utils/common-utils';
import { getData } from '../service/api';

//components
import Form from "./Form";
import SelectTab from './SelectTab';
import SnackBar from './SnackBar';
import Header from './Header';
import Response from './Response';
import ErrorScreen from './ErrorScreen';

const useStyles = makeStyles({
    component: {
        width: '60%',
        margin: '20px auto 0 auto'
    }
})

const Home = () => {
    const classes = useStyles();
    
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')
    const [errorResponse, setErrorResponse] = useState(false);
    const [apiResponse, setApiResponse] = useState({})

    const { formData, jsonText, paramData, headerData } = useContext(DataContext);
    

    const onSendClick = async () => {
        if(!checkParams(formData, jsonText, paramData, headerData, setErrorMsg)) {
            setError(true);
            return false;
        }

        let response = await getData(formData, jsonText, paramData, headerData);
        console.log(response);
        if (response === 'error') {
            setErrorResponse(true);
            return;
        }
        setApiResponse(response.data)
    }

    return (
        <>
            <Header />
            <Box className={classes.component}>
                <Form onSendClick={onSendClick} />
                <SelectTab />
                { errorResponse ? <ErrorScreen /> : <Response data={apiResponse} /> }
            </Box>
            { error && <SnackBar errorMsg={errorMsg} error={error} setError={setError} /> }
        </>
    )
}

export default Home;