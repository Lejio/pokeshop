"use client"
import { button } from '@nextui-org/theme'
import React from 'react'
import { useRouter } from "next/navigation";

export default function PaymentForm() {
    const router = useRouter();

    async function onSubmit () {
        const response  = await fetch('/api/checkout',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_id: "prod_QekeQCPE8Bg4Yw",
                quantity: 1,
                price: 1000
            })
        })

        const data = await response.json();
        router.push(data.message);

    }

    
  return (
    <button onClick={onSubmit} className={button}>Submit</button>
  )
}
