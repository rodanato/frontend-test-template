import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { archivoFont } from "@/utils/fonts";
import { CartProvider } from "@/context/cart-context";

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivoFont.className}>
        <CartProvider>
          <Header />

          <main className="px-4 xl:p-0">{children}</main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
