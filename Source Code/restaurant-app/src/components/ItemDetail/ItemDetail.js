import React from 'react';
import style from './ItemDetail.module.scss'
import { useState } from 'react';

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
    return (
        <div>
            {showDetail ?(
                <>
                <div style={OVERLAY_STYLES} />
                <div style={MODAL_STYLES}>
                    <div className={style.modal}>
                        <div className={style.header}>
                            <div className={style.label}>ADD TO CART</div>
                            <button onClick={() => closeDetail()}> Close</button>
                        </div>
                        <div>
                            <img className={style.image} src={`/ItemImage/${itemDetail.imageUrl}`} />
                        </div>
                        <div>{itemDetail.id}</div>
                        <div>{itemDetail.name}</div>
                        <div>{itemDetail.price}</div>
                        <div>{itemDetail.category}</div>
                        <div className={style.adjustQuanity}>
                            <button className={style.remove} onClick={() => removeOne()}>-</button>
                            <span>
                            {quantity}
                            </span>
                            <button className={style.add} onClick={() => addOne()}>+</button>
                        </div>
                        
                        <button className={style.addButton}onClick={() => addToCart()}>{quantity*itemDetail.price} VND</button>
                    </div>
                </div>
                </>
            )
            : null}

        </div>
        
    )
}

export default ItemDetail
