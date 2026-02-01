import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(CustomEase, DrawSVGPlugin);

const AnimatedE = ({ onStart }) => {
  const svgRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!svgRef.current || hasAnimated) return;

      const rect = svgRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      if (inView) {
        const svg = svgRef.current;

        // Select groups of lines
        const verticals = svg.querySelectorAll(".vertical");
        const topBars = svg.querySelectorAll(".top");
        const middleBars = svg.querySelectorAll(".middle");
        const bottomBars = svg.querySelectorAll(".bottom");

        // Hide everything before animation
        gsap.set([verticals, topBars, middleBars, bottomBars], { drawSVG: "0%" });

        const tl = gsap.timeline();

        // Animate vertical bar first
        tl.to(verticals, {
          duration: 0.7,
          drawSVG: "100%",
          ease: "power2.inOut",
          onStart: () => {
            if (onStart) onStart();
          },
        });

        // Animate top bars
        tl.to(
          topBars,
          {
            duration: 0.7,
            drawSVG: "100%",
            stagger: 0.1,
            ease: "power2.inOut",
          },
          "+=0.2"
        );

        // Animate middle bars
        tl.to(
          middleBars,
          {
            duration: 0.7,
            drawSVG: "100%",
            stagger: 0.1,
            ease: "power2.inOut",
          },
          "+=0.2"
        );

        // Animate bottom bars
        tl.to(
          bottomBars,
          {
            duration: 0.7,
            drawSVG: "100%",
            stagger: 0.1,
            ease: "power2.inOut",
          },
          "+=0.2"
        );

        setHasAnimated(true); // ✅ Prevent re-running
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once in case it's already visible

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        stroke="#00a4a3"
        strokeWidth="4"
        strokeLinecap="round"
        style={{ width: "40%", maxHeight: "80%" }}
      >
        {/* Vertical bars */}
        <path className="vertical" d="M40 40 V160" />
        <path className="vertical" d="M55 40 V160" />
        <path className="vertical" d="M70 40 V160" />

        {/* Top horizontal bars */}
        <path className="top" d="M70 40 H160" />
        <path className="top" d="M70 50 H160" />
        <path className="top" d="M70 60 H160" />

        {/* Middle horizontal bars */}
        <path className="middle" d="M70 95 H120" />
        <path className="middle" d="M70 105 H120" />
        <path className="middle" d="M70 115 H120" />

        {/* Bottom horizontal bars */}
        <path className="bottom" d="M70 140 H160" />
        <path className="bottom" d="M70 150 H160" />
        <path className="bottom" d="M70 160 H160" />
      </svg>
    </div>
  );
};

export default AnimatedE;
