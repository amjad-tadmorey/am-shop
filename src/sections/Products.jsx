'use client'

import { ProductCard } from "@/components"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

const Products = ({params}) => {

    const [products, setProducts] = useState([])

    const getAllProducts = async () => {
        const res = await axios.get(`http://localhost:3000/products`)
        setProducts(res.data)
    } 

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div className="flex-grow-1">
            <h1>Shop</h1>
            <p>Showing {products.length} Product</p>
            <div className="grid">
                {products.map((product) => (
                <div key={product.id} style={{width: "18rem"}}>
                    <ProductCard 
                        id={product.id}
                        params={params}
                        key={product.id}
                        src={product.image}
                        title={product.title}
                        price={product.price}
                    />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Products