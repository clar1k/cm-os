"use client";

import { useEffect, useRef } from "react";

export function BackgroundGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gradients = [
      {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 400,
        direction: [Math.random() - 0.5, Math.random() - 0.5],
      },
      {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 400,
        direction: [Math.random() - 0.5, Math.random() - 0.5],
      },
      {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 400,
        direction: [Math.random() - 0.5, Math.random() - 0.5],
      },
      {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 400,
        direction: [Math.random() - 0.5, Math.random() - 0.5],
      },
    ];

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw gradients
      gradients.forEach((gradient) => {
        gradient.x += gradient.direction[0];
        gradient.y += gradient.direction[1];

        // Bounce off edges
        if (gradient.x < 0 || gradient.x > canvas.width)
          gradient.direction[0] *= -1;
        if (gradient.y < 0 || gradient.y > canvas.height)
          gradient.direction[1] *= -1;

        const radialGradient = ctx.createRadialGradient(
          gradient.x,
          gradient.y,
          0,
          gradient.x,
          gradient.y,
          gradient.size,
        );
        radialGradient.addColorStop(0, "rgba(240, 240, 240, 0.03)");
        radialGradient.addColorStop(1, "transparent");
        ctx.fillStyle = radialGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed left-0 top-0 h-full w-full"
      style={{ opacity: 0.6 }}
    />
  );
}
