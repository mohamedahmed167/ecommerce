import React, { useContext } from 'react'
import Logo from "../../img/logo2.png"
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css"
import { CardContext } from '../context/CardContext';
import SearchBox from './SearchBox';
import { MdOutlineDarkMode } from "react-icons/md";


export default function TopHeader() {
    const { cartItems ,favitems} = useContext(CardContext)
    return (
        <div className='Top-header'>
            <div className='container'>
                <Link to="/" className='logo'> <img src={Logo} alt="logo" /></Link>
                <SearchBox />
                <div className="header-icons">
                    <div className="icon dark">
                        <MdOutlineDarkMode className='dark-mode'

                        />
                    </div>
                    <div className="icon">
                        <Link to={"/Fav"}>
                            <FaRegHeart></FaRegHeart>
                        </Link>
                        <span className='count'>{favitems.length}</span>
                    </div>
                    <div className="icon">
                        <Link to="/cart">
                            <FaShoppingCart></FaShoppingCart>
                            <span className='count'>{cartItems.length}</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
