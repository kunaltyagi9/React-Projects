
import { Card, styled } from '@mui/material';

const StyledImage = styled('img')({
        height: 300,
        width: '100%',
        objectFit: 'cover'
    }
);

const Image = ({ image }) => {
    
    return (
        <Card>
            <StyledImage src={image.largeImageURL} alt={image.user} />
        </Card>
    )
}

export default Image;