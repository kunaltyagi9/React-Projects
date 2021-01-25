import { Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    component: {
        margin: '50px 0' 
    },
    container: {
        color: '#8ACA2B'
    }
})

const Cards = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography className = {classes.container} variant="h4" gutterBottom>Coronavirus Cases Globally</Typography>
        </Box>
    )
}

export default Cards;