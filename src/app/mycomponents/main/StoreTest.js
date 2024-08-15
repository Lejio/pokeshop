'use client'
import React from 'react'
import { useCart } from "@/lib/hooks";
import PaymentForm from './PaymentForm';

export default function StoreTest() {
    const { numOfItems, addToCart, removeFromCart } = useCart((state) => state);
  return (
    <div className=" flex flex-col">
        <span className=" text-center">{numOfItems}</span>
        <button onClick={addToCart}>Increment</button>
        <button onClick={removeFromCart}>Decrement</button>
        <PaymentForm />
        
    </div>
  )
}
