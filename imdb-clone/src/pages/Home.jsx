
import { Box } from '@mui/material';

// components
import Header from "../component/common/header/Header";
import Banner from '../component/Banner';
import UpNext from '../component/UpNext';
import Slides from '../component/Slides';

const Home = () => {

    return (
        <>
            <Header />
            <Box>
                <Banner />
                {/* <UpNext /> */}
            </Box>
            {/* <Slides />
            <Slides />
            <Slides />
            <Slides />
            <Slides /> */}
        </>
    )
}

export default Home;