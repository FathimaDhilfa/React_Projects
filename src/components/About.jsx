import React from 'react'
import './About.css'

const About = () => {
  return (
<section className="about-me" id='aboutme'>

    <div style={{color:"2e2d2d"}}>
        <h2>About Me</h2>
        <p className='abt-content'>As a highly skilled and experienced computer programmer, I am passionate about writing code and developing high-quality software that meets the needs of my clients. My strong background in computer science, coupled with my commitment to using the best programming practices and tools available, makes me a valuable asset to any software development team.</p>
    </div>
    <div>
        <img src="https://i.pinimg.com/1200x/b4/3d/1e/b43d1eab0a43a743f5a935812cb8a5e3.jpg" className="abt-img" alt="" />
    </div>
</section>
)
}

export default About