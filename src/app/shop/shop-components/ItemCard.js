import React from "react";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";
export default function ItemCard({ pokemon_name, pokemon_image, price }) {
  return (
    <div className=" w-[300px]">
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none justify-center align-middle items-center content-center"
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
          <Button
            className="text-tiny text-black bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            {price}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
