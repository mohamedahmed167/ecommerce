import React, { useEffect, useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";




const NavLinks = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/bolg" },
  { title: "contact", link: "/contact" },
]
function Btnheader() {
  const location = useLocation()
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setCategoryOpen] = useState(false);

useEffect(()=>{
  setCategoryOpen(false)
},[location])

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    .then((data) => setCategories(data))
  }, [])
  return (

    <div className="btn-header">
      <div className="container">
        <div className="nav">
          <div className="category-nav">
            <div className="category-btn" onClick={() => setCategoryOpen(!isCategoryOpen)}>
              <IoMenuOutline></IoMenuOutline>
              <p>browse category </p>
              <IoMdArrowDropdown></IoMdArrowDropdown>
            </div>
            <div className={ `category-nav-list ${isCategoryOpen ? "active" :"" }` }>
              {categories.map((category) => (
                <Link key={category.slug} to={`/category/${category.slug}`}>{category.name}</Link>
              )
              )}
            </div>
          </div>
        </div>
        <div className="nav-links">
          {NavLinks.map((e) => (
            <li key={e.link}
              className={location.pathname === e.link ? "active" : ""}><Link to={e.link}>{e.title}</Link></li>
          ))}
        </div>
        <div className="sign-regs-icon">
          <Link to=""><PiSignInBold /></Link>
          <Link to={"/Login"}><FaUserPlus /></Link>
        </div>
      </div>
    </div>

  )
}

export default Btnheader
