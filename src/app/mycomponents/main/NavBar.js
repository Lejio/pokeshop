import React from "react";
import Link from "next/link";
import LoginModal from "./LoginModal"

export default function NavBar() {
  const navItems = [
    {
      name: "Store",
      url: "store",
    },
    {
      name: "Sale",
      url: "sale",
    }]

  return (
    <div className=" flex flex-row w-screen justify-center align-middle gap-[10vw] my-[3vh]">
      {navItems.map((item, index) => {
        return (
          <Link
            className=" text-center text-xl font-bold"
            key={index}
            href={`/${item.url}`}
          >
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 text-transparent bg-clip-text">
              {item.name}
            </span>
          </Link>
        );
      })}
      <LoginModal />
    </div>
  );
}

//
