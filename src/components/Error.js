import React from 'react'
import {useNavigate} from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-gradient-to-b from-black to-gray-800 w-full h-screen  text-white text-center ' >
        <h1 className='pt-72'>Page Not Found </h1>
        <button onClick={()=> navigate(-1)} >Click Here to  Go Back</button>
    </div>
  )
}

export default Error