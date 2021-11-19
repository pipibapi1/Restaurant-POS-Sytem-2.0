import React from 'react';
import style from './MenuItem.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";



const MenuItem = (props) => {
  const{idx, menuItem, onAddItemQuantity, showDetailHandler} = props
  const addItemQuantityHandler = (e) => {
    e.stopPropagation()
    onAddItemQuantity(menuItem.id, 1)
  }
  return (
  <div>
    <div className={style.itemContainer} onClick={() => showDetailHandler(menuItem.id)}>
      <img className={style.itemImg} src={`/ItemImage/${menuItem.imageUrl}`} alt='Menu Item Image'/>
      <div className={style.basicInfo}>
        <div className={style.nameId}>
          <span className={style.itemId}>{idx+1}. </span>
          <span className={style.itemName}>{menuItem.name}</span>
        </div>
        <div className={style.itemFooter}>
          <span>{menuItem.price.toLocaleString()} VND</span>
          <button className={style.addButton}>
           <FontAwesomeIcon className={style.cartIcon} icon={faShoppingCart} onClick={addItemQuantityHandler}/>
          </button>
        </div>
      </div>
    </div>
    
  </div>
  );
};

export default MenuItem;