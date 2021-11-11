import React from 'react';
import style from './ItemDetail.module.scss'
import { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    borderRadius: '25px',
    padding: '50px',
    zIndex: 1000
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  } 


function ItemDetail({showDetail, itemDetail, closeDetail, onAdd}) {
    const [quantity, setQuantity] = useState(0);
    const addOne = () => {
        setQuantity(quantity+1);
    }
    const removeOne = () => {
        if(quantity !== 0){
            setQuantity(quantity-1);
        }
    }
    const addToCart = () => {
        onAdd(itemDetail, quantity);
        closeDetail();
        setQuantity(0);
    }
    const close = () => {
        closeDetail();
        setQuantity(0);
    }
    return (
        <div>
            {showDetail ?(
                <>
                <div style={OVERLAY_STYLES} />
                <div style={MODAL_STYLES}>
                    <div className={style.modal}>
                        <div className={style.header}>
                            <div className={style.label}>ADD TO CART</div>
                            <button className={style.closeButton} onClick={() => close()}> 
                                <FontAwesomeIcon icon={faTimes}/>
                            </button>
                        </div>
                        <div className={style.imageLane}>
                            <img className={style.image} src={`/ItemImage/${itemDetail.imageUrl}`} />
                        </div>
                        <div className={style.infoLane}>
                            <div>{itemDetail.id}</div>
                            <div>{itemDetail.name}</div>
                            <div>{itemDetail.price.toLocaleString()}</div>
                            <div>{itemDetail.category}</div>
                            <div className={style.adjustQuanity}>
                                <button className={style.remove} onClick={() => removeOne()}>-</button>
                                <span>
                                {quantity}
                                </span>
                                <button className={style.add} onClick={() => addOne()}>+</button>
                            </div>
                        
                            <button className={style.addButton}onClick={() => addToCart()}>
                                <FontAwesomeIcon icon={faShoppingCart}/> <span>{(quantity*itemDetail.price).toLocaleString()} VND </span>
                            </button>
                        </div>
                    </div>
                </div>
                </>
            )
            : null}

        </div>
        
    )
}

export default ItemDetail
