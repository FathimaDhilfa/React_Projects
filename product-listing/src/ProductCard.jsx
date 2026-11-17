import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({products}) => {
    console.log(products);
    
  return (
    <>
     <Card className='me-3 p-3 shadow mb-3' style={{ width: '18rem' }}>
      <Card.Img className='img-fluid' style={{height: '50%', objectFit: 'cover'}} width={'80%'} variant="top" src={products.imgurl} />
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
        <Card.Text>
        <span className='fw-bold'>Price : {products.price}</span>
        </Card.Text>
        <Card.Text>
       <span className='fw-bold'>Stock : {products.stock}</span> 
        </Card.Text>
        <Button disabled={products.stock === 0} variant={products.stock === 0 ? 'danger':'success'}>Buy</Button>
      </Card.Body>
    </Card>
    </>
)
}

export default ProductCard