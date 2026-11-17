import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const nav = useNavigate()
  const [loginData, setLoginData] = useState({
    email: '',
    password : ''
  })
const login = () => {
    const {email, password} = loginData
    if (!email || !password)
        alert('enter valid inputs')
      else 
        alert('login success')
      nav('/home')
    
}
  
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
      <div className='bg-light shadow w-75'>
        <Row>
          <Col sm = {6} md = {4}>
          <img className='img-fluid' src='https://cdni.iconscout.com/illustration/premium/thumb/user-login-7210570-5857593.png' alt="" />
          </Col>
          <Col sm = {6} md = {8} className='p-4'>
              <h3>Login</h3>
              <div>
                <input className='form-control mb-3' onChange={(e) => {setLoginData({...loginData, email: e.target.value})}} name= 'email' placeholder='enter your email id' type="text" />
                <input className='form-control mb-3' onChange={(e) => {setLoginData({...loginData, password: e.target.value})}} name= 'password' placeholder='enter your password' type="text" />
                <button onClick={login} className='btn btn-success'>Login</button>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Landing