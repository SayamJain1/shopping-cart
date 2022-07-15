import './App.css';
import {BrowserRouter}  from 'react-router-dom'; 
import { useState } from 'react';

import data from './components/back/data/Data';
import Header from './components/front/header/Header';
import RoutesHaHa from './components/front/routes/RoutesHaHa';

function App() {
  const { productItem } = data;
  const [cartItem, setCartItem] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItem.find(item => {
      return item.id === product.id
    })
    if (productExist) {
      setCartItem(cartItem.map(item => item.id === product.id ? {...productExist, quantity: productExist.quantity + 1} : item))
    }
    else {
      setCartItem([...cartItem,  {...product, quantity: 1}])
    }
  }

  const handleRemoveProduct = (product) => { 
    const productExist = cartItem.find(item => {
      return item.id === product.id
    })
    if (productExist.quantity === 1) {
      setCartItem(cartItem.filter(item => item.id !== product.id))
    }
    else {
      setCartItem(
        cartItem.map(item => item.id === product.id ? {...productExist, quantity: productExist.quantity - 1} : item)
      )
    }
  }
  return (
    <div>
      <BrowserRouter>
        <Header cartItem={cartItem} />
        <RoutesHaHa productItem={productItem} cartItem={cartItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
