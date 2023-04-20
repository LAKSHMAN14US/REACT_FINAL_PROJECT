import "./FooterStyles.css";
import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone,FaTwitter} from "react-icons/fa";


export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={{color : "#fff",marginRight:"2rem"}}/>  
                  <div>
                    <p> 214 VOC STREET</p>
                    <p> Tamil Nadu</p>
                  </div>
                </div>

                <div className="phone">
                <h4><FaPhone size={20} style={{color : "#fff",marginRight:"2rem"}}/>
                63740 61613</h4>
                </div>

                <div className="email">
                <h4><FaMailBulk size={20} style={{color : "#fff",marginRight:"2rem"}}/>
                uslakshman2@gmail.com</h4>
                </div>
            </div>

            <div className="right">
              <h4>About the company</h4>
              <p>This is me Lakshman.I enjoy working on new projects and design challenges</p>
              <div className="social">
              <FaFacebook size={30} style={{color : "#fff",marginRight:"1rem"}}/>
              <FaTwitter size={30} style={{color : "#fff",marginRight:"1rem"}}/>
              <FaLinkedin size={30} style={{color : "#fff",marginRight:"1rem"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}
