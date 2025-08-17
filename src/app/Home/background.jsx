"use client";

import React, { useEffect, useRef } from "react";

const ZigZagLightning = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const w = () => canvas.width;
    const h = () => canvas.height;

    const center = () => ({ x: w() / 2, y: h() / 2 });
    const radius = Math.min(w(), h()) * 0.3;

    const gridSpacing = 25;
    const nodes = [];

    for (let x = 0; x < w(); x += gridSpacing) {
      for (let y = 0; y < h(); y += gridSpacing) {
        const dx = x - center().x;
        const dy = y - center().y;
        if (Math.sqrt(dx * dx + dy * dy) > radius) {
          nodes.push({ x, y });
        }
      }
    }

    function drawLine(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = "rgba(0, 102, 255, 0.6)";
      ctx.shadowColor = "#00f";
      ctx.shadowBlur = 10;
      ctx.lineWidth = 1 + Math.random();
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    function drawLightning() {
      ctx.clearRect(0, 0, w(), h());

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = 0; j < 2; j++) {
          const b =
            nodes[Math.floor(Math.random() * nodes.length)];
          const dx = Math.abs(a.x - b.x);
          const dy = Math.abs(a.y - b.y);
          const maxDist = gridSpacing * 2.5;
          if (dx <= maxDist && dy <= maxDist) {
            drawLine(a.x, a.y, b.x, b.y);
          }
        }
      }
    }

    let animationFrame;
    function animate() {
      drawLightning();
      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ZigZagLightning;
