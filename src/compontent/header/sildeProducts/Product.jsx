import { FaStar, FaStarHalfAlt, FaCheck, FaShareSquare, FaRegHeart, FaCartArrowDown } from "react-icons/fa";


import React, { useContext } from 'react'
import "./SildeProduct.css"
import { Link, useNavigate } from "react-router-dom";
import { CardContext } from "../../context/CardContext"
import toast from "react-hot-toast";
function Product({ item }) {
    const navigate = useNavigate();
    const { cartItems, addToCart, favitems, addToFav, removeForFavorites } = useContext(CardContext)
    const isInCard = cartItems.some(i => i.id === item.id);
    const isInFavorite = favitems.some(i => i.id === item.id);
    const handelFavorite = () => {
        if (isInFavorite) {
            removeForFavorites(item.id);
            toast.error(`${item.title} removed from the fav`)
        } else {
            addToFav(item)
            toast.success(`${item.title} added to faveite`)
        }
    }
    const handelAddToCart = () => {
        addToCart(item)
        toast.success(
            <div className="toast-wrapper">
                <img className="img-toast" src={item.images[0]}></img>
                <div className="toast-content">
                    <strong>${item.title}</strong>
                    add to cart
                    <div>
                        <button className="btn" onClick={() => { navigate("/cart") }}>view cart</button>
                    </div>
                </div>
            </div>
            , { duration: 3500 }
        )
    }

    return (
        <div to="/" className={`product ${isInCard ? "in-card" : ""}`}>
            <Link to={`/product/${item.id}`}>
                <div className="img-products">
                    <img src={item.images[0]} alt="" />
                </div>
                <span className="check-card"><FaCheck />in cart</span>
                <p className='product-name'>{item.title} </p>
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                </div>
                <p className="price"><span>${item.price}</span></p>
            </Link>
            <div className="icons">
                <span
                    className="btn-card"
                    onClick={handelAddToCart}>
                    <FaCartArrowDown /></span>
                <span className={`${isInFavorite ? "in-fav" : ""}`}
                    onClick={handelFavorite}><FaRegHeart /></span>
                <span><FaShareSquare /></span>
            </div>
        </div>
    )
}
export default Product
