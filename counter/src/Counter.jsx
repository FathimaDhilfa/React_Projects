import React, {useState} from 'react'
import { Container, Row, Col, Card, CardBody, CardTitle, Button } from 'react-bootstrap'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () =>{
        setCount((prev) => prev+1)
    }
       const decrement = () =>{
      setCount((prev) => prev-1)
    }
    const reset = () =>{
        setCount(0)
    }
    const clear = () => {
        
    }
  return (
    
<Container>
    <Row>
        <Col md={8}>
            <Card>
                <CardBody>
                    <CardTitle>Counter</CardTitle>
                    <Button className='me-2' onClick={decrement} variant="danger">-</Button>
                    <Button onClick={reset}>Reset</Button>
                    <Button className='ms-2' onClick={increment} variant='success'>+</Button>
                </CardBody>
            </Card>
        </Col>
        <Col md={4}>
        <Card>
                <CardBody>
                    <CardTitle>Counter Info</CardTitle>
                    <p>Current Value : <span className='fw-bold'>{count}</span> </p>
                    <p>Use + to increase the value</p>
                    <p>Use - to decrease the value</p>

                   
                </CardBody>
            </Card>
        </Col>
    </Row>
</Container>
)
}

export default Counter;