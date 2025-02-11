'use client'

import React from "react"
type ProductCardProps = {
    title: string,
    image: string,
    price: number
}

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    image,
    price
}) => {
    return (
        <div className="flex m-1 flex-col border p-2 rounded-md shadow-xl">
            <div className="flex items-center justify-center">
                <img src={image} alt="image" className="w-36 h-36" />
            </div>
            <span className="py-1 text-center">{title}</span>
            <span className="py-1 text-center font-bold">{`$${price}`}</span>
        </div>
    )
}

export default ProductCard;