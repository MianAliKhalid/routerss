import React from 'react'
import movie from '../assests/movie.json'
const Anime = () => {


    let year = 2000;
    let chk;
  return (
    <div className='bg-gradient-to-b from-black to-slate-800 w-full min-h-screen' >
        <h1 className='text-4xl text-white py-10 text-center capitalize '>1990's Movie List</h1>

        

        <div className='flex text-white w-full flex-wrap  h-full justify-evenly  ' >
       {
        
        movie.map((movie)=>{

            chk = movie.year;
            if(chk <= year){
                
            return(
                <div key={movie.key} className=' w-64 m-2 h-full flex flex-col justify-center items-center box-content border-2 border-white hover:scale-105 duration-200' >
            <div className='flex justify-center' >
                <img className='w-3/4 my-4' src={movie.thumbnail} alt="" />

            </div>
            <div className='flex flex-col self-start px-2  ' >
                <h1>Movie Name: {movie.title}</h1>
                <p>Release Date: {movie.year} </p>
                <p>Genre: {movie.genres} </p>
                
            </div>
        </div>
            )}
        })
    }
    </div>

        
        
        
      
      
    </div>
  )
}

export default Anime
