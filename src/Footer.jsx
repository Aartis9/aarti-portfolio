import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import "./Footer.css"
function Footer() {
  return (
    <div className="footermain" id="s5">
        <div className="footer1">
             <h1> GET IN <span>TOUCH</span></h1>
       </div>
       <div className="footer2">
              <div className="footerdown1">
                    <a href="https://github.com/Aartis9" target="_blank"><IoLogoGithub />
</a>
                
              </div>
              <div className="footerdown2">
                    <a href="https://www.linkedin.com/in/aarti-kumari-976769308/ " target="_blank"><FaLinkedin /></a>
              </div>
              <div className="footerdown3">
                    <a href="mailto:aartirathore2004@gmail.com"><MdEmail /></a>
              </div>
              <div className="footerdown4">
                  <a href="tel:+916206276126"><IoCallSharp />
</a>
              </div>

       </div>
       <div className="footer3">
            <div className="footer3a">
                 <a href="mailto:aartirathore2004@gmail.com"><MdEmail />&nbsp;aartirathore2004@gmail.com</a>
            </div>
            <div className="footer3b">
                    <a href="tel:+916206276126"><IoCallSharp />&nbsp;+916206276126 </a>
                    {/* <p>+916206276126</p> */}
            </div>
        </div>
        
    </div>
  )
}

export default Footer