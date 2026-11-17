import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

const Product = () => {
  const [product, setProduct] = useState({})
  const {num} = useParams()
  console.log(num);
 

  useEffect(() => {getProduct()},[])
  console.log(product);

  const getProduct = async() =>{
    const response = await fetch(`https://fakestoreapi.com/products/${num}`)
    const result = await response.json()
    setProduct(result)
  }
  
  return (
    <div className='container-fluid'>
      <Link className='btn btn-info mt-2' to = {'/home'}>Go Back</Link>
      I am in Product page
      <div>
        <Row>
          <Col>
          <img className='img-fluid' src={product.image} alt="" />
          </Col>
          <Col>
          <h1>{product.title}</h1>
          <p>Category: {product.category}</p>
          <p>{product.description}</p>
          <h4 className='text-danger fw-bold'>Price: {product.price} </h4>
          </Col>
          
        </Row>
      </div>
    </div>
  )
}

export default Product