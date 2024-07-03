import React from 'react'
import "./Project.css"
import image from "./assets/image.png"
import Card from "./Card.jsx"
const Project=()=> {
  return (
    <div className='projectout'id="s4">
        <div className='projecthead'>
            <h1>Projects</h1>
        </div>
        <div className='projectcard1'>
            <div className='projectcard'>
                    <Card img={image} name="Calculator" desc="This project is built using Next Js and Sanity CLI where users can shop for fruits and add to cart and also payment integration is done using Stripe " view="https://www.google.com" git="githud.com/7twik" />
            </div>
            <div className='projectcard'>
                    <Card  img={image} name="UDYOG-SAARTHI" desc="This project is built using Next Js and Sanity CLI where users can shop for fruits and add to cart and also payment integration is done using Stripe" view="https://github.com/Aartis9/UDYOG-SAARTHI-Latest" git="https://github.com/Aartis9" />
            </div>
        </div>
    </div>
  )
}

export default Project