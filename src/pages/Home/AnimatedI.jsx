import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const AnimatedI = ({ onStart }) => {
  const svgRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    // Select elements
    const verticals = svgRef.current.querySelectorAll(".vertical");

    // 👇 Hide initially
    gsap.set(verticals, { drawSVG: "0%" });

    const handleScroll = () => {
      if (!svgRef.current || hasAnimated) return;

      const rect = svgRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      if (inView) {
        gsap.to(verticals, {
          duration: 3,
          drawSVG: "100%",
          ease: "power2.inOut",
          stagger: 0.3,
          onStart: () => {
            if (onStart) onStart(); 
          },
        });

        setHasAnimated(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated,onStart]);


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
        stroke="#0074b9"  // ✅ your color
        strokeWidth="4"
        strokeLinecap="round"
        style={{ width: "40%", maxHeight: "90%" }}
      >
        {/* Just vertical lines */}
        <path className="vertical" d="M100 40 V160" />
        <path className="vertical" d="M115 40 V160" />
        <path className="vertical" d="M130 40 V160" />
      </svg>
    </div>
  );
};

export default AnimatedI;
