import axios from 'axios';


const url = "https://covid19.mathdro.id/api";


export const fetchData = async (country) => {
    let changedUrl = url;
    if(country){
        changedUrl = `${url}/countries/${country}`;
    }
    try{
       const { data: { confirmed, recovered, deaths, lastUpdate } } =  await axios.get(changedUrl);
       return { confirmed, recovered, deaths, lastUpdate };
    }catch(error){
        return error;
    }
}

export const fetchCountries = async() => {
    try{
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map(country => country.name );
    }catch(error){
        return error;
    }
}