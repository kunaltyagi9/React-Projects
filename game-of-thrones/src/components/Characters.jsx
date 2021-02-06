import { useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { data }  from '../constants/data';
import Character from './Character';

const Characters = () => {
    console.log("helooooo", data.characters);
    
    return (
        <Box style={{margin: '10px 35px'}}>
            <Grid container>
                {
                    data.characters.map((value, index) => (
                        <Grid item key={index}><Character key={value.id} value={value} /></Grid>
                    ))
                }   
            </Grid>
        </Box>
    )

}

export default Characters;