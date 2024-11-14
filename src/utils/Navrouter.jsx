import React from 'react'
import { NavLink } from "react-router-dom";


const Navrouter = () => {
  return (
    <>
    <nav>
      <NavLink to="/"></NavLink>
      <NavLink to="/Seat"></NavLink>
      <NavLink to="/Search"></NavLink>
      <NavLink to="/Tourism"></NavLink>
      <NavLink to="/News"></NavLink>


    </nav>
    </>
  )
}

export default Navrouter