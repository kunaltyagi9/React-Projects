
import { Card, CardContent, makeStyles, Typography, Box } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        display: 'flex'
    },
    trade: {
        flex: 1,
        padding: 10
    },
    income: {
        color: 'green'
    },
    expense: {
        color: 'red'
    }
})

const ExpenseCard = ({ transactions }) => {
    const classes = useStyle();

    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc+=item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0) * -1).toFixed(2);
    
    return (
        <Box className={classes.container}>
            <Card className={classes.trade}>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography className={classes.income}>+₹{income}</Typography>
                </CardContent>
            </Card>
            <Card className={classes.trade}>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography className={classes.expense}>-₹{expense}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ExpenseCard;