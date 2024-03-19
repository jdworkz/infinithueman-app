import React from "react";
import './Home.css';

import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers";

import Hero from '../Hero/Hero'
function Home(){

    return(
      
      <div className="home">
        <Hero/>
        
           
       
        <Popular/>
        
        <Offers/>
        
        </div>
  
    )
  
  }
  
   export default  Home;