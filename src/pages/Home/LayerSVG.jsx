import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(CustomEase, DrawSVGPlugin);

const AnimatedD = ({ onStart }) => {
  const svgRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll("path");

    // Make sure all paths are hidden before scroll
    gsap.set(paths, { drawSVG: "0%" });

    const handleScroll = () => {
      if (!svgRef.current || hasAnimated) return;

      const rect = svgRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      if (inView) {
        gsap.to(paths, {
          duration: 3,
          drawSVG: "0% 100%", // ✅ ensures full stroke drawn
          ease: "power2.inOut",
          stagger: 0.5,
          immediateRender: false,
          onStart: () => {
            if (onStart) onStart();
          },
          onComplete: () => {
            // ✅ force-lock all paths to visible after animation
            paths.forEach((p) => gsap.set(p, { drawSVG: "0% 100%" }));
          },
        });

        setHasAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated, onStart]);

  return (
    <div
      style={{
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        fill="none"
        stroke="#6c6cae"
        strokeWidth="4"
        strokeLinecap="round"
        style={{ width: "40%", maxHeight: "80%" }}
      >
        {/* Outer first, then inner → avoids covering issue */}
        <path d="M40 40 H80 A40 40 0 0 1 80 160 H40 Z" />
        <path d="M50 50 H80 A30 30 0 0 1 80 150 H50 Z" />
        <path d="M60 60 H80 A20 20 0 0 1 80 140 H60 Z" />
        <path d="M70 70 H80 A10 10 0 0 1 80 130 H70 Z" />
      </svg>
    </div>
  );
};

export default AnimatedD;
