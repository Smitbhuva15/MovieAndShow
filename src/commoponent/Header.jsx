import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../feature/Movies/movieSlice';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault(); // Fixing the missing parentheses
    if(term===""){
     return  alert("Please Enter Search Item")
    }
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (
    <div className="header secondary">
      <div className="logo font-primary">
        <Link to="/">Movie App</Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
            className="addinputcss"
            aria-label="Search Movies or Shows"
          />
          <button type="submit" aria-label="Search">
            <IoMdSearch className="btn1" />
          </button>
        </form>
      </div>

      <div className="user-image">
        {/* Correcting the image path */}
        <img src="/images/user.png" alt="User" />
      </div>
    </div>
  );
};

export default Header;
