import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   movies:{}
  }

  export const MovieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      addMovie: (state,{payload}) => {
       state.movies=payload
      },
     
     
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addMovie} = MovieSlice.actions
  export const GetAllMovies=(state)=>state.movies.movies
  export default MovieSlice
  