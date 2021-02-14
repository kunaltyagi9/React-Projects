import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '20259577-c93c75abc878a636931b34317';

export const getImages = async (text, count) => {
    try{
        const data = await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    }catch(error){
        console.log(error)
    }
}