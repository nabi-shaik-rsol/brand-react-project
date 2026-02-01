import React, { useEffect, useState } from "react";
import "./AnimatedText.css";

const words = ["Advertising and Communications", "Digital Marketing & Web IOT", "Event Planning and Production","Motion Graphics and 3D & AI Animation","Exhibition Concepts and Production","Media Buying Online & Outdoor","Product Packaging and Graphics","Visual Merchandising"];

export default function RotateHeadline() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % words.length);
    }, 2000); // duration matches animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-black">
      <div className="max-w-[100%] px-4 text-left">
        {/* Tagline */}
        {/* <div className="text-white text-lg mb-4">rotate-1</div> */}

        {/* Headline */}
        <div className="text-[14px] md:text-[14px]   xl:text-[22px] text-white cd-headline">
          to Brain Wave{" "}
          <span className="cd-words-wrapper text-[#f3f6f7]">
            {words.map((word, i) => (
              <b
                key={i}
                className={`${i === visibleIndex ? "is-visible" : "is-hidden"} text- inline-block`}
              >
                {word}
              </b>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
