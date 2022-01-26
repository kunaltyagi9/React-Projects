import { useContext } from 'react';

import { Select, MenuItem, TextField, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { DataContext } from '../context/DataProvider';

const useStyles = makeStyles({
    component: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    select: {
        width: 150,
        height: 40,
        background: '#F6F6F6'
    },
    button: {
        width: 100,
        height: 40,
        marginLeft: [5, '!important']
    },
    textfield: {
        width: '100%',
        background: '#F6F6F6'
    }
})

const Form = ({ onSendClick }) => {
    const classes = useStyles();

    const { formData, setFormData } = useContext(DataContext);

    const onUrlChange = (e) => {
        setFormData({ ...formData, url: e.target.value });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, type: e.target.value });
    }

    return (
        <Box className={classes.component}>
            <Select 
                className={classes.select} 
                value={formData.type} 
                label="POST" 
                onChange={(e) => handleChange(e)}
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            <TextField 
                size="small" 
                className={classes.textfield} 
                onChange={(e) => onUrlChange(e)}
            />
            <Button className={classes.button} variant="contained" onClick={() => onSendClick()}>Send</Button>
        </Box>
    )
}

export default Form;