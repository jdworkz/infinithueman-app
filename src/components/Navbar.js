import React, {useState} from 'react';
import "./Navbar.css";
import Hamburger from 'hamburger-react';
import Logo from '../assets/INFINITE HUEMAN LOGO-4.png';
import { Link } from 'react-router-dom';



 const Navbar = () =>{
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return(
        <div className= 'navbar'>
            <div className = 'container'>
                <h1><span><img src={Logo}  alt="Logo"></img> </span>
                </h1>
                <button className='btn'>Sign In </button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Shop">Shop</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    
                </ul>
                <div className='hamburger' onClick={handleClick}>
                {click ? (<Hamburger className='icon' />) : (<Hamburger className='icon' />)}
                </div>
            </div>
        </div>
    )
}
export default Navbar