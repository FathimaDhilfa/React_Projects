import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container-fluid bg-info '>
        <div className="row">
            <div className="col">
                <h3>Portfolio</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur at placeat rerum, nihil, labore asperiores earum laudantium atque et praesentium minima, eaque dolore ab ipsa cupiditate? Deserunt nemo laudantium praesentium.</p>
            </div>
            <div className="col">
                <h3>Important Links</h3>
                <a href="">Link 1</a>
                <a href="">Link 2</a>
                <a href="">Link 3</a>
            </div>
            <div className="col">
                <h3>Feedbacks</h3>
                <input type="text" placeholder='enter your feedbacks' className="form-control mb-3" />
                <button className='btn btn-success'>Submit</button>
            </div>
        </div>
    <h4 className='text-center text-light h6'>Portfolio 2026 &copy; all rights reserved </h4>
    </div>
  )
}

export default Footer