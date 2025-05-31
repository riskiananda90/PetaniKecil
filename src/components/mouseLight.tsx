import React, { useEffect, useState } from "react";

const MouseLight = ({
  children,
  bgColor,
  glowColor,
  id,
}: {
  children: React.ReactNode;
  bgColor: string;
  glowColor: string;
  id?: string;
}) => {
  const [mousepose, setmousepos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const HandleMouse = (e: MouseEvent) => {
      setmousepos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", HandleMouse);
    return () => window.removeEventListener("mousemove", HandleMouse);
  }, []);
  return (
    <section id={id} className={`relative min-h-screen ${bgColor}`}>
      {children}
      <div
        className="
      pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousepose.x}px ${mousepose.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
    </section>
  );
};

export default MouseLight;
