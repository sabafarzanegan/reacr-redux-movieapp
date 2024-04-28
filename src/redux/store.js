import { configureStore } from '@reduxjs/toolkit'


import MovieSlice from './MovieSlice'

export const store = configureStore({
  reducer: {
    movies: MovieSlice.reducer
  },
})