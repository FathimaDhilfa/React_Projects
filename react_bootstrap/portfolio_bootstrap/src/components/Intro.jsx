import React from 'react'

const Intro = () => {
  return (
    <div className='row container-fluid align-items-center' style={{height: '90vh'}}>
        <div className='col-md-6 p-4'>
            <h1>Portfolio Webpage</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem dolores nobis fugit culpa quia, voluptatibus iure cum a incidunt voluptatum doloribus est ipsam sunt veniam doloremque ratione expedita itaque.</p>
            <a href="" className='btn btn-info'>Visit</a>
        </div>
        <div className='col-md-6 '> 
            <img className='img-fluid' src="https://i.pinimg.com/originals/9f/7f/8d/9f7f8d9a7a60c60fda280295bde61fd4.jpg" alt="" />
        </div>
    </div>
  )
}

export default Intro