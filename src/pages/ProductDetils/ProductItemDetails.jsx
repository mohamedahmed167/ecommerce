import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { FaStar, FaStarHalfAlt, FaShareSquare, FaRegHeart, FaCartArrowDown } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { CardContext } from '../../compontent/context/CardContext';
function ProductItemDetails({ product }) {
    const navigate = useNavigate();
    const { cartItems, addToCart, favitems, addToFav } = useContext(CardContext)
    const isInCard = cartItems.some(i => i.id === product.id);
    const handelAddToCart = () => {
        addToCart(product)
        toast.success(
            <div className="toast-wrapper">
                <img className="img-toast" src={product.images[0]}></img>
                <div className="toast-content">
                    <strong>${product.title}</strong>
                    add to cart
                    <div>
                        <button className="btn" onClick={() => { navigate("/cart") }}>view cart</button>
                    </div>
                </div>
            </div>
            , { duration: 3500 }
        )
    }
    const isInFavorite = favitems.some(i => i.id === product.id);
    const handelFavorite = () => {
        if (isInFavorite) {
            removeForFavorites(product.id);
            toast.error(`${product.title} removed from the fav`)
        } else {
            addToFav(product)
            toast.success(`${product.title} added to faveite`)
        }
    }
    return (
        <div className="details-item">
            <h1 className='name' >{product.title}</h1>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
            </div>
            <p className='price-item'>{product.price}</p>
            <h5>Availabiltiy :<span>{product.availabilityStatus}</span></h5>
            <h5>Brand :<span>{product.brand}</span></h5>
            <p className='desc'>{product.description}</p>
            <h5>Hurry up! Only <span>{product.stock}</span> products left in Stock</h5>
            <button className={`btn ${isInCard ? "in-card" : ""}`} onClick={handelAddToCart} >
                {isInCard ? "item is in cart" : "Add to Cart "} <TiShoppingCart /></button>
            <div className="icons">
                <span className={`${isInFavorite ? "in-fav" : ""}`}
                    onClick={handelFavorite}
                >
                    <FaRegHeart />
                </span>
                <span><FaShareSquare /></span>
            </div>
        </div>
    )
}

export default ProductItemDetails
