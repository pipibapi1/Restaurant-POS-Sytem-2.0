import React from 'react'
import {  Menu, ShoppingCart } from "../components";
import style from './ShoppingCart.module.scss'
import { useState } from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';



const MenuCart = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [itemDetail, setItemDetail] = useState("");
  
  const [cartItems, setCartItems] = useState([]);
  const onAddInfo = (product) => {
      setShowDetail(true);
      setItemDetail(product);
  }
  const closeDetail = () => {
    setShowDetail(false);
  }
  const onAdd = (product, quantity) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + quantity } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: quantity }]);
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
          <div >
                <ItemDetail  showDetail={showDetail} itemDetail={itemDetail} closeDetail={closeDetail} onAdd={onAdd}/>
            </div>
        </div>

    )
}

export default MenuCart
