import React from 'react'
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Home from './component/home/Home';
import MovieDetailes from './component/MovieDetailes/MovieDetailes';
import PageNotFound from './component/PageNotFound/PageNotFound';
function App() {
  return (
    <>
    <Header/>
   <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/movie/:omdbID' element={<MovieDetailes/>}/>
    <Route path='/movie/*' element={<PageNotFound/>}/>
    

   </Routes>
   <Footer/>
    </>
    
  

    
  )
}

export default App
