"use client";

import React from "react";
import Image from "next/image";

import piplup from "@/app/assets/piplup.png";
import gardevoir from "@/app/assets/gardevoir.png";
import palafin from "@/app/assets/palafin.png";
import venusaur from "@/app/assets/venusaur.png";
import zeraora from "@/app/assets/zeraora.png";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  const images = [piplup, gardevoir, palafin, venusaur, zeraora];

  return (
    <div className=" flex flex-row gap-40 justify-center items-center align-middle">
      <h1 className=" text-7xl">PokeNFT</h1>
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
