"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

import piplup from "@/app/assets/piplup.png";
import gardevoir from "@/app/assets/gardevoir.png";
import palafin from "@/app/assets/palafin.png";
import venusaur from "@/app/assets/venusaur.png";
import zeraora from "@/app/assets/zeraora.png";
import { createClient } from "@/utils/supabase/client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Hero() {
  const images = [piplup, gardevoir, palafin, venusaur, zeraora];
  const [userdata, setUserdata] = useState(null)

  useEffect(() => {
    async function fetchUser() {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (!error) {
        setUserdata(data.user.user_metadata)
      }
    }

    fetchUser();
  }, [])

  return (
    <div className=" flex flex-row gap-40 justify-center items-center align-middle">
      { userdata ? <h1 className="text-4xl">Welcome back, {userdata.full_name}</h1> : <h1 className="text-4xl">Welcome to my shop</h1> }
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="w-full max-w-xs"
      >
        <CarouselContent>
          {images.map((link, index) => {
            return (
              <CarouselItem key={index}>
                <div className=" p-1">
                  <Image src={link} alt={index} width={424} height={424} />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
