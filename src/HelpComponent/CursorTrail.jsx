"use client";
import { useEffect, useRef, useState } from "react";

const CursorTrail = () => {
  const mainRef = useRef(null);
  const followerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // Tailwind's md breakpoint
    };

    checkIsDesktop(); // initial check
    window.addEventListener("resize", checkIsDesktop);

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Do not run trail on mobile

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      if (mainRef.current) {
        mainRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div className="cursor-main" ref={mainRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default CursorTrail;
