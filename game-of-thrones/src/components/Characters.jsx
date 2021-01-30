import { useEffect, useState } from 'react';
import { Card, Typography, Box } from '@material-ui/core';
import { getCharactersData } from '../services/api';
import Character from './Character';

const Characters = () => {
    
    const [ data, setData ] = useState([]);

    useEffect(() => {
        getCharactersData().then(res => {
            setData(res.data);
        }).catch(error => {
            console.log(error);
        });

    }, []);

    return (
        <Box>
            {
            data.map(value => {
                return <Character key={value.id} value={value} />
            })
            }   
        </Box>
    )

}

export default Characters;