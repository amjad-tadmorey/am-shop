import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({title, src, price, params, id}) => {
    return (
        <Link
            href={`./shop/${id}`}
        >
            <div className="card border-0" style={{width: "18rem", cursor: "pointer"}}>
                <Image src={src} className="card-img-top rounded-5 shadow" alt={title} width={200} height={200}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </Link>
    )
}

export default ProductCard