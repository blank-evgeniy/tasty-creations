import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/widgets/Navbar/Navbar";
import Transition from "@/shared/animations/Transition/Transition";
import "../globals.scss";
import PageReveal from "@/shared/animations/PageReveal/PageReveal";

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
        <Transition />
        <PageReveal>
          <div className="app">{children}</div>
        </PageReveal>
      </body>
    </html>
  );
}
