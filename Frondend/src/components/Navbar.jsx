import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className='nav'>

        <h1>ELECTRONICS STORE</h1>

        <ol>
           <li> <NavLink to="/Products">PRODUCTS</NavLink>  </li>
           <li> <NavLink to="/Cards">CARDS</NavLink> </li>
        </ol>
    </div>

    </>
  )
}

export default Navbar