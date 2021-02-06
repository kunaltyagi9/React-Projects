import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Card, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        width: 200,
        margin: 10,
        position: 'relative'
    },
    container: {
        height: 300,
        width: '100%',
        position: 'absolute',
        top: 0,
        background: '#000000',
        opacity: '0.5',
        color: '#fff'
    },
    image: {
        width: '100%',
        height: 300,
        objectFit: 'cover'
    }
})

const Character = (props) => {
    const classes = useStyle();
    const { value }  = props;
    const [ toggle, setToggle ] = useState(false);

    const toggleHover = () => {
        setToggle(!toggle);
    }
    
    return (
        value.characterImageFull ? 
        <Card onMouseEnter={toggleHover} onMouseLeave={toggleHover}  className={classes.component}>
            <img src={value.characterImageFull} className={classes.image} alt="picture" />
            {toggle ? <Box className={classes.container}>
                <Typography>Name: {value.characterName}</Typography>
                <Typography>Real Name: {value.actorName}</Typography>
                <Typography>House: {value.houseName}</Typography>
                <Typography>Nickname: {value.nickname}</Typography>
            </Box> : '' }
        </Card> : ''
    )
}

export default Character;