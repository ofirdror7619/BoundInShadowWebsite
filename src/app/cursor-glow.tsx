"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{ left: position.x - 200, top: position.y - 200 }}
    >
      <div className="h-[400px] w-[400px] rounded-full bg-red-500/20 blur-3xl" />
    </div>
  );
}
