"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import OrangeMan from "@/assets/images/orange-man-transparent.webp";

export default function HeroMedia() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoLoaded(true);
    }
  }, []);

  return (
    <div className="w-141 h-110.75 relative mt-auto">
      <Image
        src={OrangeMan}
        alt="Binyam"
        priority
        fill
        sizes="(max-width: 768px) 100vw, 564px"
        className={`object-contain object-bottom transition-opacity duration-700 ease-in-out z-20 ${
          isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      <video
        ref={videoRef}
        src="/cool-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-contain object-bottom transition-opacity duration-700 ease-in-out z-10 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
