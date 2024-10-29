import type { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google";
import Banner from "../components/shared/Banner";
import Footer from "../components/shared/Footer";

const inter = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Your Fun and Friendly Task Manager",
  description: "A fun and friendly task manager that helps you stay organized, powered by Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Banner/>
        <main className={`flex justify-center`}>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
