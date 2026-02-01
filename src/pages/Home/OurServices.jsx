import React, { useEffect, useRef, useState } from "react";

import Linesbg from "../../../assets/Images/Lines Bg.svg";
import ser1 from "../../../assets/Images/services1.webp";
import ser2 from "../../../assets/Images/services2.webp";
import ser3 from "../../../assets/Images/services3.webp";
import ser4 from "../../../assets/Images/services4.webp";
import ser5 from "../../../assets/Images/services5.webp";
import ser6 from "../../../assets/Images/services6.webp";
import ser7 from "../../../assets/Images/services7.webp";
import ser8 from "../../../assets/Images/services8.webp";
import ser9 from "../../../assets/Images/services9.webp";
import { useNavigate } from "react-router-dom";
import Wave from "../Wave";
import './OurServices.css';
import FlipTiles from "./FlipTiles";
import FlipTilesFirst from "./FilpTilesFirst"
// import '../Brand.css'

function OurServices() {
    const navigate = useNavigate();
    const services = [
        {
            id: 1,
            type: "image",
            image: ser1,
            alt: "Business meeting",
        },
        {
            id: 2,
            type: "text",
            title: ["Brand", "Consulting"],
            subtitle: ["Brand identity and", "brand guidelines"],
            subtitle1: [""],
            color: "bg-[#c31c26]",
            textColor: "text-white",
            link: "/brand"
        },
        {
            id: 3,
            type: "image",
            image: ser2,
            alt: "Design work",
        },
        {
            id: 4,
            type: "text",
            title: ["Advertising", " and Promotions"],
            subtitle: ["Strategy ", "and planning"],
            subtitle1: [""],
            color: "bg-[#00974d]",
            textColor: "text-white",
            link: "/advertising"
        },
        {
            id: 5,
            type: "image",
            image: ser3,
            alt: "Mobile app development",
        },
        {
            id: 6,
            type: "text",
            title: ["PR and", "Reputation", "Management"],
            subtitle: ["Media", "planning"],
            subtitle1: [""],
            color: "bg-[#008fbf]",
            textColor: "text-white",
        },
        {
            id: 7,
            type: "image",
            image: ser4,
            alt: "Photography equipment",
        },
        {
            id: 8,
            type: "text",
            title: ["Media", "Buying"],
            subtitle: ["Event planning ", "and production"],
            subtitle1: [""],
            color: "bg-[#c98e27]",
            textColor: "text-white",
            link: "/events"
        },
        {
            id: 9,
            type: "image",
            image: ser5,
            alt: "Event management",
        },
        {
            id: 10,
            type: "text",
            title: ["Editorial and", "Advertorial"],
            subtitle: ["Exhibition ", "concepts and ", "production"],
            subtitle1: [""],
            color: "bg-[#761a5b]",
            textColor: "text-white",
            link: "/exhibitions"
        },
        {
            id: 11,
            type: "image",
            image: ser6,
            alt: "Social media management",
        },
        {
            id: 12,
            type: "text",
            title: ["Digital", "Marketing"],
            subtitle: ["Social media ", "marketing"],
            subtitle1: [""],
            color: "bg-[#e2496d]",
            textColor: "text-white",
            link: "/socialmedia"
        },
        {
            id: 13,
            type: "image",
            image: ser7,
            alt: "E-commerce development",
        },
        {
            id: 14,
            type: "text",
            title: ["Websites", "and Apps"],
            subtitle: ["Visual ", "merchandising"],
            subtitle1: [""],
            color: "bg-[#00aa7d]",
            textColor: "text-white",
        },
        {
            id: 15,
            type: "image",
            image: ser8,
            alt: "Training and workshops",
        },
        {
            id: 16,
            type: "text",
            title: ["Packaging ", "and Graphics"],
            subtitle: ["Content ", "development"],
            subtitle1: [""],
            color: "bg-[#9e745e]",
            textColor: "text-white",
            link: "/printingpublications"
        },
        {
            id: 17,
            type: "image",
            image: ser9,
            alt: "Motion graphics",
        },
        {
            id: 18,
            type: "text",
            title: ["Motion Graphics", "and Animation"],
            subtitle: ["Viral videos "],
            subtitle1: ["B2B marketing"],
            color: "bg-[#859283]",
            textColor: "text-white",
            link: "/animationspage"
        },
    ];
    const logoContainer = useRef(null)
    const pageLogo = useRef(null)
    const animate = useRef([false, false, false]);
    const [animate2, setAnimate2] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const gridRef = useRef(null)
    const [cardsVisible, setCardsVisible] = useState(false)
    const [showGrid, setShowGrid] = useState(true)
    const [showFlip, setShowFlip] = useState(false)
    const flipTimeoutRef = useRef(null)
    const flipStartedRef = useRef(false)
    const lastCardRef = useRef(null)
    const animationStartRef = useRef(null)
    const showFlipTimeoutRef = useRef(null)
    const timeoutRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const target = document.querySelector('#targetOurServices1');
            if (target && !animate.current[0]) {
                const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                const targetRect = target.getBoundingClientRect();
                // console.log('aboutus', targetRect.top, vh);
                if (targetRect.top < (vh / 3)) {
                    animate.current[0] = true; // prevent running again
                    if (logoContainer.current) {
                        // logoContainer.current.style.animationPlayState = 'running';
                        logoContainer.current.classList.add('animate');
                    }
                    if (pageLogo.current) {
                        // pageLogo.current.style.animationPlayState = 'running';
                        pageLogo.current.classList.add('animate');
                    }


                    const target2 = document.querySelector('#targetOurServices2');
                    if (target2 && !animate.current[1]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect2 = target2.getBoundingClientRect();
                        // console.log('aboutus2', targetRect2.top, vh, targetRect2.top < (vh / 2) || targetRect2.bottom < vh);
                        // if (targetRect2.top < (vh / 2) || targetRect2.bottom < vh) {

                        animate.current[1] = true; // prevent running again
                        // setAnimate2(true)
                        const temp = document.querySelector('#targetOurServices2');

                        // Remove the animate class to reset animation
                        // temp.classList.remove('animate');
                        const spans = temp.querySelectorAll(':scope > span');
                        // spans.forEach(span => span.classList.remove('animate'));

                        // Force a reflow to ensure the browser notices the change
                        // void temp.offsetWidth;

                        // Add the animate class back to trigger animation
                        temp.classList.add('animate');
                        spans.forEach((span, index) => span.style.animation = `fade-in-text 0.8s ${2 + (index * 0.1)}s forwards cubic-bezier(0.11, 0, 0.5, 0)`);
                        // }
                    }
                    const target3 = document.querySelector('#targetOurServices3');
                    if (target3 && !animate.current[2]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect = target3.getBoundingClientRect();
                        // console.log('aboutus', targetRect.top, vh);
                        // if (targetRect.top < (vh / 2) || targetRect.bottom < vh) {
                        timeoutRef.current = setTimeout(() => setTrigger(true), 3200)
                        animate.current[2] = true; // prevent running again
                        // }
                    }
                }
            }
        };

        // cards viewport detection
        const checkGrid = () => {
            if (!gridRef.current || cardsVisible) return;
            const rect = gridRef.current.getBoundingClientRect();
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            // trigger when top is within viewport (or 3/4 down)
            if (rect.top < vh && rect.bottom > 0) {
                setCardsVisible(true);
                // record when animations begin
                animationStartRef.current = performance.now();
                // start sequence to hide grid and show FlipTiles after card animations finish
                if (!flipStartedRef.current) {
                    flipStartedRef.current = true;
                    // attach animationend listener (later in effect) and start fallback timer
                    startFlipSequence();
                }
            }
        }

        const startFlipSequence = () => {
            // Match CSS: assumed per-card stagger (0.08s) and animation duration (0.52s)
            const n = services.length || 0;
            const stagger = 0.08; // seconds per card (matches OurServices.css)
            const animDuration = 0.52; // seconds (matches the CSS service-in duration)
            const buffer = 0.3; // extra buffer before hiding
            const totalSeconds = (Math.max(0, n - 1) * stagger) + animDuration + buffer;
            flipTimeoutRef.current = setTimeout(() => {
                setShowGrid(false);
                setShowFlip(true);
            }, Math.ceil(totalSeconds * 2100));
        }

        window.addEventListener('scroll', checkGrid);
        // initial check in case already in view
        checkGrid();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', checkGrid);
            window.removeEventListener('scroll', handleScroll);
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current)
            if (flipTimeoutRef.current)
                clearTimeout(flipTimeoutRef.current)
        };

    }, []);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowGrid(true); // set to true after 1 second
    //     }, 4000);

    //     // Cleanup when component unmounts
    //     return () => clearTimeout(timer);
    // }, []);


    
    useEffect(() => {
        if (!cardsVisible) return;
        const gridEl = gridRef.current;
        if (!gridEl) return;

        const cards = Array.from(gridEl.children || []);
        let completed = 0;
        const total = cards.length;

        const finalize = () => {
            if (flipStartedRef.current) return;
            flipStartedRef.current = true;
            // compute how long the cards took to finish
            const start = animationStartRef.current || performance.now();
            const elapsed = Math.max(0, Math.round(performance.now() - start));
            const maxDelay = 10000; // cap to 5s
            const delay = Math.min(elapsed, maxDelay);
            // hide the grid immediately, then show FlipTiles after the measured delay

            if (showFlipTimeoutRef.current) clearTimeout(showFlipTimeoutRef.current);
            showFlipTimeoutRef.current = setTimeout(() => {
                setShowGrid(false);
                setShowFlip(true);
            }, 200000);
            if (flipTimeoutRef.current) { clearTimeout(flipTimeoutRef.current); flipTimeoutRef.current = null; }
        };

        const handlers = [];
        cards.forEach((card) => {
            const computed = window.getComputedStyle(card);
            const animName = computed && computed.animationName;
            const animDuration = parseFloat((computed && computed.animationDuration) || 0) || 0;
            // If the element has no animation, count it as completed immediately
            if (!animName || animName === 'none' || animDuration === 0) {
                completed++;
                return;
            }

            const onEnd = () => {
                completed++;
                if (completed >= total) finalize();
            };

            card.addEventListener('animationend', onEnd, { once: true });
            handlers.push({ el: card, fn: onEnd });
        });

        // If all had no animations, finalize immediately
        if (completed >= total) {
            finalize();
        }

        // Fallback timeout in case animationend doesn't fire for any reason
        const stagger = 0.08; // matches OurServices.css
        const animDuration = 0.52; // matches CSS duration
        const buffer = 0.35;
        const fallbackMs = Math.ceil(((Math.max(0, total - 1) * stagger) + animDuration + buffer) * 1000);
        flipTimeoutRef.current = setTimeout(() => {
            if (!flipStartedRef.current) finalize();
        }, fallbackMs);

        return () => {
            handlers.forEach(h => { try { h.el.removeEventListener('animationend', h.fn); } catch (e) { } });
            if (flipTimeoutRef.current) { clearTimeout(flipTimeoutRef.current); flipTimeoutRef.current = null; }
            if (showFlipTimeoutRef.current) { clearTimeout(showFlipTimeoutRef.current); showFlipTimeoutRef.current = null; }
        };
    }, [cardsVisible]);

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

    const renderServiceCard = (service, idx = 0) => {
        if (service.type === "image") {
            return (
                <div className="[perspective:500px] hover:z-50 "
                    ref={idx === services.length - 1 ? lastCardRef : null}
                    style={{ ['--i']: idx }}
                    // onMouseMove={handleCardMouseMove}
                    // onMouseEnter={handleCardMouseEnter}
                    // onMouseLeave={handleCardMouseLeave}
                    // onFocus={handleCardMouseEnter}
                    // onBlur={handleCardMouseLeave}
                    onClick={() => {
                        if (service?.link)
                            navigate(service?.link)
                    }}>
                    <div
                        key={service.id}
                        className="relative w-full h-[180px] overflow-hidden ease-linear duration-200 hover:-rotate-x-3 hover:rotate-y-6"
                    >
                        <img
                            src={service.image}
                            alt={service.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="[perspective:500px] hover:z-50 cursor-pointer"
                    ref={idx === services.length - 1 ? lastCardRef : null}
                    style={{ ['--i']: idx }}
                    onClick={() => {
                        if (service?.link)
                            navigate(service?.link)
                    }}
                >
                    <div
                        key={service.id}
                        className={`${service.color} ${service.textColor} flex flex-col justify-center items-start p-6 w-full h-[170px] ease-linear duration-200 hover:-rotate-x-3 hover:rotate-y-6`}
                    >
                        <h3
                            className="text-sm font-light  mb-2 "
                            style={{ fontFamily: "Montserrat-Medium" }}
                        >
                            {service.title.map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </h3>
                        <div className="w-7 h-[2px] rounded-full bg-[blue] opacity-50 mb-2"></div>
                        <p
                            className="text-xs opacity-90 leading-relaxed "
                            style={{ fontFamily: "Montserrat-Regular" }}
                        >
                            {service.subtitle.map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>
                        {service.subtitle1.some(line => line.trim() !== "") && (
                            <>
                                <div className="w-18 h-[2px] bg-[blue] opacity-50 mb-2"></div>
                                <p
                                    className="text-sm opacity-90 leading-relaxed"
                                    style={{ fontFamily: "Montserrat-Regular" }}
                                >
                                    {service.subtitle1.map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            );
        }
    };

    return (
        <div id="targetOurServices1" className="relative flex flex-col min-h-auto bg-[#000000] text-white pt-32 max-w-screen overflow-hidden z-20">
            {/* Heading Section */}
            <Wave.Animated
                className="absolute inset-0 top-[-1%] w-[110%]  z-0 pointer-events-none"
                speed={100}
                paused={false}
            />
            <span className="w-full flex flex-col justify-center items-center relative z-10">
                {/* <div className="relative w-full flex justify-center"> */}
                <div
                    className="relative w-full flex flex-col justify-center items-center py-20 "
                // style={{
                //     backgroundImage: `url(${Linesbg})`,
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: "120% auto",
                //     backgroundPosition: "center bottom",
                // }}
                >
                    <div
                        // className="text-[80px] sm:text-[120px] md:text-[150px] xl:text-[180px] flex justify-center w-full text-[#343031] my-0 py-0 leading-[0.8] relative px-4 subhead"
                        // style={{ fontFamily: "PoppinsRegular" }}
                        className="logo-container" ref={logoContainer}
                        id="targetOurServicesSection"
                    >
                        <h1 className="!text-[80px] sm:!text-[120px] md:!text-[150px] xl:!text-[180px] !text-[#343031] !leading-[0.8] page-logo" ref={pageLogo}>
                            Our
                            <br />
                            Services
                        </h1>
                    </div>
                </div>
                {/* </div> */}

                <div className="w-full text-justify mt-10 z-10 m-auto ">
                    <h3
                        className="text-[28px] md:text-[60px] xl:text-[100px] font-700 leading-[3.5rem] xl:leading-[6.2rem] md:w-[597px] xl:w-[746px] mx-auto subHeadingAnimation"
                        style={{ fontFamily: "PoppinsRegular" }}
                        id="targetOurServices2"
                    >
                        <span>The</span> <span>things</span>
                        <br />
                        <span>we</span> <span>love</span> <span>to</span> <span>do</span>
                    </h3>
                </div>
            </span>

            {/* Services Grid Section */}
            <div className="w-full h-full flex justify-center items-center mt-20 px-6">
                {showGrid ? (
                    <FlipTilesFirst onComplete={() => {
                        if (flipTimeoutRef.current) { clearTimeout(flipTimeoutRef.current); flipTimeoutRef.current = null; }
                        if (showFlipTimeoutRef.current) { clearTimeout(showFlipTimeoutRef.current); showFlipTimeoutRef.current = null; }
                        // mark started and delay hiding grid by 1000ms
                        flipStartedRef.current = true;
                        setTimeout(() => {
                            setShowGrid(false);
                            setShowFlip(true);
                        }, 1000);
                    }} />
                ) : null}

                {showFlip ? <FlipTiles /> : null}
            </div>
        </div>
    );
}

export default OurServices;
