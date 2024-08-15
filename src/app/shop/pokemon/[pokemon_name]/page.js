import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import AddToCartButton from "../../shop-components/AddToCartButton";

export default async function ItemPage({ params }) {
    // const addToCart= useCart((state) => state.addToCart);
    const pokemon_name = params.pokemon_name;
    const supabase = createClient();

    const { data, error } = await supabase.from("pokemon").select("*").eq("pokemon_name", pokemon_name).single();
    if (!data) {
        redirect("/404");
    }

    return(
        <div className=" w-full h-[100vh] max-h-[800px] flex flex-row justify-center items-center">
            <div>
                <Image className=" w-[40vh] h-[40vh] max-w-[300px] max-h-[300px]" src={data.image} alt={data.pokemon_name} width={200} height={200} />
            </div>
            <div className=" max-w-[400px] px-10 flex flex-col gap-4">
                <h1 className=" text-5xl font-bold">{data.pokemon_name}</h1>
                <h2 className=" text-2xl">{data.price}</h2>
                <p className=" text-xl text-wrap">{data.description}</p>
                <AddToCartButton pokemon_name={data.pokemon_name} pokemon_image={data.image} price={data.price} product_id={data.product_id} />
            </div>
        </div>
    )
}


// {
//     id: 3,
//     created_at: '2024-08-09T20:28:44.125453+00:00',
//     pokemon_name: 'Piplup',
//     pokemon_type: 'Water',
//     generation: 4,
//     in_stock: true,
//     units_in_stock: 10,
//     image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png',
//     description: 'Piplup is a light-blue, penguin-like Pokémon, which is covered in thick down to insulate against the cold.',
//     price: 1000,
//     product_id: 'prod_QekeQCPE8Bg4Yw'
// }
  