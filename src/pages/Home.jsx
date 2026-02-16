import React, { useEffect, useState } from 'react'
import Silder from '../compontent/header/Silder'
import SildeProducts from "../compontent/header/sildeProducts/SildeProducts"
import "./home.css"
import SildeProductsLoading from '../compontent/header/sildeProducts/SildeProductsLoading'
import PageAnmation from '../compontent/PageAnmation'

const categories = [
    "laptops",
    "smartphones",
    "mobile-accessories",
    "tablets",
    "sports-accessories",
    "sunglasses",
]

function Home() {

    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await Promise.all(
                    categories.map(async (category) => {
                        const res = await fetch(
                            `https://dummyjson.com/products/category/${encodeURIComponent(category)}`
                        )

                        // ✅ حماية من أي رد مش JSON (مثل HTML 404 page)
                        if (!res.ok) {
                            console.warn(`Category "${category}" not found, skipping.`)
                            return { [category]: [] } // نرجع array فاضي بدل crash
                        }

                        const data = await res.json();
                        return { [category]: data.products }
                    })
                )

                const productData = Object.assign({}, ...result);
                setProducts(productData)

            } catch (error) {
                console.error("error fetching", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    // ✅ بدل console.log(products) هنا اللي غالبًا فارغ
    useEffect(() => {
        console.log("Products state updated:", products)
    }, [products])

    return (
        <PageAnmation>
            <div>
                <Silder />
                {loading ? (
                    categories.map((category) => (
                        <SildeProductsLoading key={category} />
                    ))

                ) : (
                    categories.map((category) => (
                        <SildeProducts key={category} data={products[category]} title={category.replace("-", "")}></SildeProducts>
                    ))


                )}


            </div>
        </PageAnmation>
    )
}

export default Home
