"use client";
import * as React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useCart } from "@/lib/hooks";

export function CartDrawer() {
  const cart = useCart();
  console.log(cart.cartItems)
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>

      <DrawerContent className="top-0 mt-0 ml-[75%] rounded-t-none rounded-[10px]">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className=" mt-5 text-3xl">Cart</DrawerTitle>
          </DrawerHeader>

          <div className="p-4 pb-0">
            <div className="flex flex-col gap-5 items-center justify-center">
              {cart.cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
          </div>

          <DrawerFooter className="flex flex-col items-center justify-center">
            <Button className=" w-40">Submit</Button>
            <DrawerClose asChild>
              <Button className=" w-40" variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
