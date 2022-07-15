import React from 'react'

import {Routes, Route } from 'react-router-dom'
import Cart from '../cart/Cart'
import Products from '../products/Products'
import Signup from '../signup/Signup'

function RoutesHaHa({ productItem, cartItem, handleAddProduct, handleRemoveProduct }) {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Products  productItem={ productItem }  handleAddProduct={handleAddProduct} />} />
        <Route path='/signup' exact element={<Signup/>} />
        <Route path='/cart' exact element={<Cart cartItem={cartItem} handleAddProduct={handleAddProduct} handleRemoveProduct={ handleRemoveProduct} /> } />
      </Routes>
    </div>
  )
}

export default RoutesHaHa