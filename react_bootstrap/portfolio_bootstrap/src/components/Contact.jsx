import React from 'react'

const Contact = () => {
  return (
    <div className='container-fluid p-5 mt-5'>
        <h1>Contact Me</h1>
        <textarea name="" className='form-control mb-3' placeholder="enter your message"id=""></textarea>
        <input placeholder='enter your name' className='form-control mb-3' type="text" />
        <button className='btn btn-success'>Submit</button>
    </div>
  )
}

export default Contact