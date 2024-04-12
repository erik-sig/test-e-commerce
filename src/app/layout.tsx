import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Container } from "@/components/Container/Container";
import { CartProvider } from "@/context/CartContext";

const kumbh_Sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneakers",
  description: "The best e-commerce of sneakers in the world ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={kumbh_Sans.className}>
        <CartProvider>
          <Header />
          <Container>{children}</Container>
        </CartProvider>
      </body>
    </html>
  );
}
