import { useState } from 'react';
import { Typography, Box, TextField, Button } from '@material-ui/core';


const NewTransaction = ({ addTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const newTransaction = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }

        addTransaction(transaction);
    }
    
    return (
        <>
            <Typography>Add New Transaction</Typography>
            <Box>
                <TextField value={text} label="Text" onChange = {(e) => setText(e.target.value)} />
            </Box>
            <Box>
                <TextField value={amount} label="Enter Amount" onChange = {(e) => setAmount(e.target.value)}  />
            </Box>
            <Button onClick={newTransaction}>Add Transaction</Button>
        </>
    )
}

export default NewTransaction;