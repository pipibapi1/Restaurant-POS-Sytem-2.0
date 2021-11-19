import React, {useEffect, useState} from 'react'
import {Menu, ShoppingCart} from "../components";
import style from './MenuCart.module.scss'
import ItemDetail from '../components/ItemDetail/ItemDetail';
import PaymentDetail from '../components/PaymentDetail/PaymentDetail'

const MenuCart = () => {
  const [isShowDetail, setShowDetail] = useState(false);
  const [itemDetail, setItemDetail] = useState("");
  const [isShowPayment, setShowPayment] = useState(false);
  const [paymentDetail, setPaymentDetail] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const res = await fetch('/items/get-all')
      const data = await res.json()
      setMenuItems(data)
    }
    fetchMenuItems()
  }, [])


  const showDetailHandler = (productId) => {
    setShowDetail(true);
    const product = menuItems.find((item) => item.id === productId)
    setItemDetail(product);
  }

  const closeDetail = () => {
    setShowDetail(false);
  }

  const onAddItemQuantity = (id, amount) => {
    // const exist = cartItems.find((item) => item.id === id);
    // if (exist) {
    //   setCartItems(
    //     cartItems.map((x) =>
    //       x.id === product.id ? { ...exist, qty: exist.qty + quantity } : x
    //     )
    //   );
    // } else {
    //   setCartItems([...cartItems, { ...product, qty: quantity }]);
    // }
    if (amount === 0)
      return;
    const itemIdx = cartItems.findIndex((item) => item.id === id)
    if (itemIdx >= 0) {
      let newCartItems = [...cartItems]
      const newQuantity = newCartItems[itemIdx].quantity + amount
      if (newQuantity === 0) {
        setCartItems(newCartItems.filter(item => item.id !== id))
      } else {
        newCartItems[itemIdx] = {...newCartItems[itemIdx], quantity: newQuantity}
        setCartItems(newCartItems)
      }
    } else {
      const newItem = menuItems.find(item => item.id === id)
      const newCartItems = [...cartItems, {...newItem, quantity: amount}]
      setCartItems(newCartItems)
    }
  };

  const onRemove = (id) => {
    setCartItems((cartItems) => cartItems.filter(item => item.id !== id))
  };

  const closePaymentDetail = () => {
    setShowPayment(false);
  }
  const openPayment = (detail) => {
    setPaymentDetail(detail);
    setShowPayment(true);
  }
  const clearCart = () => {
    setCartItems([]);
  }
  return (
      <div className={style.flexContainer}>
        <div className={style.menuContainer}>
          <Menu showDetailHandler={showDetailHandler} onAddItemQuantity={onAddItemQuantity} menuItems={menuItems}/>
        </div>

        <div className={style.cartContainer}>
          <ShoppingCart
              cartItems={cartItems}
              onAddItemQuantity={onAddItemQuantity}
              openPayment={openPayment}
              onRemove={onRemove}
          />
        </div>
        {isShowDetail && <ItemDetail itemDetail={itemDetail} closeDetail={closeDetail} onAddItemQuantity={onAddItemQuantity}/>}

        {isShowPayment && <PaymentDetail paymentDetail={paymentDetail} closePaymentDetail={closePaymentDetail} clearCart={clearCart}/>}
      </div>

  )
}

export default MenuCart
