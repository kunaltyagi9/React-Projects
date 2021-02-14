import { Box, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#F6F6F6',
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}))

const BreadCrumb = ({onTextChange, onCountChange}) => {
    const classes = useStyles();
    return (
        <Box m={1} className={classes.component}>
            <TextField 
                onChange={(e) => onTextChange(e.target.value)}
                label="Search images" 
            />
            <TextField 
                onChange={(e) => onCountChange(e.target.value)}
                label="Number of images" 
                type="number"
            />
        </Box>
    )
}

export default BreadCrumb;