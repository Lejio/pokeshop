'use client'
import React from "react";
import { Card, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useCart } from "@/lib/hooks";

export default function ItemCard({ uuid, pokemon_name, pokemon_image, price }) {
  // const addToCart= useCart((state) => state.addToCart);
  const router = useRouter();

  function handlePress() {
    router.push(`/shop/pokemon/${pokemon_name}`);
  }

  return (
    <div className=" w-[300px]">
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none justify-center align-middle items-center content-center"
        isPressable
        onPress={handlePress}
      >
        <Image
          alt={pokemon_name}
          className="object-cover"
          height={200}
          src={`${pokemon_image}`}
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-10">
          <h2 className="text-lg text-black">{pokemon_name}</h2>
          <Chip color="success" radius="lg">{price}</Chip>
        </CardFooter>
      </Card>
    </div>
  );
}
