import { useState } from 'react';

import { Box, Typography, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';

import AddRow from './AddRow';

const useStyles = makeStyles({
    textfield: {
        width: '100%'
    },
    tablecell: {
        padding: ['7px 5px', '!important'],
        border: '1px solid rgba(224, 224, 224, 1)',
        borderCollapse: 'collapse'
    },
    checkbox: {
        padding: ['2px 5px', '!important'],
    }
});

const CreateTable = ({ text, data, setData }) => {
    const classes = useStyles();
    const [rows, addRows] = useState([0]);
    
    return (
        <Box>
            <Typography mt={2} mb={2}>{text}</Typography>
            <Table sx={{ minWidth: '100%', border: '1px solid rgba(224, 224, 224, 1)' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tablecell}></TableCell>
                        <TableCell className={classes.tablecell}>KEY</TableCell>
                        <TableCell className={classes.tablecell}>VALUE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row, index) => {
                            return <AddRow 
                                addRows={addRows} 
                                rowId={index} 
                                key={index}
                                setData={setData}
                                data={data} 
                            />
                        })
                    }
                </TableBody>
            </Table>
        </Box>
    )
}

export default CreateTable;