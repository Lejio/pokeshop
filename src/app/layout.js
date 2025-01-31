import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import MyProviders from "./MyProviders";
import NavBar from "./mycomponents/main/NavBar";
import { CartDrawer } from "./mycomponents/main/CartDrawer";
import { TbPokeball } from "react-icons/tb";

const roboto_condensed = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Shop",
  description: "Buy your anime NFTs here. Totally legit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_condensed.className}>
        <MyProviders>
          <div className="relative h-full w-full">
            <div className=" flex flex-row absolute inset-0 z-20">
              <div className=" fixed flex flex-row w-screen mt-8 justify-center align-middle items-center gap-[10vw]">
                <div id="Logo">
                  <TbPokeball />
                </div>
                <NavBar />
                <div id="cart">
                  <CartDrawer />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 z-10">{children}</div>
          </div>
        </MyProviders>
      </body>
    </html>
  );
}
