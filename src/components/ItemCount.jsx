import React from 'react'
import '../styles/products.css'

const ItemCount = () => {
  return (
    <div className='productRender'>
        <img></img>
        <ul className='productAmount'>
            <li><button>-</button></li>
            <li><p className='amount'>112312312312</p></li>
            <li><button>+</button></li>
        </ul>
    </div>
  )
}

export default ItemCount