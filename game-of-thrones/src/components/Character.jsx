import { useState } from 'react';

import { Card, Box, Typography, styled } from '@mui/material';


const Component = styled(Card)`
    width: 200px;
    margin: 10px;
    position: relative
    
`
const Container = styled(Box)`
    height: 300px;
    width: 100%;
    position: absolute;
    top: 0;
    background: #000000;
    opacity: 0.5;
    color: #fff;
`

const Image = styled('img')({
    width: '100%',
    height: 300,
    objectFit: 'cover'
});


const Character = (props) => {
    
    const { value }  = props;
    const [ toggle, setToggle ] = useState(false);

    const toggleHover = () => {
        setToggle(!toggle);
    }
    
    return (
        value.characterImageFull ? 
        <Component onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <Image src={value.characterImageFull} alt="picture" />
            {
                toggle ? 
                    <Container>
                        <Typography>Name: {value.characterName}</Typography>
                        <Typography>Real Name: {value.actorName}</Typography>
                        <Typography>House: {value.houseName}</Typography>
                        <Typography>Nickname: {value.nickname}</Typography>
                    </Container> 
                : '' 
            }
        </Component> : ''
    )
}

export default Character;