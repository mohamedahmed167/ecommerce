import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../compontent/header/sildeProducts/Product'
import "./CategoryPage.css";
import PageAnmation from '../compontent/PageAnmation';
function CategoryPages() {

    const {category}=useParams()
    const [categoryProducts,setcategory]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res)=>res.json())
        .then((data)=>{
            setcategory(data.products)
            console.log(data)
        })
    },[category])
    return ( <PageAnmation key={category}>
       <div className="category-pages">
        <div className="container">
            {categoryProducts.length >0 &&(
                 <div className="top-silde">
                    <h2>{categoryProducts[0].category}</h2>
                    <p>{categoryProducts[0].description}</p>
                </div>
            )}
            <div className="Category-page">
                {categoryProducts.map((item,index)=>(
                        <Product item={item} key={index} />
                ))}
            </div>
        </div>
       </div>
       </PageAnmation>
    )
}

export default CategoryPages
