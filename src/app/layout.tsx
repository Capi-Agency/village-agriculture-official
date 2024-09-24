"use client";
import Header from "@/components/common/Header/page";
import "./globals.css";
import Footer from "@/components/common/Footer/page";
import Menu from "@/components/common/Menu/page";
import { useEffect, useState } from "react";


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
      document.body.style.overflow = 'hidden'; // Ngăn cuộn body khi menu mở
    } else {
      document.body.style.overflow = 'auto'; // Khôi phục cuộn khi menu đóng
    }
  }, [isMenuOpen]);
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
