import React, {useState} from 'react';
import "./Navbar.css";
import Hamburger from 'hamburger-react';
import Logo from '../../assets/INFINITE HUEMAN LOGO-4.png';
import { Link } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';



 const Navbar = () =>{
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return(
        <div className= 'navbar'>
            <div className = 'container'>
                <h1><span><img src={Logo}  alt="Logo"></img> </span>
                </h1>
                <button className='btn'><Link to="/LoginForm">Sign In</Link> </button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Shop">Shop</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    
                </ul>
                <div className='hamburger' onClick={handleClick}>
                {click ? (<Hamburger className='icon' />) : (<Hamburger className='icon' />)}
                </div>
                <div className='hero2'>
            <div className='content'>
                <form className='search'>

                   <div>
    <                 input type='text' placeholder='Search product..' />

                  </div>
    
                  <div className='radio'> 
                        
                        <button type='submit'>< RiSearchLine className='icon'/></button>
                    </div>

                  </form>
                  </div>
                  </div>
            </div>
        </div>
    )
}
export default Navbar