"use client";

import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorTrail from "../HelpComponent/CursorTrail";
import WhatsAppButton from "@/app/Whatsapp/page";

export default function ClientWrapper({ children }) {
  return (
    <ThemeProvider>
      <CursorTrail />
      <Navbar />
      {children}
      <WhatsAppButton />
      <Footer />
    </ThemeProvider>
  );
}
