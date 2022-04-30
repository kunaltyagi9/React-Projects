import { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
// import { data }  from '../constants/data';
import Character from './Character';

import { getData } from '../service/api';

const Characters = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getCharacters();
    }, [])

    const getCharacters = async () => {
        let response = await getData();
        setData(response.data);
    }
    
    return (
        <Box style={{margin: '10px 35px'}}>
            <Grid container>
                {
                    data.map((value, index) => (
                        <Grid item key={index}><Character key={value.id} value={value} /></Grid>
                    ))
                }   
            </Grid>
        </Box>
    )

}

export default Characters;