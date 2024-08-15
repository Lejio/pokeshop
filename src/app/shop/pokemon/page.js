import React from "react";
import ItemCard from "../shop-components/ItemCard";
import { createClient } from "@/utils/supabase/client";

export default async function page() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("pokemon")
    .select("*")
    // .eq("pokemon_type", "Water");
  console.log(data)

  return (
    <div className=" flex flex-row flex-wrap gap-5 my-10 mx-20">
      {data.map((item) => {
        return (
          <ItemCard
            key={item.id}
            uuid={item.id}
            pokemon_name={item.pokemon_name}
            pokemon_image={item.image}
            price={item.price}
          />
        );
      })}
    </div>
  );
}
