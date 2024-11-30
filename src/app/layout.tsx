import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const butler = localFont({
  src: "./fonts/ButlerLight.ttf",
  variable: "--font-butler",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Furniture Shop",
  description:
    "A pet project building a web app for selling beautiful furniture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{`${metadata.title}`}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${poppins.variable} ${butler.variable} ${cormorant.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        {/*<div className='bg-black h-[9000px] w-full text-white block'>Hi</div>*/}
        {children}
      </body>
    </html>
  );
}
