import { useState } from 'react';

import { TextField, Checkbox, TableCell, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    textfield: {
        width: '100%'
    },
    tablecell: {
        padding: ['2px 5px', '!important'],
        border: '1px solid rgba(224, 224, 224, 1)',
        borderCollapse: 'collapse'
    },
    checkbox: {
        padding: ['2px 5px', '!important'],
    }
});

const AddRow = ({ addRows, rowId, data, setData }) => {
    const classes = useStyles();

    const [checkCheckbox, setCheckCheckbox] = useState(false);
    
    const handleChange = (e) => {
        
        let result = data.filter(entry => entry.id === Number(e.target.name))[0];
        
        if (!checkCheckbox) {
            setCheckCheckbox(true);
            addRows(oldArr => [...oldArr, rowId]);
            result = { ...result, id: rowId, check: true }
        } else {
            setCheckCheckbox(false);
            result = { ...result, id: rowId, check: false }
        }
        
        let index = data.findIndex((value) => value.id === Number(e.target.name));
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            });
            setData(newArray)    
        }
    }
    
    const onTextChange = (e) => {
        let result = data.filter(entry => entry.id === rowId)[0];
        result = { ...result, id: rowId, [e.target.name]: e.target.value }

        let index = data.findIndex((value) => value.id === rowId);
        
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            });
            setData(newArray)    
        }
    }
    
    return (
        <TableRow>
            <TableCell className={classes.tablecell}>
                <Checkbox 
                    checked={checkCheckbox}
                    className={classes.checkbox} 
                    size='large' 
                    name={rowId}
                    onChange={(e) => handleChange(e)} />
            </TableCell>
            <TableCell className={classes.tablecell}>
                <TextField className={classes.textfield}
                    inputProps={{ style: { height: 30, padding: '0 5px' } }}
                    name="key"
                    onChange={(e) => onTextChange(e)}
                />
            </TableCell>
            <TableCell className={classes.tablecell}>
                <TextField className={classes.textfield}
                    inputProps={{ style: { height: 30, padding: '0 5px' } }}
                    name="value"
                    onChange={(e) => onTextChange(e)}
            /></TableCell>
        </TableRow>
    )
}

export default AddRow;