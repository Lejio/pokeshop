import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import MyProviders from "./MyProviders";

const roboto_condensed = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Shop",
  description: "Buy your anime NFTs here. Totally legit.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_condensed.className}>
        <MyProviders>{children}</MyProviders>
      </body>
    </html>
  );
}
