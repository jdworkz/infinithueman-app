import React from "react";
import './Home.css';

import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers";
function Home(){

    return(
     
      <div className="home">
        
           <h1>Welcome to Infinite Hueman</h1>
        <div className="welcome">
            <p>Welcome to Traditional Medicinals. A wellness company where a history of proven plant knowledge meets modern herbal science.<br/>
            Where flavor meets efficacy. Where human nature meets Mother Nature to help you be the best version of you.<br/> 
            Discover wellness with no strings attached—well, maybe one string.</p>
  
        </div>
        <Popular/>
        <button className="btn">Shop Now</button>
        <Offers/>
        </div>
  
    )
  
  }
  
   export default  Home;