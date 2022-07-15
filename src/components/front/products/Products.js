import React from 'react'
import './Products.css'

function Products({ productItem, handleAddProduct }) {
  return (
    <div className='products'>
      {
        productItem.map((product) => {
          return <div key={product.id} className='card'>
            <div>
              <img loading='lazy' src={product.image} alt={product.name} className='product-img'/>
            </div>
            <div>
              <h3 className='product-name'>{product.name}</h3>
            </div>
            <div className='product-price'>
            ₹{product.price}
            </div>
            <div>
              <button className='product-add-button' onClick={() => handleAddProduct(product)}>Add to Cart</button>
            </div>
          </div>
        })  
      } 
    </div>
  )
}

export default Products