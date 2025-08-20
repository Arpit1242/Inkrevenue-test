"use client";

import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorTrail from "../HelpComponent/CursorTrail";
import WhatsAppButton from "@/app/Whatsapp/page";
import ThemeToggle from "./ThemeToggle";  
export default function ClientWrapper({ children }) {
  return (
    <ThemeProvider>
      <CursorTrail />
      <Navbar />
      {children}
      <WhatsAppButton />
      <ThemeToggle /> {/* floating theme switch */}
      <Footer />
    </ThemeProvider>
  );
}
