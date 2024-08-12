import React from "react";
import Spline from "@splinetool/react-spline/next";
import Hero from "./mycomponents/main/Hero";
import StoreTest from "./mycomponents/main/StoreTest";
import { createClient } from "@/utils/supabase/server";

// const pokemon_insert = [
//   {
//     pokemon_name: "Piplup",
//     pokemon_type: "Water",
//     generation: 4,
//     in_stock: true,
//     units_in_stock: 10,
//     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png",
//     description: "Piplup is a light-blue, penguin-like Pokémon, which is covered in thick down to insulate against the cold.",
//     price: 1000,
//   },
//   {
//     pokemon_name: "Chimchar",
//     pokemon_type: "Fire",
//     generation: 4,
//     in_stock: true,
//     units_in_stock: 7,
//     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png",
//     description: "It agilely scales sheer cliffs to live atop craggy mountains. Its fire is put out when it sleeps. Its fiery rear end is fueled by gas made in its belly. Even rain can't extinguish the fire.",
//     price: 1000,
//   },
//   {
//     pokemon_name: "Turtwig",
//     pokemon_type: "Grass",
//     generation: 4,
//     in_stock: true,
//     units_in_stock: 11,
//     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
//     description: "Turtwig is a small, light green, quadrupedal Pokémon resembling a turtle or tortoise. Its eyes, feet, and lower jaw are yellow. Its body is covered by a brown shell that is composed of earth. The shell has a thick black stripe and a black rim.",
//     price: 1000,
//   },
// ]

export default async function Home() {
  // const supabase = createClient();

  // const { data, error } = await supabase.from("pokemon").insert(pokemon_insert);
  // if (error) {
  //   console.error(error);
  // }
  // const { data, error } = await supabase.from("pokemon").select("*");

  // console.log(data);

  // console.log("Added pokemon to the database");

  return (
    <main>
      <Spline scene="https://prod.spline.design/MneOHPj01Rm6VnyP/scene.splinecode" />
      <div>
        <Hero />
        <StoreTest />
      </div>
    </main>
  );
}
