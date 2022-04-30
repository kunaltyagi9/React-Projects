import axios from 'axios';

const API_URL = 'http://localhost:3002/characters';

export const getData = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.log('Error while calling getData api ', error);
    }
}