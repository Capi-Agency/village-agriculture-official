"use client";
import Header from "@/components/common/Header/page";
import "./globals.css";
import Footer from "@/components/common/Footer/page";
import Menu from "@/components/common/Menu/page";
import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
  }, [isMenuOpen]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <body
      >
         <Header toggleMenu={toggleMenu}/>
        {children}
        <Footer />
        <Menu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
      </body>
    </html>
  );
}
