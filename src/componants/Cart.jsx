import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCart } from '../rtk/slices/cart-slice';

function Cart() {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  console.log(cart)
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price + product.quantity
    return acc
  }, 0)
  return (
    <div>
      <Container className='py-6'>
        <h1>Welcome To Cart</h1>
        <h5>Total Price -{totalPrice.toFixed(2)}$</h5>
        <Button variant='primary' onClick={() => dispatch(clear())} className='mt-3'>Clear Cart</Button>
        <Table striped bordered hover size="sm" className='mt-5'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Img</th>
              <th>Price</th>
              <th>quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td><Image src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} /></td>
                <td>{product.price}$</td>
                <td>{product.quantity}</td>
                <td><Button variant='danger' onClick={() => dispatch(deleteFromCart(product))}>Delete From Cart</Button></td>
              </tr>
            ))}


          </tbody>
        </Table>
      </Container>


    </div>
  )
}

export default Cart
