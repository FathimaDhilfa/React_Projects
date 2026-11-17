import React from 'react'

function App() {
    
    let height = 0;
    let weight = 0;
    let bmi = "";
    const getHeight = (e) =>{
        height = e.target.value;
    }
    const getweight = (val) =>{
        weight = val;

    }
    const getBmi = () =>{
        let bmi = weight / (height * height);
        console.log(bmi);
        if (bmi < 18.5) {
    alert("Underweight");
    bmi = "Underweight"
}
        else if (bmi < 25) {
    alert("Normal weight");
    bmi = "Normal weight"
}
        else if (bmi < 30) {
    alert("Overweight");
    bmi = "Overweight"
}
        else {
    alert("Obesity");
    bmi = "Obesity"
}
console.log(bmi);
    }

  return (
    
    <>
    <div className="container align-content-center " style={{height: '90vh'}}>
        <div className="card p-5" >

            <h2>BMI CALCULATOR </h2>
            <input className='form-control mb-3' onChange={(e) => (getHeight(e)) } placeholder='enter your height' type="text" />
            <input className='form-control mb-3' onChange={(e) => {getweight(e.target.value)}} placeholder = 'enter your weight' type="text" /> 
            <button className='btn btn-success w-25' onClick={getBmi}>Submit</button>
            <h3>{bmi}</h3>
        </div>
    </div>
    </>
  )
}

export default App