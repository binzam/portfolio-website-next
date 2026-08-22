"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const ICONS = [
  "/assets/icons/tailwind-icon.webp",
  "/assets/icons/js-icon.webp",
  "/assets/icons/css-icon.webp",
  "/assets/icons/html-icon.webp",
  "/assets/icons/next-icon.svg",
  "/assets/icons/react-icon.webp",
  "/assets/icons/ts-icon.svg",
];

export default function PortfolioCursor({ isVisible }: { isVisible: boolean }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followersRef = useRef<(HTMLDivElement | null)[]>([]);
  const requestRef = useRef<number>(0);

  const mouse = useRef({ x: 0, y: 0 });
  const positions = useRef(
    Array.from({ length: ICONS.length }, () => ({ x: 0, y: 0 })),
  );

  useEffect(() => {
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    positions.current.forEach((pos) => {
      pos.x = window.innerWidth / 2;
      pos.y = window.innerHeight / 2;
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
      }

      let currentX = mouse.current.x;
      let currentY = mouse.current.y;

      followersRef.current.forEach((follower, index) => {
        if (!follower) return;

        positions.current[index].x +=
          (currentX - positions.current[index].x) * 0.2;
        positions.current[index].y +=
          (currentY - positions.current[index].y) * 0.2;

        follower.style.transform = `translate(${positions.current[index].x}px, ${positions.current[index].y}px) translate(-50%, -50%)`;

        currentX = positions.current[index].x;
        currentY = positions.current[index].y;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 bg-[url('/assets/icons/cursor.svg')] bg-contain bg-no-repeat will-change-transform z-50"
      />

      {ICONS.map((src, idx) => (
        <div
          key={idx}
          ref={(el) => {
            followersRef.current[idx] = el;
          }}
          className="fixed top-0 left-0 size-7.5 rounded-full overflow-hidden will-change-transform"
        >
          <Image
            src={src}
            alt="Tech icon"
            width={30}
            height={30}
            className="w-full h-full object-cover"
            priority
            unoptimized={src.endsWith(".svg")}
          />
        </div>
      ))}
    </div>
  );
}
