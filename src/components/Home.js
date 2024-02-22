import React from "react";
import './Home.css';
import Pic1 from '../assets/Herobackground.jpg'
import Pic2 from "../assets/IMG_4353.jpg"
import logo from "../assets/INFINITE HUEMAN LOGO-4.png"


function Home(){

    return(
      
      <div className="home">
        <h1>Welcome to Infinite Hueman</h1>
        <div>
            <p>Welcome to Traditional Medicinals. A wellness company where a history of proven plant knowledge meets modern herbal science.<br/>
            Where flavor meets efficacy. Where human nature meets Mother Nature to help you be the best version of you.<br/> 
            Discover wellness with no strings attached—well, maybe one string.</p>
  
        </div>
        <div className="container">
  
        
        <img src={Pic1}  alt=""/>

        <img src={logo}  alt=""/>
       
        <img  src={Pic2}  alt=""/>
        
        
        </div>
        <button className="btn">Shop Now</button>
        </div>
  
    )
  
  }
  
   export default  Home;