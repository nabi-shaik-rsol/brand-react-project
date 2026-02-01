import React, { useEffect, useRef, useState } from "react";
import apple from '../../../assets/BWLogos/apple.png';
import Dohabank from '../../../assets/BWLogos/Dohabank.png';
import EducnaboveAll from '../../../assets/BWLogos/EducnaboveAll.png';
import GulfBank from '../../../assets/BWLogos/GulfBank.png';
import Mannai from '../../../assets/BWLogos/Mannai.svg';
import MasterCard from '../../../assets/BWLogos/MasterCard-Logo-2016.png';
import Nebras from '../../../assets/BWLogos/Nebras.jpg';
import QatarAirways from '../../../assets/BWLogos/Qatar_Airways_Logo.png';
import QatarFounda from '../../../assets/BWLogos/qatarfoundation.png';
import qchem from '../../../assets/BWLogos/QChem.png';
import qnb from '../../../assets/BWLogos/QNBK.png';
import vcu from '../../../assets/BWLogos/VCU.png';
import Titan from '../../../assets/BWLogos/Titan.png';
import baic from '../../../assets/BWLogos/baic.png';
import casio from '../../../assets/BWLogos/casio.png';
import MTH from '../../../assets/BWLogos/MTH.png';
import gacMotors from '../../../assets/BWLogos/gacMotors.png';
import mazda from '../../../assets/BWLogos/mazda.png';
import toyota from '../../../assets/BWLogos/toyota.png';
import volvo from '../../../assets/BWLogos/volvo.png';
import AGmotors from '../../../assets/BWLogos/AGmotors.png';
import KBN from '../../../assets/BWLogos/KBN.png';
import lexus from '../../../assets/BWLogos/lexus.png';
import honda from '../../../assets/BWLogos/honda.png';
import QLM from '../../../assets/BWLogos/QLM.png';
import ALMUFTAH from '../../../assets/BWLogos/ALMUFTAH.png';
import LG from '../../../assets/BWLogos/LG.png';
import JE from '../../../assets/BWLogos/JE.png';
import ALMALKI from '../../../assets/BWLogos/ALMALKI.png';
import Linesbg from '../../../assets/Images/Lines Bg.svg';
import ParagraphLineWrapper from "./ParagraphLineWrapper";
import '../../ParallaxStars.scss';
import Wave from "../Wave";

function OurClients() {
    const logos = [
        { src: Dohabank, alt: "Doha Bank" },
        { src: GulfBank, alt: "Gulf Bank" },
        { src: MasterCard, alt: "Mastercard" },
        { src: qnb, alt: "QNB" },
        { src: apple, alt: "Apple" },
        // { src: Mannai, alt: "Mannai" },
        { src: QatarFounda, alt: "Qatar Foundation" },
        // { src: EducnaboveAll, alt: "Education Above All" },
        // { src: vcu, alt: "VCU" },
        { src: qchem, alt: "QChem" },
        // { src: Nebras, alt: "Nebras" },
        { src: QatarAirways, alt: "Qatar Airways" },
        { src: Titan, alt: "titan" },
        { src: baic, alt: "baic" },
        { src: casio, alt: "casio" },
        { src: MTH, alt: "MTH" },
        { src: gacMotors, alt: "gacMotors" },
        { src: mazda, alt: "mazda" },
        { src: toyota, alt: "toyota" },
        { src: volvo, alt: "volvo" },
        { src: AGmotors, alt: "AGmotors" },
        { src: KBN, alt: "KBN" },
        { src: lexus, alt: "lexus" },
        { src: honda, alt: "honda" },
        { src: QLM, alt: "QLM" },
        { src: ALMUFTAH, alt: "ALMUFTAH" },
        { src: LG, alt: "LG" },
        { src: JE, alt: "JE" },
        { src: ALMALKI, alt: "ALMALKI" },
    ];
    const duplicatedLogos = [...logos, ...logos];
    const logoContainer = useRef(null);
    const pageLogo = useRef(null);
    const animate = useRef([false, false, false]);
    const scrollContainerRef = useRef(null);
    const [trigger, setTrigger] = useState(false);
    const [activeIndex, setActiveIndex] = useState(logos.length);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeout = useRef(null);
    const animationFrameId = useRef(null);
    const [logoStyles, setLogoStyles] = useState(
        duplicatedLogos.map(() => ({
            transform: 'scale(1, 1)',
            opacity: 0.8,
            margin: '0 40px',
            zIndex: 1
        }))
    );
    const scrollDelayRef = useRef(null);
    const lastScrollTime = useRef(0);
    const scrollDirection = useRef(0); // 0: none, 1: right, -1: left

    const timeoutRef = useRef(null)
    const timeoutRef2 = useRef(null)
    const [centerCard, setCenterCard] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            const target = document.querySelector('#targetOurClients1');
            if (target && !animate.current[0]) {
                const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                const targetRect = target.getBoundingClientRect();
                if (targetRect.top < (vh / 3)) {
                    animate.current[0] = true;
                    if (logoContainer.current) {
                        logoContainer.current.classList.add('animate');
                    }
                    if (pageLogo.current) {
                        pageLogo.current.classList.add('animate');
                    }

                    const target2 = document.querySelector('#targetOurClients2');
                    if (target2 && !animate.current[1]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                        const targetRect2 = target2.getBoundingClientRect();
                        // if (targetRect2.top < (vh / 2) || targetRect2.bottom < vh) {
                            animate.current[1] = true;
                            const temp = document.querySelector('#targetOurClients2');
                            const spans = temp.querySelectorAll(':scope > span');
                            spans.forEach((span, index) => span.style.animation = `fade-in-text 0.8s ${2 + (index * 0.1)}s forwards cubic-bezier(0.11, 0, 0.5, 0)`);
                        // }
                    }
                    const target3 = document.querySelector('#targetOurClients3');
                    if (target3 && !animate.current[2]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                        const targetRect = target3.getBoundingClientRect();
                        // if (targetRect.top < (vh / 2) || targetRect.bottom < vh) {
                            timeoutRef2.current = setTimeout(() => setTrigger(true), 3200)
                            animate.current[2] = true;
                        // }
                    }
                }
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            if (scrollDelayRef.current) {
                clearTimeout(scrollDelayRef.current);
            }
            if(timeoutRef2.current)
                clearTimeout(timeoutRef2.current)
        };
    }, []);

    useEffect(() => {
        const container = scrollContainerRef.current;

        if (container) {
            requestAnimationFrame(() => {
                const containerWidth = container.offsetWidth;
                const logoElements = container.children;

                if (logoElements.length > logos.length) {
                    const logo = logoElements[logos.length];
                    const logoLeft = logo.offsetLeft;
                    const logoWidth = logo.offsetWidth;

                    const targetScrollLeft = logoLeft - (containerWidth / 2) + (logoWidth / 2);

                    container.scrollLeft = targetScrollLeft;
                } else {
                    container.scrollLeft = (container.scrollWidth / 2) - (containerWidth / 2);
                }

                // Update scales after initial positioning
                updateLogoScales();
            });
        }
    }, []);

    // Continuously update scales for smooth animation
    useEffect(() => {
        const animateScales = () => {
            animationFrameId.current = requestAnimationFrame(animateScales);
        };

        animationFrameId.current = requestAnimationFrame(animateScales);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    const handleInfiniteScroll = () => {
        const now = Date.now();

        // Clear any existing timeout
        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }

        // Set scrolling state immediately
        setIsScrolling(true);

        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const totalScrollWidth = container.scrollWidth;
        const visibleWidth = container.offsetWidth;
        const half = totalScrollWidth / 2;

        // Handle infinite scroll wrapping
        if (scrollLeft <= 0) {
            container.scrollLeft = half;
        } else if (scrollLeft + visibleWidth >= totalScrollWidth - 1) {
            container.scrollLeft = half - visibleWidth;
        }

        // Determine scroll direction
        if (now - lastScrollTime.current > 50) { // Throttle direction detection
            const delta = scrollLeft - (lastScrollPosition.current || 0);
            scrollDirection.current = delta > 0 ? 1 : delta < 0 ? -1 : 0;
            lastScrollPosition.current = scrollLeft;
        }
        lastScrollTime.current = now;

        if (timeoutRef.current)
            clearTimeout(timeoutRef.current)

        // Set timeout to handle scroll end with 700ms delay
        scrollTimeout.current = setTimeout(() => {
            setIsScrolling(false);
            snapToNearestLogo();

            timeoutRef.current = setTimeout(() => {
                updateLogoScales();
            }, 100)

        }, 700);
    };

    const lastScrollPosition = useRef(0);

    const updateLogoScales = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const containerWidth = container.offsetWidth;
        const scrollLeft = container.scrollLeft;
        const containerCenter = scrollLeft + (containerWidth / 2);

        // let up = true
        let mid = 0
        const newStyles = duplicatedLogos.map((_, index) => {
            const logo = container.children[index];
            if (!logo) return {
                transform: 'scale(1, 1)',
                opacity: 0.8,
                margin: '0 40px',
                zIndex: 1
            };

            const logoLeft = logo.offsetLeft;
            const logoWidth = logo.offsetWidth;
            const logoCenter = logoLeft + (logoWidth / 2);
            const distanceFromCenter = Math.abs(logoCenter - containerCenter);

            let scaleX = 1;
            let scaleY = 1;
            let opacity = 0.8;
            let zIndex = 1;
            let conentBackground = 'transparent'
            let translateY = 0

            if (distanceFromCenter < containerWidth * 0.01) {
                // scaleX = 2.7;
                scaleX = 2.2;
                scaleY = 2.2;
                opacity = 1;
                zIndex = 10;
                conentBackground = 'blue'

                mid = index
            } else if (distanceFromCenter < containerWidth * 0.45) {
                scaleX = 1.1;
                scaleY = 1.1;
                opacity = 0.9;
                zIndex = 5;
                
                // if(up) {
                //   translateY = '-50%'
                //   up = false
                // } else {
                //   translateY = '50%'
                //   up = true
                // }
            }

            const extraSpace = (scaleX - 1) * logoWidth / 2;
            return {
                transform: `scale(${scaleX}, ${scaleY}) translateY(${translateY})`,
                opacity,
                margin: `0 ${extraSpace + 10}px`,
                zIndex,
            };
        });

        setCenterCard(mid)
        setLogoStyles(newStyles);
    };

    const snapToNearestLogo = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const containerWidth = container.offsetWidth;
        const scrollLeft = container.scrollLeft;
        const logoElements = container.children;

        let minDistance = Infinity;
        let targetIndex = 0;

        for (let i = 0; i < logoElements.length; i++) {
            const logo = logoElements[i];
            const logoLeft = logo.offsetLeft;
            const logoWidth = logo.offsetWidth;
            const logoCenter = logoLeft + (logoWidth / 2);
            const containerCenter = scrollLeft + (containerWidth / 2);
            const distance = Math.abs(logoCenter - containerCenter);

            if (distance < minDistance) {
                minDistance = distance;
                targetIndex = i;
            }
        }

        if (logoElements[targetIndex]) {
            const logoLeft = logoElements[targetIndex].offsetLeft;
            const logoWidth = logoElements[targetIndex].offsetWidth;
            const targetScrollLeft = logoLeft - (containerWidth / 2) + (logoWidth / 2);

            // Smooth scroll to the target logo
            container.scrollTo({
                left: targetScrollLeft,
                behavior: 'smooth'
            });

            setActiveIndex(targetIndex % logos.length);
        }
    };

    return (
        <div id='targetOurClients1' className="relative flex flex-col min-h-auto bg-[#000000] text-white pt-32 max-w-screen overflow-hidden z-20">
            <Wave.Animated
                className="absolute inset-0 top-[-1%] w-[110%]  z-0 pointer-events-none"
                speed={100}
                paused={false}
            />
            <span className="w-full flex flex-col justify-center items-center relative z-10  touch-none user-select-none">
                {/* <div className="relative w-full flex justify-center"> */}
                <div
                    className="relative z-0  w-full flex-col flex  items-center py-20 "
                // style={{
                //     backgroundImage: `url(${Linesbg})`,
                // }}
                >
                    <div
                        className="logo-container"
                        ref={logoContainer}
                        id="targetOurClientsSection"
                    >
                        <h1 className="text-[80px] sm:!text-[120px] md:!text-[176px] xl:!text-[220px] !text-[#343031] !leading-[0.9] page-logo" ref={pageLogo}>
                            Our
                            <br />
                            Clients
                        </h1>
                    </div>
                </div>
                {/* </div> */}
                {/* <div className="w-full mt-0 z-10 m-auto">
                    <h3 id='targetOurClients2' className="text-[28px] md:text-[60px] xl:text-[100px] font-700 leading-[3.75rem] xl:leading-[6.2rem] mx-auto lg:w-[597px] xl:w-[746px] subHeadingAnimation" style={{ fontFamily: "PoppinsRegular" }}>
                        <span>Lorem</span> <span>ipsum</span> <br />
                        <span>dolor</span> <span>sit</span> <span>amet</span>
                    </h3>
                    <div id="targetOurClients3" className="lg:w-[597px] xl:w-[706px] m-auto mt-5 text-gray-300 text-[12px] md:text-[14px] xl:text-[16px] leading-relaxed z-10" style={{ fontFamily: "Montserrat-Regular" }}>
                        <span className="w-[600px]">
                            <ParagraphLineWrapper
                                text='We work with prestigious companies and institutions across different sectors in Qatar, to grow their business and enhance their marketing effectiveness.Talk to a few of our clients and you will realise why they love partnering with us.'
                                trigger={trigger}
                            />
                        </span>
                    </div>
                </div> */}
     </span>

            {/* <div id='carousel' className="parallaxStars w-full max-w-screen h-[calc(100vh)] mt-16 relative z-10">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div
                    ref={scrollContainerRef}
                    onScroll={handleInfiniteScroll}
                    className="absolute top-[50%] -translate-y-1/2 flex items-center gap-10 z-20 w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    // style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    style={{ scrollbarWidth: 'none' }}
                >
                    {duplicatedLogos.map((e, index) => (
                        <div
                            key={index}
                            className={`bg-[#111111aa] p-6 flex items-center justify-center h-24 md:h-52 min-w-[140px] snap-center transition-all duration-500 hover:scale-[1.1] origin-center
                            before:content-[''] before:absolute before:h-[15%] before:w-[1px] before:bg-blue-600 before:top-0 before:-left-[10px]`}
                            style={logoStyles ? logoStyles[index] : undefined}
                        >
                            <img
                                src={e.src}
                                alt={e.alt}
                                className="max-w-[150%] w-[60%] max-h-full object-cover"
                            />
                            <div className="absolute bottom-[15%] left-[80%] flex items-center">
                                <p className={`text-[5px] text-nowrap w-0 overflow-hidden duration-300 leading-[1] ${index === centerCard ? 'w-full' : ''}`}>VIEW PROJECTS</p>
                                <hr className={`border-[#BA3161] w-3`}/>
                                {index === centerCard && <div className="p-[1px] border border-[#BA3161] border-l-0 border-b-0 -ml-[3px] rotate-45"></div>}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div> */}

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}

export default OurClients;
