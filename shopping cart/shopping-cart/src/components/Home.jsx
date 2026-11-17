import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {
const [data, setData] = useState([])
console.log(data);

  useEffect(() => {
    getProducts()
  },[])

  

  const getProducts = () => {
   
    fetch('https://fakestoreapi.com/products').then((response) => response.json())
    .then((result) => {setData(result)})
    .catch((error) => {
      console.log(error);
    })

  }
  return (
    <>

    {
      data.length > 0 ? (
        <div className='row mt-3 justify-content-between'>
          <h2 className='text-center'>Products</h2>
          {
            data.map(item => (
          <Card className='mb-2 shadow' style={{ width: '18rem'}}>
      <Card.Img className='img-fluid' style={{height:'200px',objectFit: 'cover'}} variant="top" src={item?.image} />
      <Card.Body>
        <Card.Title>{item?.title}</Card.Title>
       
        <Link className='btn btn-secondary' to = {`/prodct/${item?.id}`}>Know More</Link>
      </Card.Body>
    </Card>))
          }
        </div>

      ): (
        <h1 className='text-danger'>No Data found</h1>
      )
    }

      
    </>
  )
}

export default Home