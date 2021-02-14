import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        height: 300,
        width: '100%',
        objectFit: 'cover'
    }
})

const Image = ({ image }) => {
    const classes = useStyles();
    return (
        <Card>
            <img className={classes.image} src={image.largeImageURL} alt={image.user} />
        </Card>
    )
}

export default Image;