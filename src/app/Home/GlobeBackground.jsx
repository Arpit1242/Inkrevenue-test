"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../Components/ThemeProvider"; // Adjust path if needed

export default function GlobeBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { theme } = useTheme(); // ⬅️ Get current theme

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadVanta = async () => {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js");

      if (window.VANTA) {
        if (vantaEffect) vantaEffect.destroy(); // Destroy previous before creating new

        const isDark = theme === "dark";

        setVantaEffect(
          window.VANTA.GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color:  isDark ?  0x3fa6ff : 0x012169,
            backgroundColor: isDark ? 0x000000 :  0x7cbaff, // ⬅️ Use your root theme
          
 
            //             color:  0x3fa6ff ,
            // backgroundColor: isDark ? 0x000000 :  0x012169, // ⬅️ Use your root theme
          })
        );
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]); // ⬅️ re-run on theme change

  return <div ref={vantaRef} className="absolute inset-0 w-full h-full z-0" />;
}
