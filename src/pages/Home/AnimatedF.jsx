import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const AnimatedF = () => {
  const svgRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!svgRef.current || hasAnimated) return;

      const rect = svgRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      if (inView) {
        const verticals = svgRef.current.querySelectorAll(".vertical");
        const topBars = svgRef.current.querySelectorAll(".top");
        const middleBars = svgRef.current.querySelectorAll(".middle");

        const tl = gsap.timeline();

        // Animate verticals first
        tl.fromTo(
          verticals,
          { drawSVG: "0%" },
          { duration: 1, drawSVG: "100%", ease: "power2.inOut" }
        );

        // Animate top bars
        tl.fromTo(
          topBars,
          { drawSVG: "0%" },
          { duration: 1, drawSVG: "100%", stagger: 0.2, ease: "power2.inOut" },
          "+=0.2"
        );

        // Animate middle bars
        tl.fromTo(
          middleBars,
          { drawSVG: "0%" },
          { duration: 1, drawSVG: "100%", stagger: 0.2, ease: "power2.inOut" },
          "+=0.2"
        );

        setHasAnimated(true); // ✅ run only once
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once if already visible

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

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
        stroke="#00c1e8"
        strokeWidth="4 "
        strokeLinecap="round"
        style={{ width: "40%", maxHeight: "80%" }}
      >
        {/* Vertical lines */}
        <path className="vertical" d="M40 40 V160" />
        <path className="vertical" d="M55 40 V160" />
        <path className="vertical" d="M70 40 V160" />

        {/* Top horizontal bars */}
        <path className="top" d="M70 40 H160" />
        <path className="top" d="M70 50 H160" />
        <path className="top" d="M70 60 H160" />

        {/* Middle horizontal bars */}
        <path className="middle" d="M70 95 H140" />
        <path className="middle" d="M70 105 H140" />
        <path className="middle" d="M70 115 H140" />
      </svg>
    </div>
  );
};

export default AnimatedF;
