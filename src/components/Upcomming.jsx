import React from 'react'
import movie from '../assests/movie.json'

const Upcomming = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-black to-gray-800' >
    <h2 className='text-center text-white 
   text-4xl ' >2020's Collection</h2>

    <div className='h-full w-full  flex justify-evenly items-center  flex-wrap ' >


      {
        movie.map((m)=>(
          <div className='bg-red-500 h-96 w-1/4 mt-10 mx-10 flex flex-col justify-center items-center relative border border-white rounded-lg hover:scale-105 '>
          <div className='w-full h-full'>
            <img className='w-full h-full object-fill duration-200 opacity-100  hover:opacity-0 rounded-lg ' src={m.thumbnail} alt="Movie Poster" />
          </div>
          <div className='absolute inset-0 text-white opacity-0 hover:opacity-90 z-10 flex flex-col justify-center items-center rounded-lg bg-black'>
            <h1>Movie Name: {m.title} </h1>
            <p>Year: {m.year}</p>
            <p>Genre: {m.genres}</p>
          </div>
        </div>

        ))
      }
      
   



    </div>
  </div>
  )
}

export default Upcomming
