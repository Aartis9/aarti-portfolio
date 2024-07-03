import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

import Typewriter from 'typewriter-effect';


import "./Home.css"
function Home() {
   


  return (
    <div className="main" id="s1">
        <div className="home1">
          <h1>Hello, I am <br/><span >
                            <Typewriter
                    options={{
                      strings: ['Aarti Kumari'],
                      autoStart: true,
                      loop: true,
                    }}
                  />

          </span>
    
</h1>
        </div>
         <div className="home2">
            <h2>Frontend Developer</h2>
         </div>

        <div className="home3">
            <h4>Passionate and creative Full Stack Developer having proficiency in MERN Stack.
             <br/> Attired with a variety of tools & technologies and keen to learn new one.</h4>
        </div>
       <div className="home4">
            <div className="home4a">
                 <a href="#"><FaGithub /></a>
            </div>
            <a href="#"><IoLogoLinkedin /></a>
        </div>
    </div>
  )
}

export default Home