import React, { useRef } from 'react'
// import Gif1 from "../../../assets/Images/Gif1.gif"
// import Gif2 from "../../../assets/Images/Gif2.gif"
// import Gif3 from "../../../assets/Images/Gif3.gif"
// import Gif4 from "../../../assets/Images/Gif4.gif"
// import Gif5 from "../../../assets/Images/Gif5.gif"

import './SrollImage.css'

const SrollImage = () => {
  // Replaced static images with GIFs
  const gifs = [
    Gif1, Gif2, Gif3, Gif4, Gif5,
    Gif1, Gif2, Gif3, Gif4, Gif5,
    Gif1, Gif2, Gif3, Gif4, Gif5,
    Gif1, Gif2, Gif3, Gif4, Gif5
  ];

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const trackRef = useRef(null);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) - 0.5; // -0.5 .. 0.5
    const py = (y / rect.height) - 0.5;

    // Stronger translate/rotation/scale for the whole track
    const tx = px * 18;
    const ty = py * 12;
    const rotateZ = px * -3.5;
    const scale = 1 + Math.abs(px) * 0.03 + Math.abs(py) * 0.02;
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateZ(${rotateZ}deg) scale(${scale})`;
    el.style.transition = 'transform 160ms linear';

    // Amplified per-GIF parallax for depth
    const gifsEls = el.querySelectorAll('img');
    gifsEls.forEach((gif, i) => {
      const depth = (i % 5) * 1.2;
      const ix = px * (12 + depth);
      const iy = py * (8 + depth * 0.8);
      const r = px * (1 + depth * 0.08);
      gif.style.transform = `translate3d(${ix}px, ${iy}px, 0) rotate(${r}deg)`;
      gif.style.transition = 'transform 160ms linear';
    });
  };

  const handleMouseEnter = () => {
    if (prefersReducedMotion) return;
    const el = trackRef.current;
    if (!el) return;
    el.style.willChange = 'transform';
    el.style.transition = 'transform 160ms linear';
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    const el = trackRef.current;
    if (!el) return;
    el.style.transition = 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)';
    el.style.transform = 'none';
    const gifsEls = el.querySelectorAll('img');
    gifsEls.forEach((gif) => {
      gif.style.transition = 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)';
      gif.style.transform = 'none';
    });
  };

   const handleGifEnter = (e) => {
    e.currentTarget.classList.add("gif-hover");
  };

  const handleGifLeave = (e) => {
    e.currentTarget.classList.remove("gif-hover");
  };


  return (
    <></>
    // <div className="scroll-marquee">
    //   <div
    //     className="scroll-track"
    //     ref={trackRef}
    //     onMouseMove={handleMouseMove}
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
    //     onFocus={handleMouseEnter}
    //     onBlur={handleMouseLeave}
    //   >
    //     {gifs.concat(gifs).map((src, i) => (
    //       <img key={i} src={src} alt={`gif-${i}`}
    //       onMouseEnter={handleGifEnter}
    //         onMouseLeave={handleGifLeave}
    //       />
    //     ))}
    //   </div>
    // </div>
  )
}

export default SrollImage
