import React from 'react'
import styles from './ShoppingCart.module.scss'
import {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CartItem from '../CartItem'

const ShoppingCart = (props) => {
    const { cartItems, onAddItemQuantity, openPayment, onRemove} = props;
    const total = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
    const [isDineIn, setIsDineIn] = useState("DINE IN");
    const [errMessage, setErrMessage] = useState("");

    const MySwal = withReactContent(Swal);

    const dineInToggleBtn = () =>{
        if (isDineIn === "DINE IN") setIsDineIn("TAKE AWAY");
        else setIsDineIn("DINE IN");
    }
    const sendOrder = () => {
      if (cartItems.length === 0)
      {
        setErrMessage("*Your cart must have 1 or more items");
        MySwal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Your cart must have 1 or more items.',
        })
      }
      else
      {
        let detail = {};
        detail.total=total;
        detail.numItem=props.countCartItems;
        openPayment(detail);
        setErrMessage("");
      }
    }
    
    return (
      <div className={styles.container}>
        {/*header*/}
        <div className={styles.cartHeader}>
          <div className={styles.cartTitle}>
          <FontAwesomeIcon icon={faShoppingCart}/>
            Your Cart
            ({cartItems.length})
          </div>

          <button className={styles.dineInBtn} onClick={dineInToggleBtn}>
            {isDineIn}
          </button>
        </div>

        {/*list item*/}
        {/*<div className={styles.cartItemsContainer}>*/}
        {/*  {cartItems.length === 0 && <div>Cart is empty</div>}*/}
        {/*  {cartItems.map((cartItem, idx) =>*/}
        {/*    <CartItem*/}
        {/*        key={idx}*/}
        {/*        idx={idx}*/}
        {/*        item={cartItem}*/}
        {/*        onAddItemQuantity={onAddItemQuantity}*/}
        {/*    />*/}
        {/*  )}*/}
        {/*</div>*/}
        
        <div id={styles.listItem}>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item, stt) => (
                
                <div key={item.id} className={styles.cartItemCard}>
                  <div className={styles.imgAndContent}>
                    <div>
                      <img className={styles.image} src={ `/ItemImage/${item.imageUrl}`} alt='img'/>
                    </div>
                    <div className={styles.content}>

                      <div>{stt+1}.{item.name}</div>
                        <div>
                          <div className={styles.adjustQuanity}>
                          <button onClick={() => onAddItemQuantity(item.id, -1)} className={styles.remove}>
                            -
                          </button>
                          <span>
                          {item.quantity}
                          </span>
                          <button onClick={() => onAddItemQuantity(item.id, 1)} className={styles.add}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.price}>
                    {(item.price.toFixed(0)*item.quantity).toLocaleString()} VND
                  </div>
              
                </div>
              ))
              }
        </div>

        <div className={styles.checkOut}>
        <hr />
            <div className={styles.total}>
                <div className={styles.total1}>Total: </div>
                <div className={styles.total2}>{total.toLocaleString()} VND</div>
            </div>
            <div className={styles.err}>{errMessage}</div>
            <button id={styles.sendOrder} onClick={() => sendOrder()}>
                PAYMENT
            </button>
            </div>
        </div>
    )

}

export default ShoppingCart
