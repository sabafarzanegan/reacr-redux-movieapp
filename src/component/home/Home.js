import React, { useEffect } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import Apis from '../../common/Apis'
import { APIKey } from '../../common/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../redux/MovieSlice'
import MovieListing from '../MovieListing/MovieListing'


function Home() {
 let MovieText ="Harry"
 const dispatch=useDispatch()
  useEffect(()=>{
   const fetchMovie= async()=>{
    const Response=await Apis.get(`/?apikey=${APIKey}&s=${MovieText}`).catch(
      (err)=>{
       console.log("erroe is",err)
      }
    )
    dispatch(addMovie
    (Response.data))
   }
   fetchMovie()
  },[])
  return (
    <div>
  <MovieListing/>
    </div>
  )
}

export default Home
