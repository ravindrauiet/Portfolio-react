import React from 'react';

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

import "./FooterStyle.css";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>Faridabad Haryana</p>
                    <p>India</p>
                </div>
            </div>
            <div className="phone">
                <h4> 
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                9354156323</h4> 
            </div>
            <div className="location">
                <h4>
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                ravindranathjha76@gmail.com</h4>    
            </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>This is me Ravindra Nath Jha . CEO & Founder of Tech&Education. I enjoy discussing new project and Design challenges. 
            </p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
