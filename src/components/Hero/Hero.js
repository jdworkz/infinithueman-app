import React from "react";
import './Hero.css'
import { RiSearchLine } from 'react-icons/ri';
import Pic1 from '../../assets/Herobackground.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h1>Welcome to Infinite Hueman</h1>
                
                <div>
                     <p>Natural</p>
                    <p>Ancestral</p>
                    
                    <p>Remedies</p>
                    <div className="welcome">
            <p> A wellness company where a history of proven plant knowledge meets modern herbal science.<br/>
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