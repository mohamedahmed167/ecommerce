import React, { useContext } from 'react'
import { CardContext } from '../compontent/context/CardContext'
import { FaRegTrashCan } from "react-icons/fa6";
import "../pages/ProductDetils/Cart.css"
import PageAnmation from '../compontent/PageAnmation';
import { Link } from 'react-router-dom';
function Cart() {
const { cartItems, increaseQuntity, decreseQuntity, removeFromCart } = useContext(CardContext)
 const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return (
        <PageAnmation>
            <div className='checkout'>
                <div className="orderSummry">
                    <h1>Order Summry</h1>
                    <div className="items">
                        {cartItems.length === 0 ? (
                            <p>your item is empty</p>
                        ) : (
                            cartItems.map((item, index) => (
                                <div key={index} className="item-cart">
                                    <div className="img-name">
                                        <div className="img-item">
                                            <img src={item.thumbnail}></img>
                                        </div>
                                        <div className="content">
                                            <h4>{item.title}</h4>
                                            <p className='price-item'>{item.price}</p>
                                            <div className="quantity-control">
                                                <button onClick={() => { decreseQuntity(item.id) }}>-</button>
                                                <span className='quentity'>{item.quantity}</span>
                                                <button onClick={() => { increaseQuntity(item.id) }} >+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='delete-item'
                                        onClick={() => {
                                            removeFromCart(item.id)
                                        }}
                                    ><FaRegTrashCan /></button>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="bottomSummry">
                        <div className="shop-table">
                            <p>total:</p>
                            <span className='total-checkout'>${total.toFixed(2)}</span>
                        </div>
                        <div className="button-div">
                            <Link to={"/Payment"}>
                                <button type="submit">Place Order</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageAnmation>
    )
}

export default Cart
