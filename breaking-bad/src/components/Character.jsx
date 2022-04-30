
import { Card, styled, Tooltip, Typography } from '@mui/material';

const Image = styled('img')({ 
    height: 300,
    width: '100%',
    objectFit: 'cover'
})

const Character = ({ item }) => {
    
    return (
        <Card>
            <Tooltip title={
                    <>
                        <Typography>Name:  {item.name}</Typography>
                        <Typography>Real Name: {item.portrayed}</Typography>
                        <Typography>Nickname: {item.nickname}</Typography>
                        <Typography>Birthday: {item.birthday}</Typography>
                        <Typography>Status: {item.status}</Typography>
                    </>
                }
            
                arrow placement="top">
                <Image src={item.img} alt = "character" />
            </Tooltip>
        </Card>
    )
}

export default Character;