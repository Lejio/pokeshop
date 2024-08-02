import React from "react";
import Hero from "./mycomponents/main/Hero";
import Spline from "@splinetool/react-spline/next";
import NavBar from "./mycomponents/main/NavBar";
export default function Home() {
  return (
    <main>
      <div>
        <div className="relative h-full w-full">
          <div className=" absolute inset-0 z-20">
            <NavBar />
          </div>
          <div className="absolute inset-0 z-10 h-[100vh]">
            <Spline scene="https://prod.spline.design/MneOHPj01Rm6VnyP/scene.splinecode" />
          </div>
        </div>
      </div>

      <div>
        <Hero />
      </div>
    </main>
  );
}
