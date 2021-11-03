import React from 'react';
import style from './MenuItem.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const MenuItem = ({ idx ,details }) => {
  return (
    <div className={style.itemContainer}>
      <img className={style.itemImg} src={`/ItemImage/${details.imageUrl}`} alt='Menu Item Image'/>
      <div className={style.basicInfo}>
        <div className={style.nameId}>
          <span className={style.itemId}>{idx}. </span>
          <span className={style.itemName}>{details.name}</span>
        </div>
        <div className={style.itemFooter}>
          <span>{details.price.toLocaleString()} VND</span>
          <FontAwesomeIcon className={style.cartIcon} icon={faShoppingCart}/>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;