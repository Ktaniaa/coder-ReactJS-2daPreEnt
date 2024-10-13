import React, { useEffect, useState } from 'react'
import '../styles/start.css'
import allproducts from "../assets/products.json"
import ItemList from './ItemList'
import '../styles/productCard.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
  const [products , setProducts] = useState ([])
  //Recibo los parametros de los navLink para utilizar category/:categoryId mediante el Hook useParams ()
  const {categoryId} = useParams()

  useEffect(()=>{
    let productsFiltered = []
    if (categoryId) {
        productsFiltered = allproducts.filter(product => product.category === categoryId)
    } else {
        productsFiltered = allproducts
    }
    setProducts(productsFiltered)

  }, [categoryId])
  return (
    <>    
      <h1>{greeting}</h1>
      <p className="textoInicio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur veritatis non aperiam quisquam similique molestias excepturi placeat repellendus laudantium impedit, repellat, consequuntur quos laborum distinctio, labore accusantium! Quibusdam, esse.</p>
      <div className='productCardCSS'>
        <ItemList products={products}/>
      </div>
    </>
  )
}

export default ItemListContainer