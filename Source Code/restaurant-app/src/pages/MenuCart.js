import React from 'react'
import {  Menu, ShoppingCart } from "../components";
import style from './ShoppingCart.module.scss'

const MenuCart = () => {
    return (
        <div className={style.flexContainer}>
          <div className={style.menuContainer}>
            <Menu />
          </div>
          <div className={style.cartContainer}>
            <ShoppingCart />
          </div>
        </div>
    )
}

export default MenuCart
