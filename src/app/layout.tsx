import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const archivoFont = Archivo({
  weight: ['400','700'],
  style: ['normal'],
  subsets: ['latin']
})

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
        <Header/>

        <main className="mx-auto max-w-7xl">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}
