import React, { useEffect, useRef } from 'react';


import brand1 from "../../assets/icons/brand 1@300x.png"
import brand2 from "../../assets/icons/brand2@300x.png"
import brand3 from "../../assets/icons/brand 3@300x.png"
import brand4 from "../../assets/icons/Brand 4@300x.png"
import brand5 from "../../assets/icons/Brand 5@300x.png"
import brand6 from "../../assets/icons/Brand 6@300x.png"
import brand7 from "../../assets/icons/Brand 7@300x.png"
import brand8 from "../../assets/icons/Brand 8@300x.png"




import Linesbg from "../../assets/Images/Lines Bg.svg"
import './Brand.css'
import Wave from './Wave';

// ...existing code...

const Brand = () => {
    const animateHeading = useRef(false);

    useEffect(() => {
        const triggerAnimationIfVisible = () => {
            const el = document.querySelector('#brandSubHeading');
            if (!el || animateHeading.current) return;
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            const rect = el.getBoundingClientRect();
            // only trigger when heading is at least partly within the viewport
            if (rect.top < vh && rect.bottom > 0) {
                const spans = el.querySelectorAll(':scope > span');
                // reset any previous inline animation styles so it runs fresh on reload
                spans.forEach(span => {
                    span.style.animation = 'none';
                    span.style.opacity = '0';
                });
                el.classList.remove('animate');
                // force reflow
                void el.offsetWidth;
                el.classList.add('animate');
                spans.forEach((span, index) => {
                    span.style.animation = `fade-in-text 0.8s ${index * 0.08}s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
                });
                animateHeading.current = true;
            }

            // paragraph animation (split into word spans and animate)
            try {
                const pEl = document.querySelector('#brandParagraph');
                if (pEl && !pEl.dataset.animated) {
                    // only proceed if paragraph has plain text (not already spanned)
                    const existingSpans = pEl.querySelectorAll('span');
                    if (existingSpans.length === 0) {
                        const text = pEl.innerText.trim();
                        // split by spaces but preserve newlines
                        const parts = text.split(/(\s+)/);
                        const html = parts.map(part => {
                            if (/^\s+$/.test(part)) return part; // keep whitespace
                            return `<span>${part}</span>`;
                        }).join('');
                        pEl.innerHTML = html;
                        pEl.classList.add('paragraphAnimation');
                        const wordSpans = pEl.querySelectorAll(':scope > span');
                        wordSpans.forEach((span, i) => {
                            span.style.animation = `fade-in 0.6s ${i * 0.03}s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
                        });
                        pEl.dataset.animated = '1';
                    }
                }
            } catch (e) {
                // fail silently if DOM ops throw in unexpected environments
                // console.warn(e);
            }
        };

        // scroll handler uses the same trigger
        const onScroll = () => triggerAnimationIfVisible();

        window.addEventListener('scroll', onScroll);
        window.addEventListener('load', triggerAnimationIfVisible);
        window.addEventListener('resize', triggerAnimationIfVisible);

        // Run immediately and also shortly after mount to handle images/layout shifts on refresh
        triggerAnimationIfVisible();
        const t = setTimeout(triggerAnimationIfVisible, 350);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('load', triggerAnimationIfVisible);
            window.removeEventListener('resize', triggerAnimationIfVisible);
            clearTimeout(t);
        };
    }, []);


    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleCardMouseMove = (e) => {
        if (prefersReducedMotion) return;
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = (x / rect.width) - 0.5;
        const py = (y / rect.height) - 0.5;
        const rotateY = px * 14;
        const rotateX = -py * 14;
        const scale = 1.06;

        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        el.style.transition = 'transform 120ms linear';


        const inner = el.querySelector('.card-inner');
        if (inner) {
            inner.style.transform = `translate(${px * 12}px, ${py * 12}px)`;
            inner.style.transition = 'transform 120ms linear';
        }


        const icon = el.querySelector('.icon-float');
        if (icon) {
            icon.style.transform = `translate(${px * 8}px, ${py * 8}px) scale(1.06)`;
            icon.style.transition = 'transform 120ms linear';
        }
    };

    const handleCardMouseEnter = (e) => {
        if (prefersReducedMotion) return;
        const el = e.currentTarget;
        el.style.willChange = 'transform';
        el.style.transition = 'transform 120ms linear';
    };

    const handleCardMouseLeave = (e) => {
        if (prefersReducedMotion) return;
        const el = e.currentTarget;
        el.style.transition = 'transform 700ms cubic-bezier(0.445, 0.05, 0.55, 0.95)';
        el.style.transform = 'none';

        const inner = el.querySelector('.card-inner');
        if (inner) {
            inner.style.transition = 'transform 700ms cubic-bezier(0.445, 0.05, 0.55, 0.95)';
            inner.style.transform = 'none';
        }

        const icon = el.querySelector('.icon-float');
        if (icon) {
            icon.style.transition = 'transform 700ms cubic-bezier(0.445, 0.05, 0.55, 0.95)';
            icon.style.transform = 'none';
        }
    };

    const services = [
        { icon: brand1, title: "B2B\nmarketing\nsolutions", color: "bg-[#c31c26]" },
        { icon: brand2, title: "Brand identity\nand brand\nguidelines", color: "bg-[#00974d]" },
        { icon: brand3, title: "Advertising\nand partnerships", color: "bg-[#008fbf]" },
        { icon: brand4, title: "Strategy\nand planning", color: "bg-[#d37548]" },
        { icon: brand5, title: "Brand reputation\nmanagement", color: "bg-[#c98e27]" },
        { icon: brand6, title: "Media\nplanning", color: "bg-[#761a5b]" },
        { icon: brand7, title: "Media\nbuying", color: "bg-[#00aa7d]" },
        { icon: brand8, title: "Event\nplanning and\nproduction", color: "bg-[#e2496d]" }
    ];

    return (
        <>
            <div
                className={"relative  lg:justify-evenly md:justify-between sm:justify-center w-full items-center min-h-screen mx-auto bg-black text-white overflow-hidden py-20 px-10 2xl:py-30 2xl:px-23 bg-no-repeat bg-[length:120%_auto] bg-center lg:bg-bottom "}
                
            >
                <Wave.Animated className="absolute inset-0 w-[110%] h-full z-10 pointer-events-none" speed={100} paused={false} />

                <div className="relative flex flex-col lg:flex-row gap-15 pt-10  5xl:justify-between lg:justify-center md:justify-between sm:justify-center w-full md:items-baseline items-center min-h-fit mx-auto  text-white overflow-hidden brand-hero  ">

                    <div className=" pl-16 lg:pl-0 2xl:pl-45 2xl:w-[35%] lg:w-[35%] md:w-[80%] sm:w-[80%]  z-10 reveal-left" style={{ animationDelay: '160ms' }}>
                        <div className="w-full">
                            <h3 id="brandSubHeading" className="2xl:text-[80px] md:text-[50px] text-[55px] text-bolder  mb-8 tracking-wide 2xl:leading-[4rem] xl:[3.5rem]  leading-[3rem] md:leading-[3.5rem] subHeadingAnimation" style={{ fontFamily: "PoppinsRegular" }}>
                                <span>Brand</span> <br />
                                <span>Consulting</span>
                            </h3>

                            <div className="space-y-6 text-gray-400 2xl:text-[18px]  lg:text-[12px] text-[12px] leading-[1.3rem] text-white  2xl:leading-[1.5rem] tracking-wider md:mb-8 sm:mb-8 mb-10" style={{ fontFamily: "Montserrat-Regular" }}>
                                <p id="brandParagraph">
                                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus. Donec quam felis, ultricies nec. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                                    nec. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus. Donec quam felis, ultricies nec
                                </p>


                            </div>
                        </div>
                    </div>

                    <div className="2xl:flex lg:flex justify-center lg:w-[50%] md:w-[80%] sm:w-[80%] w-[80%] items-center z-10 lg:pl-0 md:pl-16">
                        <div className="grid 2x:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 "
                            onMouseMove={handleCardMouseMove}
                            onMouseEnter={handleCardMouseEnter}
                            onMouseLeave={handleCardMouseLeave}
                            onFocus={handleCardMouseEnter}
                            onBlur={handleCardMouseLeave}
                        >
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    tabIndex={0}

                                    className={`${service.color} grid-item md:p-5 p-6 2xl:h-62 2xl:w-62 lg:h-35  md:h-35 h-[200px]  gap-2 flex flex-col justify-between transition-all duration-300 cursor-pointer`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="card-inner w-full h-full flex flex-col justify-between">
                                        <div className="flex md:justify-start 2xl:justify-start lg:justify-start justify-center">
                                            <img
                                                src={service.icon}
                                                alt={service.title}
                                                className="icon-float w-10 h-10 2xl:w-35 2xl:h-25 xl:w-20 xl:h-15 lg:w-15 lg:h-10 md:w-15 md:h-10 w-30 h-20 opacity-90"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-white 2xl:text-[18px]  text-[12px] font-medium leading-tight whitespace-pre-line  tracking-wide" style={{ fontFamily: "Montserrat-Regular" }}>
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
            {/* <div>
                <Wave/>
            </div> */}
        </>
    );
};

export default Brand;