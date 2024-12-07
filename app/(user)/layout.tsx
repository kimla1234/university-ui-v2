// src/app/public_user/layout.tsx
import "@//app/globals.css";
import type { Metadata } from "next";
import "../globals.css";
import { Inter, Suwannaphum } from "next/font/google";
import NavbarPage from "@//components/Navbar/NavbarPage";
import FooterPage from "@//components/Footer/FooterPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
export default function UserLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
      <body className={`${suwannaphum.className} ${inter} antialiased`}>
        <NavbarPage/>
        <main className="w-full"> {children}</main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" // You can set 'light', 'dark', or 'colored'
        />
        <FooterPage/>
      </body>
    </html>
    );
  }
  
