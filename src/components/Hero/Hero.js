import React from "react";
import './Hero.css'
import { RiSearchLine } from 'react-icons/ri';
import Pic1 from '../../assets/Herobackground.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h1>Welcome to GamingBank</h1>
                
                <div>
                     
                    <div className="welcome">
            <p> Welcome to the ultimate game recommendation service. Whether you're into action-packed adventures, immersive RPGs, or casual puzzles, 
                we’ve got you covered! Get personalized game suggestions, build your list, and find the best deals—all in one place. 
                Join our community and level up your gaming experience today!<br/>
            </p>
  
        </div>
                </div>
            
      
    </div>
    <div className='hero-right'>
        <img src={Pic1} alt=''/>
        
    </div>
                
            </div>
        

    )
}
export default Hero