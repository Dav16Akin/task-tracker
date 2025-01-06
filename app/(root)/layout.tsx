import type { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google";
import Footer from "../components/shared/Footer";
import { ReduxProvider } from "@/state/provider";

const inter = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Your Fun and Friendly Task Manager",
  description:
    "A fun and friendly task manager that helps you stay organized, powered by Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <main className={`flex justify-center`}>{children}</main>
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}
