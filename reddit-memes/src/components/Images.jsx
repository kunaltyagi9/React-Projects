import { Grid } from '@material-ui/core';
import Image from './Image';

const Images = ({ data }) => {
    console.log(data);
    return (
        <Grid container>
            {
                data.map(image => (
                    <Grid key={image.data.url} item xs={3}><Image image={image} /> </Grid>
                ))
            }
        </Grid>
    )


}

export default Images;