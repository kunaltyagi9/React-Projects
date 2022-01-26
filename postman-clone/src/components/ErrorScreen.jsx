
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    error: {
        // objectFit: 'cover',
        width: '80%',
        height: 'auto',
        objectPosition: 'center 0%',
        margin: 'auto'
    }
})

const ErrorScreen = () => {
    const classes = useStyles();
    const error = 'https://i.stack.imgur.com/01tZQ.png';

    return (
        <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <Box style={{ display: 'flex' }}>
                <img src={error} alt="error" className={classes.error} />
            </Box>
        </Box>
    )
}

export default ErrorScreen;