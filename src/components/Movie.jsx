import React from "react";
import Cart from "./Cart";
import { Link, Outlet } from "react-router-dom";

const Movie = () => {
  return (
    <>
      <div className="bg-black ">
        <h1 className="text-white font-bold text-4xl text-center">
          All Movies
        </h1>

        <div className="text-white h-fit mt-10 p-10 flex justify-evenly">
          <div className="bg-gradient-to-r from-blue-700 to-pink-400 h-20 w-1/4 flex items-center justify-center">
            <Link to={"1990"}>
              <button>1990's Collection</button>
            </Link>
          </div>
          <div className="bg-gradient-to-l from-blue-700 to-pink-400 h-20 w-1/4 flex items-center justify-center">
            
              <button>All Movies</button>
            
          </div>
          <div className="bg-gradient-to-r from-blue-700 to-pink-400 h-20 w-1/4 flex items-center justify-center">
            <Link to={"2020"}>
              <button>2020's Collection</button>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
      <Cart />
    </>
  );
};

export default Movie;
