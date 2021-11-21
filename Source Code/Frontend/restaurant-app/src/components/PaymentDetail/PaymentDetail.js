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


function PaymentDetail({paymentDetail, closePaymentDetail, clearCart}){
    const [errMessage, setErrMessage] = useState("");
    const MySwal = withReactContent(Swal);
    const [showCCDetail, setShowCCDetail] = useState(false);

    const sendOrder = () => {
        let byMoneyRadio = document.getElementById("byMoney");
        let byCreditCardRadio = document.getElementById("byCreditCard");
        if ((byCreditCardRadio.checked === true) || (byMoneyRadio.checked === true))
        {
            if (byCreditCardRadio.checked === true){
                let cardNum = document.getElementById("cardNum").value;
                let exDate = document.getElementById("exDate").value;
                let cvv = document.getElementById("cvv").value;
                if ((cardNum === "") || (exDate === "") || (cvv === "")){
                    MySwal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'You must enter all field.',
                    })
                }
                else{
                    clearCart();
                    closePaymentDetail();
                    MySwal.fire({
                        icon: 'success',
                        title: 'Successful!',
                        text: 'Your order will be processed soon.',
                    })
                }
            }
            else {
                clearCart();
                closePaymentDetail();
                MySwal.fire({
                    icon: 'success',
                    title: 'Successful!',
                    text: 'Your order will be processed soon.',
                })
            }
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
    const close = () => {
        setShowCCDetail(false);
        closePaymentDetail();
    }

    return (
        <div>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
                <div className={style.modal}>
                    <div className={style.header}>
                        <div className={style.label}>CONFIRM PURCHASE</div>
                        <button className={style.closeButton} onClick={close} >
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>
                    </div>
                    <div className = {style.total}>
                        Total cost:
                        <div className = {style.totalValue}>
                            {paymentDetail.total.toLocaleString()} VND
                        </div>
                        <div className={style.price}>
                            <h1>Total cost: 
                                <div className = {style.totalValue}>
                                    {paymentDetail.total.toLocaleString()} VND
                                </div>
                            </h1>
                        </div>
                        {/* <div className = {style.total}>
                            Total cost: 
                            <div className = {style.totalValue}>
                                {paymentDetail.total.toLocaleString()} VND
                            </div>
                        </div> */}
                        <div className = {style.choosePayment}>
                            Choose payment method:
                        </div>
                        <div className={style.errMessage}>{errMessage}</div>
                        <div className = {style.paymentMethod}>
                            <div className={style.radioItem}>
                                <input type="radio" id="byMoney" name="method" value="byMoney" onClick={() => setShowCCDetail(false)}/>
                                <label htmlFor="byMoney">Pay at the counter</label><br/>
                            </div>
                            <div className={style.radioItem}>
                                <input type="radio" id="byCreditCard" name="method" value="byCreditCard"  onClick={() => setShowCCDetail(true)}/>
                                <label htmlFor="byCreditCard" >Credit card</label><br/>
                            </div>
                            {showCCDetail && (
                                <div className={style.CCDetail}>
                                    <div className={style.cardName}>
                                        Name:
                                        <div className={style.inputText}>
                                            <input type="text" name="Name" id="Name" placeholder = "Name"></input>
                                        </div>
                                    </div>
                                    <div className={style.cardNumber}>
                                        Card number:
                                        <div className={style.inputText}>
                                            <input type="text" name="cardNum" id="cardNum" placeholder = "Card number"></input>
                                        </div>
                                    </div>
                                    <div className={style.dateAndCvv}>
                                        <div className={style.date}>
                                            Expiry date:
                                            <input type="date" name="exDate" id="exDate"></input>
                                        </div>
                                        <div className={style.cvv}>
                                            CVV:
                                            <input type="password" name="cvv" id="cvv" placeholder = "123"></input>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                    </div>
                    <div className = {style.buttonField}>
                        <button onClick={sendOrder} className={style.confirmButton}>
                            Confirm
                        </button><br/>
                        <button onClick={close} className={style.cancelButton}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default PaymentDetail