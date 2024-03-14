import React from "react";
import './Offers.css'
import Elclusive_image from '../../assets/IMG_4353.jpg'
const Offers=() =>{
    return(
        <div className="offers">
            <div className ="offers-left"> 
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PROUCTS </p>
            <button>Check Now</button>
            </div>
            <div className ="offers-right">
                <img src={Elclusive_image} alt=""/>

            </div>

        </div>
    )
};
export default Offers