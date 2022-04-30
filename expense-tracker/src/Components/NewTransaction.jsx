import { useState } from 'react';
import { Typography, Box, TextField, Button, styled } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px
    }
`;

const StyledButton = styled(Button)`
    background: #445A6F;
    color: #fff;
`;

const NewTransaction = ({ addTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const newTransaction = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }
        addTransaction(transaction);
    }
    
    return (
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField value={text} label="Enter Expense" onChange = {(e) => setText(e.target.value)} />
            <TextField value={amount} label="Enter Amount" onChange = {(e) => setAmount(e.target.value)}  />
            <StyledButton variant="contained" onClick={newTransaction}>Add Transaction</StyledButton>
        </Container>
    )
}

export default NewTransaction;