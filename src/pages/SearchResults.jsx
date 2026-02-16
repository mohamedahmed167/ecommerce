import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageAnmation from '../compontent/PageAnmation'
import SildeProductsLoading from '../compontent/header/sildeProducts/SildeProductsLoading'
import Product from '../compontent/header/sildeProducts/Product'

function SearchResults() {
    const Query = new URLSearchParams(useLocation().search).get("query")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const FetchResults = async () => {
            setLoading(true) // ✅ مهمة جدًا
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${Query}`
                )
                const data = await res.json()
                setResults(data.products || [])
            } catch (error) {
                console.error("the error is", error)
                setResults([])
            } finally {
                setLoading(false)
            }
        }

        if (Query) {
            FetchResults()
        } else {
            setResults([])
            setLoading(false)
        }
    }, [Query])

    return (
        <PageAnmation key={Query}>
            <div className="category-pages">
                {loading ? (
                    <SildeProductsLoading />
                ) : results.length > 0 ? (
                    <div className="container">
                        <div className="top-silde">
                            <h2>Results for : {Query}</h2>
                        </div>

                        <div className="Category-page">
                            {results.map((item) => (
                                <Product item={item} key={item.id} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='container'>
                        <p>There is nothing found</p>
                    </div>
                )}
            </div>
        </PageAnmation>
    )
}

export default SearchResults
