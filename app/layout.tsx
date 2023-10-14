import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Noto_Serif, Oxygen } from "next/font/google";
import { Header } from "@/src/Header";
import { Footer } from "@/src/Footer";

const noto = Noto_Serif({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-noto",
});

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-oxygen",
});

export const metadata: Metadata = {
  title: "Blog",
  description: "A place for my meandering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(noto.variable, oxygen.variable)}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
