
import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    meme: {
        width: 200,
        objectFit: 'cover'
    }
})

export const Image = ({ image }) => {
    const classes = useStyles();

    const getImageURL = (url) => {
        if(url.includes('gifv')){
            url = url.substring(0, url.length - 1);
        }else if(url.includes('comments')){
            return '';
        }
        return <img className={classes.meme} src={url} onError='' alt="meme" />
    }
    return (
        <Card>
            {   
                getImageURL(image.data.url)
            }
        </Card>

    )
}

export default Image;