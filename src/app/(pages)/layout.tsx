import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.scss";
import Navbar from "@/widgets/Navbar/Navbar";

const roboto = Roboto({ weight: "400", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Tasty Creations",
  description: "Сайт с рецептами блюд",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.className}`}>
        <Navbar />
        <div className="app">{children}</div>
      </body>
    </html>
  );
}
