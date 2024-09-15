import React from 'react'
import { Button, Card } from 'react-bootstrap'
import fromatCurrency from './formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext';

 function StoreItem({id,price,name,imgUrl}) {
    const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart} = useShoppingCart()
    const quantity =  getItemQuantity(id);
  return (
    <Card className='h-100'>
        <Card.Img src={imgUrl} variant='top' style={{height:"200px" , objectFit:"cover"}} />
        <Card.Body >
            <Card.Title className='d-flex justify-content-between align-items-baseline' >
                <span className='fs-2 my-1' >{name}</span>
                <span className='text-muted m'>{fromatCurrency(price)}</span>
            </Card.Title>
            <div className='mt-auto'>
            {
                quantity === 0 ? <Button onClick={() => increaseCartQuantity(id)} className='w-100'>Add To Cart</Button> : 
                <div className='d-flex align-items-center flex-column' style={{gap:"0.5rem"}}>
                    <div className='d-flex align-items-center justify-content-center ' style={{gap:"0.5rem"}}>
                        <Button  onClick={() => decreaseCartQuantity(id)}>-</Button>
                        <span className='fs-3'>{quantity} in cart </span>
                        <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                    </div>
                    <Button onClick={() => removeFromCart(id)} variant='danger' size='sm'>Remove</Button> 

                </div>
            }
            </div>
        </Card.Body>
    </Card>
  )
}
export default StoreItem