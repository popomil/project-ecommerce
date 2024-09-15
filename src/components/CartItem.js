import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeItems from "../data/storeItems.json"
import fromatCurrency from './formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

 function CartItem({id,quantity}) {
  const {removeFromCart} = useShoppingCart()
    const item = storeItems.find((i) => i.id === id )
    if(item == null) return null
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
        <img src={item.imgUrl} alt='cart-img' style={{width:"125px", height:"75px", objectFit:"cover"}}/>
        <div className='me-auto'>
            <div>
                {item.name}{" "}
                {quantity > 1 && (<span className='text-muted' style={{fontSize:"0.65rem"}} >X{quantity}</span>
              )}
              <div className='text-muted' style={{fontSize:"0.75rem"}}>
                  {fromatCurrency(item.price)}
             </div>
            </div>


        </div>
        <div>{fromatCurrency(item.price * quantity)}</div>
        <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(id)}>&times;</Button>

    </Stack>
  )
}
export default CartItem