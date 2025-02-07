import React, {useState} from 'react';
import "./Navbar.css";
import Hamburger from 'hamburger-react';
import Logo from '../../assets/INFINITE HUEMAN LOGO-4.png';
import { Link } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import { FaCartPlus } from "react-icons/fa";

import { FaRegUserCircle } from "react-icons/fa";

 const Navbar = () =>{
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const[menu,setMenu]= useState('home');

    return(
        <div className= 'navbar'>
            <div className = 'container'>
                <div className="logo-container">
                <Link to ="/Home"><span><img src={Logo}  alt="Logo"></img> </span></Link>
                </div>
                <div >

                
                <Link to="/LoginForm">< FaRegUserCircle className="sign-btn"  /></Link> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li onClick={()=>{setMenu("home")}}><Link to="/Home">Home</Link>{menu==="home"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("shop")}}><Link to="/GameList">GameList</Link>{menu==="shop"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("about")}}><Link to="/About">Recommendations</Link>{menu==="about"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("contact")}}><Link to="/Contact">WishList</Link>{menu==="contact"?<hr/>:<></>}</li>
                    
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
                  <div> <Link to='/Cart'><FaCartPlus className="cart"/ > </Link>
                 
                  </div>
                  <div className="cart-count">0</div>
                 
            </div>
        </div>
    )
}
export default Navbar