import { Typography, List, Divider, makeStyles, Box } from '@material-ui/core';
import Transaction from './Transaction';

const useStyle = makeStyles({
    component: {
        
    }
})

const Transactions = ({ transactions, deleteTransaction }) => {
    const classes = useStyle();

    return (
        <Box className={classes.component}>
            <Typography>History</Typography>
            <Divider style={{width: '100%'}} />
            <List>
                {
                    transactions.map(transaction => {
                        return <Transaction transaction={transaction} deleteTransaction={deleteTransaction} key={transaction.id} />
                    })
                }
            </List>
        </Box>
    )
}

export default Transactions;