import React, {useState} from 'react';
import style from './ItemDetail.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}


const ItemDetail = ({itemDetail, closeDetail, onAddItemQuantity}) => {
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (e) => {
    const value = Number(e.target.value)
    setQuantity(value)
  }

  const handleAddToCartButton = () => {
    onAddItemQuantity(itemDetail.id, quantity)
    close()
  }

  const handleQuantityButton = (value) => {
    if (quantity === 0 && value < 0) return;
    setQuantity(quantity => quantity + value)
  }
  const close = () => {
    closeDetail();
    setQuantity(0);
  }

  return (
      <div>
        <div style={OVERLAY_STYLES}/>
        <div className={style.modal}>
          {/*header*/}
          <div className={style.header}>
            <div className={style.label}>Add to cart</div>
            <div className={style.closeButton} onClick={() => close()}>
              <FontAwesomeIcon icon={faTimes}/>
            </div>
          </div>

          {/*information*/}
          <div className={style.flexContainer}>
            {/*images*/}
            <img className={style.image} src={`/ItemImage/${itemDetail.imageUrl}`}/>

            {/*texts*/}
            <div className={style.infoLane}>
              {/*name & prices*/}
              <div className={style.basicInfos}>
                <div className={style.nameColumn}>
                  <div>{itemDetail.name}</div>
                  <div className={style.category}>{itemDetail.category}</div>
                </div>

                <div className={style.priceColumn}>
                  <div>Unit Price</div>
                  <div className={style.price}>{itemDetail.price.toLocaleString()} VND</div>
                </div>
              </div>

              {/*description*/}
              <div className={style.description}>{itemDetail.description}</div>

              {/*notes*/}
              <div className={style.noteArea}>
                <label className={style.noteLabel}>Note</label>
                <textarea className={style.noteText} placeholder={'Type your note here'}/>
              </div>
            </div>
          </div>

          {/*add item area*/}
          <div className={style.addItemArea}>
            {/*quantity*/}
            <div className={style.quantityContainer}>
              <span>Quantity: </span>
              <div className={style.adjustQuantity}>
                <button onClick={() => handleQuantityButton(-1)}>-</button>
                <input type="number" value={quantity} className={style.quantityInput} onChange={handleInputChange}/>
                <button onClick={() => handleQuantityButton(1)}>+</button>
              </div>
            </div>

            {/*add button*/}
            <div className={style.addItemBtn} onClick={handleAddToCartButton}>
              ADD ITEM TO CART
            </div>
          </div>
        </div>
      </div>
  )
}

export default ItemDetail
