import React, { useState } from 'react';
import style from './PaymentDetail.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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
    const [errMessage, setErrMessage] = useState("");
    const MySwal = withReactContent(Swal);
    const sendOrder = () => {
        let byMoneyRadio = document.getElementById("byMoney");
        let byCreditCardRadio = document.getElementById("byCreditCard");
        if ((byCreditCardRadio.checked == true) || (byMoneyRadio.checked == true))
        {
            clearCart();
            closePaymentDetail();
            MySwal.fire({
                icon: 'success',
                title: 'Successful!',
                text: 'Your order wil be processed soon.',
            })
        }
        else {
            setErrMessage("*You must choose 1 payment method")
            MySwal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'You must choose 1 payment method.',
            })
        }
    }

    return (
        <div>
            {showPayment ?(
                <>
                <div style={OVERLAY_STYLES}/>
                <div style={MODAL_STYLES}>
                    <div className={style.modal}>
                        <div className={style.header}>
                            <div className={style.label}>CONFIRM PURCHASE</div>
                            <button className={style.closeButton} onClick={closePaymentDetail} > 
                                <FontAwesomeIcon icon={faTimes}/>
                            </button>
                        </div>
                        <div className = {style.total}>
                            Total cost: 
                            <div className = {style.totalValue}>
                                {paymentDetail.total.toLocaleString()} VND
                            </div>
                        </div>
                        <div className = {style.choosePayment}>
                            Choose payment method:
                        </div>
                        <div className={style.errMessage}>{errMessage}</div>
                        <div className = {style.paymentMethod}>
                            <div className={style.radioItem}>
                                <input type="radio" id="byMoney" name="method" value="byMoney" />
                                <label htmlFor="byMoney">Pay at the counter</label><br/>
                            </div>
                            <div className={style.radioItem}>
                                <input type="radio" id="byCreditCard" name="method" value="byCreditCard" className = {style.btnCredit}/>
                                <label htmlFor="byCreditCard" >Credit card</label><br/>
                            </div>
                        </div>
                        <div className = {style.buttonField}>
                            <button onClick={sendOrder} className={style.confirmButton}>
                                Confirm
                            </button><br/>
                            <button onClick={closePaymentDetail} className={style.cancelButton}>
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