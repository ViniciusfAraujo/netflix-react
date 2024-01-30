import React, { useEffect, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import requests from '../Requests'
import axios from 'axios'

const Main = () => {
    const [movies, setmovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=> {
        axios.get(requests.requestPopular).then((response) =>{
            setmovies(response.data.results)
        })
    },[])
    // console.log(movie);

    const truncateString = (str, num) => {
        if(str?.length > num){
            return str.slice(0, num) + '...'
        }else{
            return str
        }
    } 

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='w-full h-[550px] absolute bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl'>{movie?.title}</h1>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview, 150)}</p>
                <div className='my-4'>
                    <button className=' bg-gray-300 text-black font-semibold py-2 px-5 rounded'><FaPlay />Assitir</button>
                    <button className=' bg-[#6d6d6eb3] text-white  py-2 px-5 ml-4 rounded'>Assista mais tarde</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main