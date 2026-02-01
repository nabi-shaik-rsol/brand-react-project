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
// import '../../ParallaxStars.scss';
import Wave from "../Wave";
import { transform } from "framer-motion";

function OurClients() {
    const logos = [
        { src: Dohabank, alt: "Doha Bank" },
        { src: GulfBank, alt: "Gulf Bank" },
        { src: MasterCard, alt: "Mastercard" },
        { src: qnb, alt: "Qatar National Bank" },
        { src: apple, alt: "Apple" },
        // { src: Mannai, alt: "Mannai" },
        { src: QatarFounda, alt: "Qatar Foundation" },
        // { src: EducnaboveAll, alt: "Education Above All" },
        // { src: vcu, alt: "VCU" },
        { src: qchem, alt: "QChem" },
        // { src: Nebras, alt: "Nebras" },
        { src: QatarAirways, alt: "Qatar Airways" },
        { src: Titan, alt: "Titan" },
        { src: baic, alt: "Basic" },
        { src: casio, alt: "Casio" },
        { src: MTH, alt: "Mannai Tech Hub" },
        { src: gacMotors, alt: "GAC Motors" },
        { src: mazda, alt: "Mazda" },
        { src: toyota, alt: "Toyota" },
        { src: volvo, alt: "Volvo" },
        { src: AGmotors, alt: "AG Motors" },
        { src: KBN, alt: "KBN Holdings" },
        { src: lexus, alt: "Lexus" },
        { src: honda, alt: "honda" },
        { src: QLM, alt: "QLM" },
        { src: ALMUFTAH, alt: "AL MUFTAH" },
        { src: LG, alt: "LG" },
        { src: JE, alt: "Jumbo Electronics" },
        { src: ALMALKI, alt: "AL MALKI" },
    ];

    // const defaultStyles = [...Array(49)].map(() => ({
    //     // backgroundColor: '#1c1c1caa',
    //     padding: '1.5rem', // p-6 ≈ 1.5rem
    //     // display: 'flex',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    //     height: '13rem', // h-24 ≈ 6rem (24 * 0.25rem)
    //     minWidth: '140px',
    //     // scrollSnapAlign: 'center',
    //     // transition: 'all 500ms',
    //     // transformOrigin: 'center'
    //     transform: 'scale(1)'
    // }))


    const duplicatedLogos = [...logos, ...logos];

    const defaultStyles = duplicatedLogos.map(() => ({
        transform: 'scale(1, 1)',
        opacity: 0.8,
        // margin: '0 40px',
        zIndex: 1
    }))
    // const defaultStyles = duplicatedLogos.map(() => 'scale-100 translate-x-0 translate-y-0')
    const logoContainer = useRef(null);
    const pageLogo = useRef(null);
    const animate = useRef([false, false, false]);
    const scrollContainerRef = useRef(null);
    const [trigger, setTrigger] = useState(false);
    const [activeIndex, setActiveIndex] = useState(logos.length);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeout = useRef(null);
    const animationFrameId = useRef(null);
    const [logoStyles, setLogoStyles] = useState(defaultStyles);
    const scrollDelayRef = useRef(null);
    const lastScrollTime = useRef(0);
    const scrollDirection = useRef(0); // 0: none, 1: right, -1: left

    const timeoutRef = useRef(null)
    const timeoutRef2 = useRef(null)
    const [centerCard, setCenterCard] = useState(0)

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
        return () => {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }
    }, []);

    // useEffect(() => console.log(logoStyles), [logoStyles])
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

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
            clearTimeout(scrollTimeout.current);
        }
    }, [])


    const handleInfiniteScroll = () => {
        const now = Date.now();

        // Clear any existing timeout
        if (scrollTimeout.current) {
            // console.log("clear scrollTimeoutRef",scrollTimeout.current)
            clearTimeout(scrollTimeout.current);
        }
        if (timeoutRef.current) {
            // console.log("clear timeoutRef",timeoutRef.current)
            clearTimeout(timeoutRef.current)
        }

        console.log('scroll')


        if (!isScrolling) {

            // Set scrolling state immediately
            setIsScrolling(true);
            setLogoStyles(defaultStyles)
        }
        if (centerCard > -1)
            setCenterCard(null)

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

        // console.log("start scrollTimeoutRef",scrollTimeout.current)
        // Set timeout to handle scroll end with 700ms delay
        scrollTimeout.current = setTimeout(() => {
            snapToNearestLogo();

            if (timeoutRef.current) {
                console.log("clear timeoutRef", timeoutRef.current)
                clearTimeout(timeoutRef.current)
            }

            console.log("start timeoutRef", timeoutRef.current)
            timeoutRef.current = setTimeout(() => {
                updateLogoScales();
                setIsScrolling(false);
                scrollTimeout.current = null
            }, 100)

        }, 300);
    };

    const lastScrollPosition = useRef(0);

    const updateLogoScales = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const containerWidth = container.offsetWidth;
        const scrollLeft = container.scrollLeft;
        const containerCenter = scrollLeft + (containerWidth / 2);

        console.log('update', containerWidth)

        let up = true
        let mid = 0
        let sides = 0
        const screenWidth = window.innerWidth
        const transVal = screenWidth > 1791 ? 38 : screenWidth > 1535 ? 28 : screenWidth > 1439 ? 24 : screenWidth > 1279 ? 16 : screenWidth > 1128 ? 10 : 0;
        const diff = 938;
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
            let translateX = 0;
            let translateY = 0;
            let marginRight = 0;
            let marginLeft = 0;

            if (distanceFromCenter < containerWidth * 0.01) {
                // scaleX = 2.7;
                scaleX = 2.2;
                scaleY = 2.2;
                opacity = 1;
                zIndex = 10;
                conentBackground = 'blue'

                mid = index
                // } else if ((screenWidth > 1322 || distanceFromCenter < containerWidth * 0.4) || distanceFromCenter < containerWidth * 0.45) {
            } else if (distanceFromCenter < 400) {
                scaleX = 1.1;
                scaleY = 1.1;
                opacity = 0.9;
                zIndex = 5;

                if (up) {
                    translateY = '-50%'
                    if (screenWidth > 1023 && screenWidth < 2000) {
                        if (mid === 0) {
                            translateX = `-${((containerWidth - diff) / 2) - transVal}px`
                            // translateX = `-${(containerWidth - diff) / 2}px`
                            // marginRight = (containerWidth - diff ) / 4
                        } else {
                            // translateX = `${((containerWidth - 616 - 308) / 2) + 32}px`
                            translateX = `${((containerWidth - 616 - 308) / 4) + 32 - (transVal / 4)}px`
                            // translateX = `${32}px`
                            console.log(`${((containerWidth - 457.6 - 139) / 4) - 206}px`)
                            // marginLeft = (containerWidth - diff ) / 4
                        }
                    }
                    up = false
                } else {
                    translateY = '50%'
                    if (screenWidth > 1023 && screenWidth < 2000) {
                        if (mid === 0) {
                            // translateX = `-${((containerWidth - diff) / 4)}px`
                            translateX = `-${((containerWidth - 616 - 308) / 4) + 32 - (transVal / 4)}px`
                            // translateX = `-${32}px`
                            // marginRight = (containerWidth - diff ) / 4
                        } else {
                            translateX = `${((containerWidth - diff) / 2) - transVal}px`
                            // marginLeft = (containerWidth - diff ) / 4
                        }
                    }
                    up = true
                }
            } else {
                if (mid === 0) {
                    translateX = `-${((containerWidth - diff) / 2)}px`
                } else {
                    translateX = `${((containerWidth - diff) / 2)}px`
                }
            }

            // if(up && mid === 0) {
            //     const screenWidth = window.innerWidth
            //     translateX = `${screenWidth-1024}px`
            // }

            // const extraSpace = (scaleX - 1) * logoWidth / 2;
            return {
                transform: `scale(${scaleX}, ${scaleY}) translate(${translateX},${translateY})`,
                opacity,
                // margin: `0 ${extraSpace + 10 + marginRight}px 0 ${extraSpace + 10 + marginLeft}px`,
                zIndex,
            };
        });


        setCenterCard(mid)

        // if (screenWidth < 2000) {
        //     newStyles[mid + 3] = { ...newStyles[mid + 3], transform: `translateX(${((containerWidth - diff) / 2) - 10}px)` };
        //     newStyles[mid - 3] = { ...newStyles[mid - 3], transform: `translateX(-${((containerWidth - diff) / 2) - 10}px)` };
        // }

        setLogoStyles(newStyles);
    };

    // const updateLogoScales = () => {
    //     const container = scrollContainerRef.current;
    //     if (!container) return;

    //     const containerWidth = container.offsetWidth;
    //     const scrollLeft = container.scrollLeft;
    //     const containerCenter = scrollLeft + (containerWidth / 2);

    //     let up = true;
    //     let mid = 0;
    //     const screenWidth = window.innerWidth;
    //     const diff = screenWidth > 1408 ? 1195 : screenWidth > 1279 ? 1180 : screenWidth > 1128 ? 1040 : 1009;

    //     const newClasses = duplicatedLogos.map((_, index) => {
    //         const logo = container.children[index];
    //         if (!logo) return "opacity-80 scale-100 z-1 mx-10";

    //         const logoLeft = logo.offsetLeft;
    //         const logoWidth = logo.offsetWidth;
    //         const logoCenter = logoLeft + (logoWidth / 2);
    //         const distanceFromCenter = Math.abs(logoCenter - containerCenter);

    //         let baseClasses = "transition-all duration-700";
    //         let scaleClass = "scale-100";
    //         let opacityClass = "opacity-80";
    //         let zIndexClass = "z-1";
    //         let translateClass = "";
    //         // let marginClass = "mx-10";

    //         if (distanceFromCenter < containerWidth * 0.01) {
    //             scaleClass = "scale-220"; // Custom scale value
    //             opacityClass = "opacity-100";
    //             zIndexClass = "z-10";
    //             mid = index;
    //         } else if (distanceFromCenter < containerWidth * 0.45) {
    //             scaleClass = "scale-110"; // Custom scale value
    //             opacityClass = "opacity-90";
    //             zIndexClass = "z-5";

    //             if (up) {
    //                 translateClass = "-translate-y-[50%]";
    //                 if (screenWidth > 1023 && screenWidth < 1536) {
    //                     if (mid === 0) {
    //                         translateClass = `!-translate-x-[calc(${Math.round((containerWidth - diff) / 2)})px] ${translateClass}`
    //                         // translateClass = `-translate-x-1/2 ${translateClass}`
    //                         console.log(`-translate-x-[${Math.round((containerWidth - diff) / 2)}px]`, containerWidth, diff)
    //                     } else {
    //                         translateClass = `!translate-x-[calc(${Math.round((containerWidth - diff) / 4)})px] ${translateClass}`
    //                         // translateClass = `translate-x-1/2 ${translateClass}`
    //                         console.log(`translate-x-[${Math.round((containerWidth - diff) / 4)}px]`, containerWidth, diff)
    //                     }
    //                 }
    //                 up = false;
    //             } else {
    //                 translateClass = "translate-y-[50%]";
    //                 if (screenWidth > 1023 && screenWidth < 1536) {
    //                     if (mid === 0) {
    //                         translateClass = `!-translate-x-[calc(${Math.round((containerWidth - diff) / 4)})px] ${translateClass}`
    //                         // translateClass = `-translate-x-1/2 ${translateClass}`
    //                         console.log(`-translate-x-[${Math.round((containerWidth - diff) / 4)}px]`, containerWidth, diff)
    //                     } else {
    //                         translateClass = `!translate-x-[calc(${Math.round((containerWidth - diff) / 2)})px] ${translateClass}`
    //                         // translateClass = `translate-x-1/2 ${translateClass}`
    //                         console.log(`translate-x-[${Math.round((containerWidth - diff) / 2)}px]`, containerWidth, diff)
    //                     }
    //                 }
    //                 up = true;
    //             }
    //         }

    //         return `${baseClasses} ${scaleClass} ${opacityClass} ${zIndexClass} ${translateClass}`;
    //     });

    //     setCenterCard(mid);
    //     setLogoStyles(newClasses);
    // };

    const snapToNearestLogo = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        console.log('snapToNearestLogo')

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
        <div className="relative flex flex-col min-h-auto bg-[#000000] text-white pt-32 max-w-screen overflow-hidden z-20">
            <div id='carousel' className="parallaxStars w-full max-w-screen h-[calc(100vh)] mt-16 relative z-10">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div
                    ref={scrollContainerRef}
                    onScroll={handleInfiniteScroll}
                    className="absolute top-[50%] -translate-y-1/2 flex items-center gap-14 z-20 w-[calc(100%-15px)] h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    // style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    style={{ scrollbarWidth: 'none' }}
                >
                    {duplicatedLogos.map((e, index) => (
                        <div className="relative h-24 md:h-52 min-w-[140px] snap-center ">
                            <div
                                key={index}
                                className={`absolute flex items-center justify-center h-full w-full transform transition-all duration-500 origin-center  group`}
                                style={logoStyles ? logoStyles[index] : undefined}
                            >
                                <div className="relative flex items-center justify-center h-full w-full ">
                                    <div className={`absolute h-full w-full bg-[#1c1c1caa] ${!isScrolling ? 'group-hover:scale-y-[1.125] group-hover:scale-x-[1.075]' : ''} ease-linear ${index === centerCard ? 'duration-300 group-hover:scale-105' : 'duration-200'}  `}></div>

                                    <div className={`absolute flex items-center duration-100  ${index === centerCard ? "scale-50 -top-[34px] -left-3" : "-top-5 -left-[18px]"} w-[1px] ${isScrolling ? 'h-0' : 'h-[72px]'} `}>
                                        <div className={`bg-blue-600  transform ease-linear delay-0 ${index === centerCard ? 'duration-300' : 'duration-200'} ${isScrolling ? 'h-0' : 'h-full group-hover:h-4/5'} w-full`}></div>

                                        {index === centerCard && <p className="absolute top-6 left-6 ease-linear -translate-y-full text-[10px] group-hover:top-0 duration-300 uppercase text-nowrap">{e?.alt}</p>}

                                    </div>
                                    <img
                                        src={e.src}
                                        alt={e.alt}
                                        className="max-w-[150%] w-[40%] max-h-full object-cover z-10"
                                    />
                                </div>
                                <div className="absolute bottom-[4%] right-[18%] translate-x-1/2 flex items-center">
                                    {/* <p className={`text-[5px] text-nowrap w-0 overflow-hidden duration-300 leading-[1] ${index === centerCard ? 'w-full' : ''}`}>VIEW PROJECTS</p> */}
                                    {/* <hr className={`border-[#ff0054] w-4`} /> */}
                                    {/* <div className={`p-[2px] border border-[#ff0054] border-l-0 border-b-0 -ml-[5px] rotate-45 ease-linear duration-300 hidden ${index === centerCard ? "inline-block" : !isScrolling ? 'group-hover:block' : ""} `}></div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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
