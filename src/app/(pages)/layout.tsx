import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Navbar from "@/widgets/Navbar/Navbar";
import Transition from "@/shared/animations/Transition/Transition";
import PageReveal from "@/shared/animations/PageReveal/PageReveal";

import "../globals.scss";

const lora = Lora({ weight: "400", subsets: ["cyrillic"] });

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
      <body className={`${lora.className}`}>
        <Navbar />
        <Transition />
        <PageReveal>
          <div className="app">{children}</div>
        </PageReveal>
      </body>
    </html>
  );
}
