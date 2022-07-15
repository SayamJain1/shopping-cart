import React from "react";
import './Cart.css'

function Cart({ cartItem, handleAddProduct, handleRemoveProduct }) {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  console.log(cartItem);
  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>

      {cartItem.length ? (
        cartItem.map((item) => {
          return (
            <div key={item.id} className="cart-item-list">
              <img className="cartimg" src={item.image} alt={item.name} />
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-function">
                <button
                  className="adding-item"
                  onClick={() => handleAddProduct(item)}
                >
                  +
                </button>
                <button
                  className="removing-item"
                  onClick={() => handleRemoveProduct(item)}
                >
                  -
                </button>
              </div>
              <div className="cart-item-price">
                {item.quantity} x {item.price}
              </div>
              
            </div>
          );
        })
      ) : (
        <div className="cart-empty">No items are added.</div>
          )}
          <div className="total-name">
                Total price 
                <div className="total-price">₹{totalPrice}</div>
              </div>
    </div>
  );
}

export default Cart;
