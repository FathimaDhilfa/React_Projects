import React from 'react'
import './Hero.css'
import dhilfa from '../assets/dhilfa.png'

const Hero = () => {
    
    return (
        <section className='hero'>
            <div>
                <img src={dhilfa} className='image' alt="dhilfa" />
            </div>
            <div className='hero-text'>
                <h1>Hi, I'm Fathima Dhilfa</h1>
                <p>I'm a Front-End Developer</p>
                <button onClick = {() => document.getElementById('aboutme').scrollIntoView({behavior: 'smooth'})} className="hero-btn" >About Me</button>
            </div>
        </section>
    )
}

export default Hero;
