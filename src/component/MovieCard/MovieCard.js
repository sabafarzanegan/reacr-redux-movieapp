import React from 'react'
import "./MovieCard.scss"

function MovieCard(props) {
  const {data}=props
  
  return (
  <>
  <div class="card" style={{width:"18rem",maxHeight:"45rem"}}>
  <img style={{maxWidth:"18rem"}} src={data.Poster} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{data.Title}</h5>
    <div className='detailcontainer'>
      <p className='yearmovie'>{data.Year}</p>
      <p className='typemovie'>{data.Type}</p>
    </div>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </>
  )
}

export default MovieCard
