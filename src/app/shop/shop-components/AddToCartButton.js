'use client'
import React from 'react'
import { useCart } from "@/lib/hooks";

export default function AddToCartButton({ pokemon_name, price, pokemon_image, product_id }) {
    const addToCart= useCart((state) => state.addToCart);

    console.log(pokemon_image)
    function handleAddToCart() {
        addToCart({
            pokemon_name: pokemon_name,
            pokemon_image: pokemon_image,
            price: price,
            product_id: product_id
        });
    }
  return (
    <button onClick={handleAddToCart} className=" w-40 h-10 bg-blue-600 text-white rounded-md">Add to Cart</button>
  )
}
