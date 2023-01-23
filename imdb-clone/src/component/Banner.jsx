import { useState, useEffect } from 'react';

import Carousel from 'react-multi-carousel';

import { getCategoryMovies } from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constant';

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

const Banner = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await getCategoryMovies(NOWPLAYING_API_URL);
            console.log(response);
            // setMovies(response.results);
        }

        getData();
    }, [])

    return (
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
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                movies.map(movie => (
                    <Banner key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                ))
            }
        </Carousel>

    )
}

export default Banner;