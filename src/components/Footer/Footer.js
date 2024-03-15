import React from "react"
import './Footer.css'
import {FaFacebook, FaInstagram, FaTwitter, FaTiktok} from 'react-icons/fa'
import NewsLetter from "../NewsLetter/NewsLetter"

const Footer = () => {
    return(
        <div className="footer">
            <NewsLetter/>
            <div className="copyright">
            
        <p>Copyright<span>&#169;</span>2022 Infinite Hueman</p>
        </div>
        <div className="social">
            <p>Follow us on </p>

              <a href="https://facebook.com"  target="_blank"> <FaFacebook className='icon' /></a> 

              <a href="https://instagram.com"  target="_blank"><FaInstagram className='icon' /></a> 
              <a href="https://twitter.com"  target="_blank"> <FaTwitter className='icon' /></a> 
              <a href="https://tiktok.com"  target="_blank"><FaTiktok className='icon' /></a> 


        </div>
        


        </div>
          
    )
}
export default Footer;