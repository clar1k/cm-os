"use client";
import { useEffect, useState } from "react";

export function BackgroundVideo() {
  const [isPlayedFirstPart, setIsPlayedFirstPart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPlayedFirstPart(true);
    }, 2900);
  }, []);

  return (
    <div
      className="fixed inset-0"
      key={isPlayedFirstPart ? "cropped" : "background"}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source
          src={isPlayedFirstPart ? "/cropped.mp4" : "/background.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
}
