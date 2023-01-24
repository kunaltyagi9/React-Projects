import Carousel from 'react-multi-carousel';

import { styled, Box } from '@mui/material';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const StyledBanner = styled('img')({
    width: '100%'
})

const Poster = styled('img')({
    width: 165,
    position: 'absolute',
    left: 10,
    bottom: 0,
    transform: 'translateY(50%)'
})

const Banner = ({ movies }) => {

    return (
        <Box style={{ width: '65%' }}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                showDots={false}
                slidesToSlide={1}
                containerClass="react-multi-carousel-list"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                style={{ overflow: 'visible' }}
            >
                {
                    movies.map(movie => (
                        <StyledBanner key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Banner;