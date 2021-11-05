import React from 'react'
import {  Menu, ShoppingCart } from "../components";
import style from './ShoppingCart.module.scss'
import { useState } from 'react';

const MenuCart = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
    return (
        <div className={style.flexContainer}>
          <div className={style.menuContainer}>
            <Menu onAdd={onAdd}> </Menu>
          </div>
          <div className={style.cartContainer}>
            <ShoppingCart 
                   countCartItems={cartItems.length}
                   cartItems={cartItems}
                   onAdd={onAdd}
                   onRemove={onRemove}
            >
              </ShoppingCart>
          </div>
        </div>
    )
}

export default MenuCart
