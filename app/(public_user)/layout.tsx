import type { Metadata } from "next";
import "@/app/globals.css";
import "../globals.css";
import { Inter, Suwannaphum } from "next/font/google";
import NavbarPage from "@/components/Navbar/NavbarPage";
import FooterPage from "@/components/Footer/FooterPage";

const suwannaphum = Suwannaphum({
  subsets: ["khmer"],
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function PublicUserLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
      <body className={`${suwannaphum.className} ${inter} antialiased`}>
        <NavbarPage/>
        <main className="w-full"> {children}</main>
        <FooterPage/>
      </body>
    </html>
    );
  }
  
