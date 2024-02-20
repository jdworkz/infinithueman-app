import React, {useState} from 'react'
import "./Navbar.css"

import Logo from '../assets/INFINITE HUEMAN LOGO-4.png'

const Navbar = () =>{
    return(
        <div className= 'navbar'>
            <div className = 'container'>
                <h1><span><img src={Logo} width='100' height='100' alt="Logo"></img> </span>
                </h1>
                <button className='btn'>Sign In </button>
                <ul className = 'nav-menu'>
                    <li><a href='Home.js'>Home</a></li>
                </ul>

            </div>
        </div>
    )
}
export default Navbar