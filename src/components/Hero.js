import React from "react";
import './Hero.css'
import { RiSearchLine } from 'react-icons/ri';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                
                
                <form className='search'>

                    <div>
                        <input type='text' placeholder='Search product..' />
                    </div>
                    <div className='radio'> 
                        
                        <button type='submit'>< RiSearchLine className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Hero