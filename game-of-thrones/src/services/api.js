import axios from 'axios';

const url = 'https://thronesapi.com/api/v2/Characters/';

export const getCharactersData = async () => {
    return axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://thronesapi.com/api/v2/Characters/`)
    .catch(error => {
        console.log(error)
    });
    
}