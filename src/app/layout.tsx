import type { Metadata } from "next";
import { Lora } from "next/font/google";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { Navbar } from "@/widgets/Navbar";
import { PageReveal, Transition } from "@/shared/ui/Animation";

import "./globals.scss";
import { Toaster } from "sonner";

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
        <ReactQueryProvider>
          <Toaster closeButton />
          <Navbar />
          <Transition />
          <PageReveal>
            <div className="app">{children}</div>
          </PageReveal>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
