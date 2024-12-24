import Slider from "react-slick";
import React from 'react';
import { useSelector } from 'react-redux';
import MovieCart from './MovieCart'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const MovieListing = () => {
  const { movies } = useSelector((store) => store.movies);
  const { shows } = useSelector((store) => store.movies);


  let renderMovies =
    movies.length > 0 ? (
      movies.map((movie, index) => {
        return <MovieCart key={index} data={movie} />;
      })
    ) : (
      <div className='movies-error'>
        <h3>Movies are Loading....</h3>
      </div>
    );

    let renderShows =
    shows.length > 0 ? (
      shows.map((show, index) => {
        return <MovieCart key={index} data={show} />;
      })
    ) : (
      <div className='movies-error'>
        <h3>Shows are Loading....</h3>
      </div>
    );

  return (
   <div className='movie-wrapper '>
    <div className='movie-list '>
      <h2>Movies</h2>
      <div className='movie-container overflow-x-hidden  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>
        {renderMovies}
        </div>
    </div>
    <div className='movie-list '>
      <h2>Shows</h2>
      <div className='movie-container overflow-x-hidden  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>{renderShows}</div>
    </div>
   </div>

  );
};


export default MovieListing;
