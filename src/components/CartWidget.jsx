import React from 'react'
/*Importo la imagen del carrito */
import imgCart from '../assets/cart.png'

const CartWidget = () => {
  return (
    <>
      <img src={imgCart} width={18}></img>
      <label>(4)</label>
    </>
  )
}

export default CartWidget