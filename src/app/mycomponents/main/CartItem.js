import React from 'react'
import Image from 'next/image'

export default function CartItem({ item }) {
  return (
    <div className=' flex flex-row justify-center items-center align-middle'>
      <div id='image'>
        <Image src={item.pokemon_image} alt={item.pokemon_name} width={100} height={100} />
      </div>
      <div id="contents">
        <h1>{item.pokemon_name}</h1>
        <h2>{item.price}</h2>
      </div>
    </div>
  )
}
