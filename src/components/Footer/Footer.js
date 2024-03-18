import React from "react"
import './Footer.css'
import {FaFacebook, FaInstagram, FaTwitter, FaTiktok} from 'react-icons/fa'
import NewsLetter from "../NewsLetter/NewsLetter"
import img1 from "../../assets/INFINITE HUEMAN LOGO-4.png"

const Footer = () => {
    return(
        <div className="footer">
            <NewsLetter/>
            
        <div className="social">
            <p>Follow us on </p>

              <a href="https://facebook.com"  target="_blank"> <FaFacebook className='icon' /></a> 

              <a href="https://instagram.com"  target="_blank"><FaInstagram className='icon' /></a> 
              <a href="https://twitter.com"  target="_blank"> <FaTwitter className='icon' /></a> 
              <a href="https://tiktok.com"  target="_blank"><FaTiktok className='icon' /></a> 


        </div>
        <div className="copyright">
            <hr/>
            <img src={img1} alt=""/><p>Copyright@2023-All Right Reserved Infinite Hueman</p>
        </div>


        </div>
          
    )
}
export default Footer;