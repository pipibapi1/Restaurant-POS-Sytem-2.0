import React from 'react'
import styles from './ShoppingCart.module.scss'
import {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    const total = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const [isDineIn, setIsDineIn] = useState("DINE IN");

    const dineInToggleBtn = () =>{
        if (isDineIn === "DINE IN") setIsDineIn("TAKE AWAY");
        else setIsDineIn("DINE IN");
    }
    const sendOrder = () => {
      alert("Implement Send Order");
    }
    
    return (
      <div>
        <div className={styles.ShoppingCart}>
            {/*header*/}
            <div id={styles.yourCart}> 
                <div id={styles.cartTitle}>
                <FontAwesomeIcon icon={faShoppingCart}/>

                ({props.countCartItems})
          
                </div>
                <div id={styles.Dinein}>
                    <button id={styles.dineInBtn} onClick={dineInToggleBtn}>
                        {isDineIn}
                    </button>
                </div>
            </div>

            {/*list item*/}
            <div id={styles.listItem}>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item, stt) => (
                    
                    <div key={item.id} className={styles.cartItemCard}>
                      <div className={styles.imgAndContent}>
                        <div>
                              <img className={styles.image} src={ `/ItemImage/${item.imageUrl}`} alt='img'></img>
                        </div>
                        <div className={styles.content}>
      
                          <div>{stt+1}.{item.name}</div>
                            <div>
                              <div className={styles.adjustQuanity}>
                              <button onClick={() => onRemove(item)} className={styles.remove}>
                                -
                              </button>
                              <span>
                              {item.qty}
                              </span>
                              <button onClick={() => onAdd(item, 1)} className={styles.add}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.price}>
                        {item.price.toFixed(0)*item.qty/1000},000 VND
                      </div>
                  
                    </div>
                   
                  ))
   
                  }
            </div>
          
        </div>
        
        <div className={styles.checkOut}>
        <hr />
            <div className={styles.total}>
                <div className={styles.total1}>Total: </div>
                <div className={styles.total2}>{total.toFixed(0)/1000},000 VND</div>
            </div>
           
            <button id={styles.sendOrder} onClick={() => sendOrder()}>Send order</button>
            </div>

        </div>
    )

}

export default ShoppingCart
