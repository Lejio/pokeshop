import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";

export async function POST(req) {
    const data = await req.json();
    const cart = data.cart;
    // console.log(data)

    const cart_items_list = []
    for (let i = 0; i < cart.length; i++) {
        const product = await stripe.products.retrieve(cart[i].product_id)
        cart_items_list.push({
            price: product.default_price,
            quantity: 1
        })
    }

    console.log(cart_items_list)

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: cart_items_list,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    })

    return NextResponse.json({
        message: session.url
    }, {
        status: 200
    })
}


// {
//     id: 'prod_QekeQCPE8Bg4Yw',
//     object: 'product',
//     active: true,
//     attributes: [],
//     created: 1723580213,
//     default_price: 'price_1PnR9FCgOSq2ZyW14gdZoenA',
//     description: 'Piplup is a light-blue, penguin-like Pokémon, which is covered in thick down to insulate against the cold.',
//     images: [
//       'https://files.stripe.com/links/MDB8YWNjdF8xUG5SNWJDZ09TcTJaeVcxfGZsX3Rlc3RfWWhtVldRVDlHR2FXY3VPSUNtV0JZcmMz00LxS4Dmez'
//     ],
//     livemode: false,
//     marketing_features: [],
//     metadata: {},
//     name: 'Piplup',
//     package_dimensions: null,
//     shippable: null,
//     statement_descriptor: null,
//     tax_code: null,
//     type: 'service',
//     unit_label: null,
//     updated: 1723580214,
//     url: null
//   }