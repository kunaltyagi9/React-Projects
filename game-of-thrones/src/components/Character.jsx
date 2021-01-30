import { makeStyles } from '@material-ui/core';
import { Card, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        width: 200
    },
    image: {
        backgroundSize: 'cover',
        width: 200
    }
})

const Character = (props) => {
    const classes = useStyle();
    const { value }  = props;
    
    return (
        <Card className={classes.component}>
            <img src={value.imageUrl} className={classes.image} alt="picture" />
        </Card>
    )
}

export default Character;