import React, { useEffect, useMemo, useState } from 'react'
import { IoSearch } from "react-icons/io5"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./sildeProducts/searchBox.css"
import { ThemeProvider } from '@emotion/react'

function SearchBox() {
    const [searchItem, setSearchItem] = useState("")
    const [filtering, setFiltering] = useState([])
    const navigate = useNavigate()
    const location=useLocation()
    const handelSubmit = (e) => {
        e.preventDefault()
        if (searchItem.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchItem.trim())}`)
        }
        setFiltering([])
    }

    useEffect(() => {
        const fatchFiltering = async () => {
            if (!searchItem.trim()) {
                setFiltering([])
                return
            }

            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${searchItem}`
                )
                const data = await res.json()
                setFiltering((data.products || []).slice(0, 5))
            } catch (error) {
                console.error("this is error", error)
                setFiltering([])
            }
        }

        const debounce = setTimeout(fatchFiltering, 300)
        return () => clearTimeout(debounce)
    }, [searchItem])
useEffect(()=>{
setFiltering([]);
},[location])
// dark mode


    return (
        <div className="search-box-container">
            <form className='seacrch_box' onSubmit={handelSubmit}>
                <input
                    type='text'
                    placeholder='search for the products'
                    value={searchItem}                     // ✅ مهم
                    onChange={(e) => setSearchItem(e.target.value)}
                />
                <button type='submit'>
                    <IoSearch />
                </button>
            </form>
            {filtering.length > 0 && (
                <ul className='filtering'>
                    {filtering.map((item) => (
                        <Link to={`/product/${item.id}`}><li key={item.id}>
                            <img src={item.images[0]} alt={item.title} />
                            <span>{item.title}</span>
                        </li></Link>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchBox
