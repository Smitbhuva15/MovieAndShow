import React, { useEffect } from 'react'
import MovieListing from '../commoponent/MovieListing'

import { useDispatch } from 'react-redux'

import { fetchAsyncMovies, fetchAsyncShows } from '../feature/Movies/movieSlice'
const Home = () => {
  const dispatch = useDispatch()
    const seriesText="Friends"
     const movieText="Harry"

  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText));
 
  },[dispatch]);


  return (
    <div className='overflow-x-hidden'>
      <div className='banner-img overflow-x-hidden'>
      <MovieListing />   
      </div> 
    </div>
  )
}

export default Home