import {useState} from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [result, setResult] = useState(0)
  
const calculations = () =>{ 
  const result = amount * rate * year / 100;
  setResult(result);
}
  return (
    <>
     <div className="container">
      <div>
        <input type="text" onChange={(e)=> {setAmount(e.target.value) }} placeholder='enter amount' className="form-control mb-3" />

        <input type="text" onChange = {(e) =>{setRate(e.target.value)}}  placeholder='enter rate as %' className="form-control mb-3" />
        <input type="text" onChange = {(e) =>{setYear(e.target.value)}} placeholder='enter year' className="form-control mb-3" />
        <button onClick ={calculations} className='btn btn-success'>Submit</button>
        <h3>{result}</h3>
      </div>
     </div>
    </>
  )
}

export default App



