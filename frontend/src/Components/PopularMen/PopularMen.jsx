import React from 'react'
import './PopularMen.css'
import data_product from '../Assets/datamen'
import Item from '../Item/Item'


const Popular = () => {
  return (
    <div className='popular-men'>
      <h1>POPULAR IN MEN</h1>
      <hr/>
      <div className="popular-item-men">
        {data_product.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular