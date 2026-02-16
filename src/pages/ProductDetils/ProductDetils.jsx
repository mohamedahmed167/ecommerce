import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ProductDetils.css"
import ProductDetilsLoading from './ProductDetilsLoading';
import SildeProducts from '../../compontent/header/sildeProducts/SildeProducts';
import SildeProductsLoading from '../../compontent/header/sildeProducts/SildeProductsLoading';
import ProductImages from './ProductImages';
import ProductItemDetails from './ProductItemDetails';
import PageAnmation from '../../compontent/PageAnmation';
function ProductDetils() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, isLoading] = useState(true)
    const [relatedProdcuts, setRelatedProdcuts] = useState([])
    const [LoadingrelatedProdcuts, setLoadingRelatedProdcuts] = useState(true)
    useEffect(() => {
        const FetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setProduct(data)
                isLoading(false)
            } catch (error) {
                console.error("this is error from fetching the id", error)
            }
        }
        FetchProduct()
    }, [id])
    useEffect(() => {
        if (!product) return
        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then((res) => res.json())
            .then((data) => {
                setRelatedProdcuts(data.products)
            })
            .catch((error) => {
                console.error("this erro from the related product", error)
            }).finally(() => {
                setLoadingRelatedProdcuts(false)
            })
    }, [product?.category])
    if (!product) return <p>product is not found</p>
    return (
    <PageAnmation  key={id} >
            <div>
            {LoadingrelatedProdcuts ? (<ProductDetilsLoading />) : (
                <div className="items-detils">
                    <div className="container">
                        <ProductImages product={product} />
                        <ProductItemDetails product={product} />
                    </div>
                </div>
            )}
            {LoadingrelatedProdcuts ? (<SildeProductsLoading />) : (
                <SildeProducts key={product.category} title={product.category.replace("-", ' ')} data={relatedProdcuts} />
            )}
        </div>
    </PageAnmation>
    )
}
export default ProductDetils
