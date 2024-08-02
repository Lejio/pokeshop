import React from "react";
import LoginModal from "./LoginModal";
import SignOut from "./SignOut";
import { createClient } from "@/utils/supabase/server";
// import { NavBarContents } from "./NavBarContents";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const current_events = [
  {
    title: "Volanic Eruption Event",
    href: "/events/volcanic-eruption",
    description:
      "A volcano has erupted in the middle of the ocean. The pokemon living in the area are in danger. Help them!",
  },
  {
    title: "Increased Spawns",
    href: "/events/increased-spawns",
    description:
      "The fire type pokemon in the area are more active than usual. Catch them all!",
  },
  {
    title: "New Items!",
    href: "/events/new-items",
    description:
      "New items have been added to the game. Find them in the shop!",
  },
  {
    title: "New Area to Explore",
    href: "/events/new-area",
    description: "A new area has been discovered. Explore it now!",
  },
];

const getting_started_items = [
  {
    title: "Tutorial",
    href: "/tutorial",
    description: "Start your pokemon trainer adventure today.",
  },
  {
    title: "Meet the Team",
    href: "/about",
    description: "Meet the developement team behind Discoreon.",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Like the game? Give us feedback or report a bug.",
  },
];

const catalog = [
  {
    title: "Pokemon",
    href: "/catalog/pokemon",
    description: "View all the pokemon available in the game.",
  },
  {
    title: "Items",
    href: "/catalog/items",
    description: "View all the items available in the game.",
  },
  {
    title: "Areas",
    href: "/catalog/areas",
    description: "View all the areas available in the game.",
  },
  {
    title: "Events",
    href: "/catalog/events",
    description: "View all the events available in the game.",
  },
];

const shop = [
  {
    title: "Pokemon",
    href: "/shop/pokemon",
    description: "Buy pokemon from the shop.",
  },
  {
    title: "Items",
    href: "/shop/items",
    description: "Buy items from the shop.",
  },
  {
    title: "New Arrivals",
    href: "/shop/new-arrivals",
    description: "View all the new arrivals in the shop.",
  },
  {
    title: "Special Offers",
    href: "/shop/special-offers",
    description: "View all the special offers in the shop.",
  },
];

export default async function NavBar() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const userdata = data.user;

  return (
    <div className=" flex flex-row w-screen justify-center align-middle gap-[10vw]">
      <NavigationMenu className=" bg-white mt-8 px-3">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 rounded-full md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Join Today!
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Capture pokemons with your friends from the comfort of
                        your discord server.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {getting_started_items.map(
                  ({ title, href, description }, index) => {
                    return (
                      <ListItem key={index} href={href} title={title}>
                        {description}
                      </ListItem>
                    );
                  }
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Eruption Event!</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {current_events.map((current_events) => (
                  <ListItem
                    key={current_events.title}
                    title={current_events.title}
                    href={current_events.href}
                  >
                    {current_events.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Catalog</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {catalog.map((catalog, index) => (
                  <ListItem
                    key={index}
                    title={catalog.title}
                    href={catalog.href}
                  >
                    {catalog.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {catalog.map((catalog, index) => (
                  <ListItem
                    key={index}
                    title={catalog.title}
                    href={catalog.href}
                  >
                    {catalog.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {userdata ? <SignOut /> : <LoginModal />}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
const ListItem = ({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
