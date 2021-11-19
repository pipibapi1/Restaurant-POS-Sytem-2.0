import React from "react";
import styles from "./CartItem.module.scss";
import { useState } from "react";

function CartItem({ idx, item, onAddItemQuantity }){
    // const [curQuantity, setQuantity] = useState(parseInt(props.quantity));
    // const cost1Item = parseInt(props.cost1Item);
    // const [totalCartItemCost, setPrice] = useState(cost1Item * curQuantity);
    // var newQuantity;
    // var newCost;
    //
    // const sub1Item = () =>{
    //     if (curQuantity > 1){
    //         newQuantity = curQuantity-1;
    //         newCost = newQuantity * cost1Item;
    //         setPrice(newCost);
    //         setQuantity(newQuantity);
    //     }
    //     if (curQuantity == 1) {
    //         var deleteItem = document.getElementById(props.id);
    //         deleteItem.parentNode.removeChild(deleteItem);
    //         var numCartItem = document.getElementById("numCartItem");
    //         numCartItem.innerHTML = (parseInt(numCartItem.innerHTML) - 1).toString();
    //     }
    //     var costNoTax = document.getElementById("costNoTax");
    //     var Tax = document.getElementById("Tax");
    //     var costWithTax = document.getElementById("costWithTax");
    //     var newCostNoTax = parseInt(costNoTax.innerHTML) - cost1Item;
    //     costNoTax.innerHTML = (newCostNoTax).toString();
    //     Tax.innerHTML = (newCostNoTax/10).toString();
    //     costWithTax.innerHTML = (newCostNoTax * 11 / 10).toString();
    // };

    // const add1Item = () =>{
    //     newQuantity = curQuantity+1;
    //     newCost = newQuantity * cost1Item;
    //     setPrice(newCost);
    //     setQuantity(newQuantity);
    //     var costNoTax = document.getElementById("costNoTax");
    //     var Tax = document.getElementById("Tax");
    //     var costWithTax = document.getElementById("costWithTax");
    //     var newCostNoTax = parseInt(costNoTax.innerHTML) + cost1Item;
    //     costNoTax.innerHTML = (newCostNoTax).toString();
    //     Tax.innerHTML = (newCostNoTax/10).toString();
    //     costWithTax.innerHTML = (newCostNoTax * 11 / 10).toString();
    // };

    return (
        <div className={styles.cartItem} id={idx+1}>
            <div>{}</div>
            <div className={styles.content}>
                <div className={styles.changeQuantity}>
                    <button className={styles.subBtn} onClick={() => onAddItemQuantity(item.id, -1)}>-</button>
                    <span className={styles.quantity}>
                      {item.quantity}
                    </span>
                    <button className={styles.addBtn} onClick={() => onAddItemQuantity(item.id, 1)}>+</button>
                </div>
                <div className={styles.price}>{item.quantity * item.price} VND</div>
            </div>
        </div>
        )
}

export default CartItem;