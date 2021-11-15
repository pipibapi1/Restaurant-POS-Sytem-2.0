import React from 'react';
import style from './PaymentDetail.module.scss'
import { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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


function PaymentDetail({showPayment, paymentDetail, closePaymentDetail, clearCart}){
    const sendOrder = () => {
        clearCart();
        closePaymentDetail();
    }
    return (
        <div>
            {showPayment ?(
                <>
                <div style={OVERLAY_STYLES} />
                <div style={MODAL_STYLES}>
                    <div className={style.modal}>
                    <div className={style.header}>
                            <div className={style.label}>CHOOSE PAYMENT METHOD</div>
                            <button className={style.closeButton} onClick={closePaymentDetail}> 
                                <FontAwesomeIcon icon={faTimes}/>
                            </button>
                        </div>
                        <div>
                        Totalcost: {paymentDetail.total.toLocaleString()}<br/>
                        Num item: {paymentDetail.numItem}<br/>
                        <button onClick={sendOrder}>
                            Send order
                        </button><br/>
                        <button onClick={closePaymentDetail}>
                            Cancel
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
export default PaymentDetail