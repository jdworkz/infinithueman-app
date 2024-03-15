import React from "react";
import'./NewsLetter.css'
const NewsLetter=()=>{
    return(
        <div className='News-letter'>
            <h1>Get Exclusive Offers</h1>
            <p>Subscribe to our Newsletter and stay updated</p>
            
            <div >
                <input type="email" placeholder="Enter your email"/>
                <button>Subscribe</button>

            </div>

        </div>
    )
};
export default NewsLetter