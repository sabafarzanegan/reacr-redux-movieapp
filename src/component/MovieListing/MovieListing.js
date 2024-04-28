import React from 'react'
import { useSelector } from 'react-redux'
import { GetAllMovies } from '../../redux/MovieSlice'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.scss"
function MovieListing() {
   
    const movies = useSelector(GetAllMovies);
    // const RenderMovies=movies.Search
    // console.log(RenderMovies);
    let RenderRespons=""
    RenderRespons=movies.Response==="True"?(
        movies.Search.map((item)=>(
            <MovieCard key={item.imdbID} data={item}/>
        ))
    ):(<h1>data does not fetch</h1>)
   
return (
    <>
     <h1>All MOvies</h1>
     <div className="movielistingcontainer">
    {RenderRespons}

     </div>
    </>
)
    

    
  
}

export default MovieListing
