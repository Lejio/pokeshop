import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import MyProviders from "./MyProviders";
import NavBar from "./mycomponents/main/NavBar";

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
            <div className="absolute inset-0 z-20">
              <NavBar />
            </div>
            <div className="absolute inset-0 z-10 h-[100vh]">{children}</div>
          </div>
        </MyProviders>
      </body>
    </html>
  );
}
