import React from "react";
import ItemCard from "../shop-components/ItemCard";
export default function page() {
  const pokemon = [
    {
      pokemon_name: "Piplup",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png",
      price: 2000,
    },
    {
      pokemon_name: "Chimchar",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png",
      price: 2000,
    },
    {
      pokemon_name: "Turtwig",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
      price: 2000,
    },
    {
      pokemon_name: "Charzard",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      price: 2000,
    },
    {
      pokemon_name: "Piplup",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png",
      price: 2000,
    },
    {
      pokemon_name: "Chimchar",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png",
      price: 2000,
    },
    {
      pokemon_name: "Turtwig",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
      price: 2000,
    },
    {
      pokemon_name: "Charzard",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      price: 2000,
    },
    {
      pokemon_name: "Piplup",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png",
      price: 2000,
    },
    {
      pokemon_name: "Chimchar",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png",
      price: 2000,
    },
    {
      pokemon_name: "Turtwig",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
      price: 2000,
    },
    {
      pokemon_name: "Charzard",
      pokemon_image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      price: 2000,
    },
  ];
  return (
    <div className=" flex flex-row flex-wrap gap-5 my-10 mx-20">
      {pokemon.map((item, index) => {
        return (
          <ItemCard
            key={index}
            pokemon_name={item.pokemon_name}
            pokemon_image={item.pokemon_image}
            price={item.price}
          />
        );
      })}
    </div>
  );
}
