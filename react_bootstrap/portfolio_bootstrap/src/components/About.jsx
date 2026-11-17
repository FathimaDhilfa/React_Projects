import React from 'react'

const About = () => {
  return (
    <div className='row container-fluid mt-5 p-4'>
        <div className='col-7'>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut reiciendis minima dolorum eveniet similique in hic sed soluta cumque et, maxime dicta labore perspiciatis repudiandae dolore pariatur. Corporis, dicta nostrum?</p>
        </div>
        <div className='col-5'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/r6zFZQm0hcc?si=vMZy6TtHwh8gPXdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default About