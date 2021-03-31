import axios from 'axios';


export const getData = async () => {
    return await axios.get('https://www.reddit.com/r/memes.json');
}