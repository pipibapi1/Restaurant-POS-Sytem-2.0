import React from 'react'
import styles from './ShoppingCart.module.scss'

const ShoppingCart = () => {
    const [isDineIn, setIsDineIn] = useState("DINE IN");

    const dineInToggleBtn = () =>{
        if (isDineIn === "DINE IN") setIsDineIn("TAKE AWAY");
        else setIsDineIn("DINE IN");
    }
    
    return (
        <div className={styles.Cart}>
            {/*header*/}
            <div id={styles.yourCart}> 
                <div id={styles.cartTitle}>
                    YOUR CART(<span id="numCartItem">2</span>)
                </div>
                <div id={styles.Dinein}>
                    <button id={styles.dineInBtn} onClick={dineInToggleBtn}>
                        {isDineIn}
                    </button>
                </div>
            </div>

            {/*list item*/}
            <div id={styles.listItem}>
                <CartItem id="cartItem1" quantity="2" nameItem="Rice" cost1Item="5000"/>
                <CartItem id="cartItem2" quantity="3" nameItem="Water" cost1Item="6000"/>
            </div>

            {/*cost of bill*/}
            <div id={styles.cost}>
                <div className={styles.leftCont}>
                    Total:
                </div>
                <div className={styles.rightCont}>
                    <span id="costNoTax">28000</span> VND
                </div>
                <div className={styles.leftCont}>
                    Tax(10%):
                </div>
                <div className={styles.rightCont}>
                    <span id="Tax">2800</span> VND
                </div>
                <div className={styles.leftCont}>
                    Total cost:
                </div>
                <div className={styles.rightCont}>
                    <span id="costWithTax">30800</span> VND
                </div>
            </div>
            
            {/*button send order*/}
            <button id={styles.sendOrder}>Send order</button>
        </div>
    )
}

export default ShoppingCart
