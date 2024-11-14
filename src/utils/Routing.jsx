import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home'
import Seat from '../components/Seat';
import Report from '../components/Report';
import Search from '../components/search';
import Tourism  from '../components/Tourism';
import News from '../components/News';




const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/seat" element={<Seat/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Tourism" element={<Tourism/>}/>
      <Route path="/News" element={<News/>}/>




    </Routes>
  )
}

export default Routing