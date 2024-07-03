import React from 'react'
import DP from "./assets/DP.jpg"
import { MdDoubleArrow } from "react-icons/md";
import "./About.css"
function About () {
  return (
      <div className="aboutmain" id="s2">
          <div className="top">
              <h1>ABOUT <span>ME</span></h1>
          </div>
          <div className="bottom">
                <div className="bottomleft">
                    <img src={DP} alt="GPT3 Logo" />
                </div>
                <div className="bottomright">
                    <p> I am a motivated Full Stack Developer with experience in MERN stack development, Web3, Solidity, and Next.js. 
                      As an intern at Codsoft, I contributed to the development of web applications, collaborating with cross-functional teams to implement features and optimize performance.
                       I also explored the exciting realms of Web3 and Solidity for blockchain development.</p>
                       <br/>
                       <br/>
                       <p>Things I love apart form Coding :</p>                
                       <div className="icons">
                              <a href="#"><MdDoubleArrow /></a>
                              <h3>Reading Books</h3>
                        </div>
                       <div className="icons">
                            <a href="#"><MdDoubleArrow /></a>
                            <h3>Exploring new places</h3>
                       </div>
                       <div className="icons">
                            <a href="#"><MdDoubleArrow /></a>
                            <h3>Sketching</h3>
                       </div>
                </div>
          </div>
    </div>
  )
}

export default About