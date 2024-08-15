import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";

export async function POST(req) {
    const data = await req.json()
    console.log(data)

    const product = await stripe.products.retrieve(data.product_id)

    console.log(product)

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price: product.default_price,
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    })

    return NextResponse.json({
        message: session.url
    },
    {
        status: 200
    })
}