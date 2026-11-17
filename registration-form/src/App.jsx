import { useState } from 'react'
import './App.css'
import {Form, FormGroup, FormLabel, FormControl, Button, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [form, setForm] = useState({
  'name': '',
  'email': '',
  'age': ''
} )
const [success, setSuccess] = useState(false)
const [error, setError] = useState("")
const handleChange =(event) => {
  const {name,value} = event.target
  setForm((prevData) => ({
    ...prevData,
    [name]:value
  }))
}
const submit = (event) => {
  event.preventDefault()
  setSuccess(false)

  if(!form.name){
    setError('please enter your name')
    return;
  }
  if(!form.email){
    setError("please enter your email id")
    return;
  }
  if(!form.age){
    setError("please enter your age")
    return;
  }
  setSuccess(true)
}

  return (
    <>
      <h1>Registration Form</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {
              success && (
                <Alert variant='success'>Registration Success</Alert>
              )
            }
            {
              error && (
                <Alert variant='danger'>{error}</Alert>
              )
            }
              <Form onSubmit={submit}>
                <FormGroup>
                  <FormLabel>Name</FormLabel>
                  <FormControl type='text' onChange={handleChange}  name='name' placeholder='enter your name'></FormControl>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Email</FormLabel>
                  <FormControl type='email' onChange={handleChange} name='email' placeholder='enter your email id'></FormControl>
                </FormGroup>
                <FormGroup>
                  <FormLabel className='mb-3' >Age</FormLabel>
                  <FormControl type='number' onChange={handleChange} name='age' placeholder='enter your age'></FormControl>
                </FormGroup>
                <Button type="submit" variant = 'success'>Submit</Button>
              </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
