"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

function AnimatedButton() {
  const buttonRef = useRef(null);
  const fillerRef = useRef(null);
  const textInnerRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const filler = fillerRef.current;
    const textInner = textInnerRef.current;

    if (!button || !filler || !textInner) return;

    let mousepos = { x: 0, y: 0 };
    let distanceToTrigger = button.offsetWidth * 1.5;
    let hover = false;

    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const distance = (x1, y1, x2, y2) => Math.hypot(x1 - x2, y1 - y2);

    let tx = { prev: 0, current: 0, amt: 0.1 };
    let ty = { prev: 0, current: 0, amt: 0.1 };
    let scale = { prev: 1, current: 1, amt: 0.2 };

    const onResize = () => {
      distanceToTrigger = button.offsetWidth * 1.5;
    };

    const onMouseMove = (ev) => {
      mousepos = { x: ev.clientX, y: ev.clientY };
    };

    const render = () => {
      const rect = button.getBoundingClientRect();
      const d = distance(
        mousepos.x,
        mousepos.y,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2
      );

      let x = 0;
      let y = 0;

      if (d < distanceToTrigger) {
        if (!hover) {
          hover = true;
          enter();
        }
        x = (mousepos.x - (rect.left + rect.width / 2)) * 0.3;
        y = (mousepos.y - (rect.top + rect.height / 2)) * 0.3;
      } else if (hover) {
        hover = false;
        leave();
      }

      tx.current = x;
      ty.current = y;

      tx.prev = lerp(tx.prev, tx.current, tx.amt);
      ty.prev = lerp(ty.prev, ty.current, ty.amt);
      scale.prev = lerp(scale.prev, scale.current, scale.amt);

      button.style.transform = `translate3d(${tx.prev}px, ${ty.prev}px, 0)`;
      textInner.style.transform = `translate3d(${-tx.prev * 0.2}px, ${-ty.prev * 0.2}px, 0)`;

      requestAnimationFrame(render);
    };

    const enter = () => {
      scale.current = 1.3;
      gsap.to(filler, {
        y: "0%",
        duration: 1.2,
        ease: "power3.out",
      });
      gsap.to(textInner, {
        scale: 0.8,
        duration: 0.4,
        ease: "expo.out",
      });
    };

    const leave = () => {
      scale.current = 1;
      gsap.to(filler, {
        y: "-75%",
        duration: 1.2,
        ease: "power3.out",
      });
      gsap.to(textInner, {
        scale: 1,
        duration: 0.4,
        ease: "expo.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    render(); // Start render loop

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <Link href="/services">
      <button
        ref={buttonRef}
        className="button relative w-40 h-40  border-none bg-transparent rounded-full overflow-hidden text-lg flex items-center justify-center font-semibold cursor-pointer will-change-transform"
      >
        <span className="button__deco absolute top-0 left-0 w-full h-full border border-[#2313ce] rounded-full">
          <span
            ref={fillerRef}
            className="button__deco-filler absolute bg-[#2313ce] w-[150%] h-[200%] rounded-full top-[-50%] left-[-25%] translate-y-[75%] will-change-transform"
          ></span>
        </span>
        <span className="button__text w-full h-full flex items-center justify-center">
          <span
            ref={textInnerRef}
            className="button__text-inner will-change-transform"
          >
            Explore Us
          </span>
        </span>
      </button>
    </Link>
  );
}

export default AnimatedButton;
