import React from 'react'
import '../styles/productCard.css'
import { NavLink } from 'react-router-dom'
/*
    {
        "id": 21,
        "title": "LG Optimus Chat C550",
        "description": "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis",
        "price": 56.7,
        "pictureUrl": "http://dummyimage.com/300x300.png/dddddd/000000"
    }
*/
const Item = ({item}) => {
  return (
    <ul>
        <li><img src={item.image}/></li>
        <li><h2>{item.title}</h2></li>
        <li><span>{item.description}</span></li>
        <li><span>${item.price}</span></li>
        <li><NavLink to={`/detail/${item.id}`}><button>Ver Detalle</button></NavLink></li>
    </ul>
  )
}

export default Item