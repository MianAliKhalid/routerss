import React from "react";
import movieData from '../assests/movie.json';

const Cart = (props) => {
    
  return (
    <div className="min-h-screen w-full flex flex-wrap bg-gradient-to-b from-black via-black to-gray-700 justify-center items-start px-5">
      {
        movieData.map((movie) => (

          <div key={movie.id} className="box-content rounded-sm border border-white h-auto m-5 w-72 flex flex-col items-center hover:scale-105 duration-300 shadow-lg shadow-white">
            <ul className="text-white flex flex-col justify-center items-center cursor-pointer w-full">
              <li className="flex items-center justify-center w-full">
              <a href={movie.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="mt-4 h-48 w-3/4 object-cover"
                  src={movie.thumbnail}
                  alt="Movie Poster"
                />
                </a>
              </li>
              <li className="mt-4">Movie Name: {movie.title}</li>
              <li className="mt-2">Release Date: {movie.year}</li>
              <li className="mt-2">Genre: {movie.genres}</li>
            </ul>
          </div>
        ))
      }
    </div>
  );
};

export default Cart;
