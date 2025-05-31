
// import data from "../assets/data";
// import Item from "../item/Item";
import React from 'react'
import './Popular.css'
import Item from '/src/components/item/Item'
import { useState } from 'react'
import { useEffect } from 'react'

export const Popular = () => {

  const [popularProducts,setPopularProducts] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data))
  },[])

  return (
    <div className='popular'>
        <h1 className="heading">POPULAR IN WOMEN</h1>
        <hr/>
        <div className="item-list">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
