import React from 'react';
import style from './ErrorPopUp.module.scss'
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
    zIndex: 2000
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 2000
  }


function ErrorPopUp({display, typeErr, closeShowErr}){
    const [errorMessage, setError] = useState("");
    switch ({typeErr}){
        case "ZeroItemCart":
            setError("Your cart must have 1 or more items!");
            break;
        case "NoChoicePaymentMethod":
            setError("You must choose 1 payment method!");
            break;
        default:
    }

    return (
        <div>
            {display ?(
                <>
                <div style={OVERLAY_STYLES}/>
                <div style={MODAL_STYLES}>
                    <div className={style.modal}>
                        <div className={style.header}>
                            <div className={style.label}>ERROR!</div>
                            <button className={style.closeButton} onClick={closeShowErr}> 
                                <FontAwesomeIcon icon={faTimes}/>
                            </button>
                        </div>
                        <div>
                            {errorMessage}
                            <button onClick={closeShowErr}>
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
                </>
            )
            :null }
        </div>
    )
}
export default ErrorPopUp