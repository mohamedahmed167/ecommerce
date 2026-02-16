import { FaCheckCircle } from "react-icons/fa";
import React from 'react'
import visa from "../img/visa.png"
import Paypal from "../img/Paypal.png";
import mastercard from "../img/mastercard.png";
import { FaWallet } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import "./login.css"
function Payment() {
    return (
        <div className="pay-container">
            <div className="content">
                <p>Account <span><FaArrowLeft className="Arrow"/></span> Payment methods</p>
                <h1>Choose your payment method</h1>
            </div>
            <div className="visa">
                <div className="img-content">
                    <img src={visa} alt="" />
                    <p>XXXX XXXX XXXX 8908</p>
                    <span>Expiries 09/27 default</span>
                </div>
                    <FaCheckCircle className="pay-icon" />
            </div>
            <div className="visa">
                <div className="img-content">
                    <img src={Paypal} alt="" />
                    <p>XXXX XXXX XXXX 8908</p>
                    <span>Expiries 09/27 default</span>
                </div>
                    <FaCheckCircle className="pay-icon" />
            </div>
            <div className="visa">
                <div className="img-content">
                    <img src={mastercard} alt="" />
                    <p>XXXX XXXX XXXX 8908</p>
                    <span>Expiries 09/27 default</span>
                </div>
                    <FaCheckCircle className="pay-icon" />
            </div>
            <div className="visa">
                <div className="new-method">
                        <FaWallet/>
                        <p> add new method to pay</p>
                </div>
            </div>
<button className="btn pay">Submit</button>
        </div>
    )
}

export default Payment
