import axios from 'axios';


const url = "https://covid19.mathdro.id/api";


export const fetchData = () => {
    try{
        await axios.get(url);
    }catch(error){
        return error;
    }
}