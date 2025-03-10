import React from 'react'
import './Hero.css';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';



const Hero = () => {
  return (
    
    <div class="bg-gray-100">
      <Navbar />
          <div className="hero-container">
        <div className="heading__primary">
          <h1 className='text-black'>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
          <div className="hero-btns">
            <Link to="/flights">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large">GET STARTED</Button></Link>
              
          </div>
        </div>
        
        
      </div>
      
    </div>
    
  )
}

export default Hero