import { Grid } from '@material-ui/core';
import Image from './Image';

const Images = ({ data }) => {
    console.log(data);
    return (
        <Grid container >
            {
                data.map(image => (
                    <Grid xs={3} item>
                        <Image key={image.id} image={image} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Images;