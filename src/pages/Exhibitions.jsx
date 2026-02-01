import React, { useEffect, useRef } from 'react';
import icon1 from "../../assets/icons/play-button.png"
import Timer from "../../assets/icons/Exibitions@300x.png";
import Arrow from "../../assets/icons/left-arrow.png";
import './Advertising.css'
import Wave from './Wave';
import { useNavigate } from 'react-router-dom';

const Exhibitions = () => {

    const services = [
        { title: "Concept\nDesign &\nStrategy", color: "bg-[#d37548]" },
        { title: "3D Booth\nDesign &\nVisualization", color: "bg-[#008fbf]" },
        { title: "Fabrication &\nBuild", color: "bg-[#00974d]" },
        { title: "Immersive\nExperience\nDesign", color: "bg-[#c31c26]" },
        { title: "Representat-\nion of Divisions/\nSub-brands", color: "bg-[#e2496d]" },
        { title: "Logistics &\n Project\nManagement", color: "bg-[#00aa7d]" },
        { title: "Event\nCollateral &\nBranding", color: "bg-[#761a5b]" },
        { title: "International\nExhibitions", color: "bg-[#c98e27]" }
    ];
    const animateHeading = useRef(false);
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])


    useEffect(() => {
        const triggerAnimationIfVisible = () => {
            const animateEl = (el) => {
                if (!el) return false;
                const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                const rect = el.getBoundingClientRect();
                if (!(rect.top < vh && rect.bottom > 0)) return false;
                const spans = el.querySelectorAll(':scope > span');
                // reset any previous inline ffanimation styles
                spans.forEach(span => {
                    span.style.animation = 'none';
                    span.style.opacity = '0';
                });
                el.classList.remove('animate');
                void el.offsetWidth; // force reflow
                el.classList.add('animate');
                spans.forEach((span, i) => {
                    span.style.animation = `fade-in-text 0.8s ${i * 0.08}s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
                });
                return true;
            };

            const main = document.querySelector('#activationsSubHeading');
            const secondary = document.querySelector('#activationsWhatWeDo');
            const third = document.querySelector('#activationsStrat');

            if (!animateHeading.current) {
                const animatedMain = animateEl(main);
                const animatedSecondary = animateEl(secondary);
                const animatedThird = animateEl(third)
                if (animatedMain || animatedSecondary || animatedThird) animateHeading.current = true;
            }

            try {
                const pEl = document.querySelector('#activationsParagraph');
                if (pEl && !pEl.dataset.animated) {
                    const existingSpans = pEl.querySelectorAll('span');
                    if (existingSpans.length === 0) {
                        const text = pEl.innerText.trim();
                        const parts = text.split(/(\s+)/);
                        const html = parts.map(part => (/^\s+$/.test(part) ? part : `<span>${part}</span>`)).join('');
                        pEl.innerHTML = html;
                        pEl.classList.add('paragraphAnimation');
                        const wordSpans = pEl.querySelectorAll(':scope > span');
                        wordSpans.forEach((span, i) => {
                            span.style.animation = `fade-in 0.6s ${i * 0.03}s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
                        });
                        pEl.dataset.animated = '1';
                    }
                }
            } catch (e) { }
        };

        const onScroll = () => triggerAnimationIfVisible();
        window.addEventListener('scroll', onScroll);
        window.addEventListener('load', triggerAnimationIfVisible);
        window.addEventListener('resize', triggerAnimationIfVisible);
        triggerAnimationIfVisible();
        const t = setTimeout(triggerAnimationIfVisible, 350);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('load', triggerAnimationIfVisible);
            window.removeEventListener('resize', triggerAnimationIfVisible);
            clearTimeout(t);
        };
    }, []);

    // 3D tilt / parallax handlers (copied from Activations.jsx)
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

    // run initial bounce on the timer image then switch to float (same as Activations)
    useEffect(() => {
        const el = document.querySelector('.activations-timer');
        if (!el) return;
        el.classList.add('timer-bounce');
        const t = setTimeout(() => {
            el.classList.remove('timer-bounce');
            el.classList.add('timer-float');
        }, 1600);
        return () => clearTimeout(t);
    }, []);


    return (
        <div className="relative  lg:justify-evenly md:justify-between sm:justify-center w-full xs:items-center items-baseline min-h-screen mx-auto bg-black text-white overflow-hidden   
                                                2xl:px-40 xl:px-35 lg:px-20 md:px-11 px-6 3xl:pt-36 2xl:pt-20 xl:pt-8 lg:pt-8 md:pt-8 pt-10 lg:pb-8 md:pb-8  pb-8  
                                                       " >
            <Wave.Animated className="absolute inset-0 w-[110%] h-full z-0 pointer-events-none" speed={100} paused={false} />
            <div className='flex justify-between items-baseline   '>
                <h3 id="activationsStrat" className="text-[25px] w-full items-start xl:text-[35px] lg:text-[30px] md:text-[30px] 2xl:text-[45px] xs:text-[25px] font-light tracking-wide leading-[2rem] 5xl:text-[70px] 5xl:leading-[4.5rem] 2xl:leading-[3rem] xl:leading-[3rem] md:leading-[1.5rem] xs:leading-[1.3rem] subHeadingAnimation" style={{ fontFamily: "PoppinsLight" }}>
                    <span>Exhibitions</span>
                </h3>
                <div className='flex justify-end py-5 md:pr-0 pr-5 w-full' >
                    <img src={Timer} className='activations-timer 2xl:w-24 2xl:h-24 lg:w-20 lg:h-20 md:w-[70px] md:h-[70px] sm:w-14 sm:h-14  xs:w-14 xs:h-14  w-14 h-14' alt='...' />
                </div>
            </div>
            <div className="relative flex flex-col lg:flex-row  2xl:justify-between lg:justify-between md:justify-between sm:justify-center w-full md:items-baseline items-start min-h-fit mx-auto  text-white overflow-hidden 2xl:gap-32  lg:gap-20 md:gap-5  ">

                <div className="5xl:w-[40%]   2xl:w-[35%] lg:w-[35%] md:w-[100%] sm:w-[100%] w-[100%]  z-10">

                    <div className="w-full">
                        <h2
                            id="activationsSubHeading"
                            className="2xl:text-[70px] xl:text-[45px] md:text-[40px] text-[35px] text-bolder  mb-8 tracking-wide 2xl:leading-[4.5rem] xl:leading-[50px] leading-[2.6rem] md:leading-[2.7rem] subHeadingAnimation"
                            style={{ fontFamily: "PoppinsRegular" }}
                        >
                            <span>Where Ideas</span>
                            <br className="lg:block md:hidden hidden" />
                            <span>Become</span>
                            <br />
                            <span>Experiences.</span>
                            <br className="lg:block md:hidden hidden" />
                            {/* <span>Unforgettable.</span> */}
                        </h2>


                        <div className="space-y-6  5xl:text-[32px] 5xl:leading-13  2xl:text-[18px]  lg:text-[12px] xs:text-[10px] text-[12px] xs:leading-[1rem] leading-[1.3rem] text-gray-300  2xl:leading-[1.5rem] tracking-wider md:mb-8 sm:mb-8 mb-10" style={{ fontFamily: "Montserrat-Light" }}>
                            <p id="activationsParagraph">
                                At Brain Wave, we transform spaces into storytelling platforms. Our
                                exhibition designs go beyond booths—they create immersive journeys
                                that captivate, inform, and inspire. Whether it's a global summit, trade
                                show, or brand pavilion, we craft modular, experiential, and visually
                                striking exhibition environments that reflect your brand's purpose and
                                leave lasting impressions.
                            </p>

                        </div>
                    </div>
                </div>


                <div className="justify-end flex flex-col lg:w-[65%] md:w-[100%] sm:w-[100%] w-[100%] xs:w-[100%] items-start z-10 lg:pl-0 md:pl-0 xs:pl-0 pl-0">


                    <div className='w-full flex items-end'>
                        <h3 id="activationsWhatWeDo" className="text-[25px] w-full lg:text-[30px]  xl:text-[35px] 5xl:text-[70px] 5xl:leading-25 md:text-[30px] 2xl:text-[45px] xs:text-[25px] font-light mb-7  tracking-wide 2xl:leading-[45px] xl:leading-[40px] sm:leading-[2rem] xs:leading-[1.5rem] leading-[2rem] subHeadingAnimation  " style={{ fontFamily: "PoppinsLight" }}>
                            <span>Our Exhibition Services</span>  <br />
                            <span>Include:</span>
                        </h3>
                    </div>
                    <div className="w-auto md:w-auto lg:w-auto   grid 2x:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-2 "
                        onMouseMove={handleCardMouseMove}
                        onMouseEnter={handleCardMouseEnter}
                        onMouseLeave={handleCardMouseLeave}
                        onFocus={handleCardMouseEnter}
                        onBlur={handleCardMouseLeave}
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                tabIndex={index}
                                className={`${service.color} lg:p-3 xl:p-4 grid-item  md:p-3 p-2  3xl:h-52 3xl:w-52 2xl:h-48 2xl:w-48 xl:w-36 xl:h-36 md:w-28 sm:w-28 gap-2  md:h-28 sm:h-28 w-[120px] h-[120px]  flex flex-col justify-between transition-all duration-300 hover:scale-105 cursor-pointer`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="card-inner w-full h-full flex flex-col justify-between gap-2">
                                    <div>
                                        <h3 className="text-white  5xl:text-4xl 2xl:text-[22px] xl:text-[16px] md:text-[12px]  text-[12px] font-medium leading-tight whitespace-pre-line  tracking-wide" style={{ fontFamily: "Montserrat-Regular" }}>
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className="flex md:justify-start 2xl:justify-start lg:justify-start justify-start">
                                        <img
                                            src={icon1}
                                            alt={service.title}
                                            className="icon-float w-8 h-8 5xl:w-22 5xl:h-22 2xl:w-15 2xl:h-15 xl:w-8 xl:h-8  md:w-8 md:h-8  opacity-90"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="w-full flex justify-end">
                        <div className='flex items-center gap-2 px-4 py-2 '>
                            <img src={Arrow} alt="Back Arrow" className="w-4 h-4" />
                            <button
                                onClick={() => navigate(-1)}
                                className="!text-[#6e7175] !bg-transparent"
                                style={{ fontFamily: "PoppinsRegular" }}
                            >
                                Back
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Exhibitions;