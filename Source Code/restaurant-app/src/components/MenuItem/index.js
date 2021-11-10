import React from 'react';
import style from './MenuItem.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";



const MenuItem = (props) => {
  const{idx, details, onAdd} = props

  return (
  <div>
    <div className={style.itemContainer}>
      <img className={style.itemImg} src={`/ItemImage/${details.imageUrl}`} alt='Menu Item Image'/>
      <div className={style.basicInfo}>
        <div className={style.nameId}>
          <span className={style.itemId}>{idx}. </span>
          <span className={style.itemName}>{details.name}</span>
        </div>
        <div className={style.itemFooter}>
          <span>{details.price.toLocaleString()} VND</span>
          <button className={style.addButton}>
                 <FontAwesomeIcon className={style.cartIcon} icon={faShoppingCart} onClick={()=>onAdd(details,1)}/>
          </button>
        </div>
      </div>
    </div>
    
  </div>
  );
};

export default MenuItem;