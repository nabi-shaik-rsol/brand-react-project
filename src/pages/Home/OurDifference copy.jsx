

import React, { useEffect, useRef, useState } from "react";


import Linesbg from '../../../assets/Images/Lines Bg.svg'
import image1 from "../../../assets/Images/psdgraphic.png"

import icon1 from "../../../assets/icons/HandShake@300x.png"
import icon2 from "../../../assets/icons/Teamup@300x.png"
import icon3 from "../../../assets/icons/Craft@300x.png"
import ParagraphLineWrapper from "./ParagraphLineWrapper";
import Wave from "../Wave";



function OurDifference() {
    const logoContainer = useRef(null)
    const pageLogo = useRef(null)
    const animate = useRef([false, false, false]);
    const [animate2, setAnimate2] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const target = document.querySelector('#targetOurDifference1');
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

                    const target2 = document.querySelector('#targetOurDifference2');
                    if (target2 && !animate.current[1]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect2 = target2.getBoundingClientRect();
                        // console.log('aboutus2', targetRect2.top, vh, targetRect2.top < (vh / 2) || targetRect2.bottom < vh);
                        // if (targetRect2.top < (vh / 2) || targetRect2.bottom < vh) {

                            animate.current[1] = true; // prevent running again
                            // setAnimate2(true)
                            const temp = document.querySelector('#targetOurDifference2');

                            // Remove the animate class to reset animation
                            // temp.classList.remove('animate');
                            const spans = temp.querySelectorAll(':scope > span');
                            // spans.forEach(span => span.classList.remove('animate'));

                            // Force a reflow to ensure the browser notices the change
                            // void temp.offsetWidth;

                            // Add the animate class back to trigger animation
                            temp.classList.add('animate');
                            spans.forEach((span, index) => span.style.animation = `fade-in-text 0.8s ${2 + (index * 0.1)}s forwards cubic-bezier(0.11, 0, 0.5, 0)`);
                            // const spans = temp.querySelectorAll(':scope > span');
                            // spans.forEach((span) => {
                            // span.classList.add('animate');
                            // });
                        // }
                    }
                    const target3 = document.querySelector('#targetOurDifference3');
                    if (target3 && !animate.current[2]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect = target3.getBoundingClientRect();
                        // console.log('aboutus', targetRect.top, vh);
                        // if (targetRect.top < (vh / 2) || targetRect.bottom < vh) {
                            timeoutRef.current = setTimeout(() => setTrigger(true), 3300)
                            animate.current[2] = true; // prevent running again
                        // }
                    }
                }
            }

            const target4 = document.querySelector('#targetOurDifference4');
            if (target4 && !animate.current[4]) {
                const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                const targetRect = target4.getBoundingClientRect();
                // console.log('aboutus2', targetRect2.top, vh, targetRect2.top < (vh / 2) || targetRect2.bottom < vh);
                if (targetRect.top < (vh / 2) || targetRect.bottom < vh) {

                    animate.current[3] = true; // prevent running again
                    const cards = target4.querySelectorAll(':scope > div');
                    cards.forEach((card, index) => {
                        card.style.animation = `fadeInUp 1s ease-out ${2 * (index * 1)}s forwards`
                        const child = card.firstElementChild;
                        const grandchild = child?.firstElementChild;

                        if (grandchild) {
                            grandchild.style.animation = `hFull 1s ease-out ${2 * (index * 1) + 1}s forwards`;
                        }
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if(timeoutRef.current)
                clearTimeout(timeoutRef.current)
        };
    }, []);
    return (


        <div id="targetOurDifference1" className="relative flex flex-col min-h-auto bg-[#000000] text-white pt-32 max-w-screen overflow-hidden z-20">

            <Wave.Animated
                className="absolute inset-0 top-[-1%] w-[110%]  z-0 pointer-events-none"
                speed={100}
                paused={false}
            />
            <span className="w-full flex flex-col justify-center items-center relative z-10">
                <div className="relative w-full flex justify-center">
                    <div
                        className="relative w-full flex flex-col justify-center items-center py-20"
                    // style={{
                    //     backgroundImage: `url(${Linesbg})`,
                    //     backgroundRepeat: "no-repeat",
                    //     backgroundSize: "120% auto",
                    //     backgroundPosition: "center bottom",
                    // }}
                    >
                        <div
                            // className="text-[80px] sm:text-[120px] md:text-[116px] xl:text-[148px] flex justify-center w-full text-[#343031] my-0 py-0 leading-[0.8] relative px-4 subhead"
                            // style={{ fontFamily: "PoppinsRegular" }}
                            className="logo-container" ref={logoContainer}
                        >
                            <h1 className="!text-[80px] sm:!text-[120px] md:!text-[116px] xl:!text-[145px] w-full !text-[#343031] !leading-[0.85] page-logo" ref={pageLogo}>
                                Our
                                <br />
                                Difference
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-full text-justify mt-10  z-10 m-auto " >
                    <h3 id='targetOurDifference2' className="text-[28px] md:text-[60px] xl:text-[100px] font-700 leading-[3.5rem] xl:leading-[5.5rem] md:w-[597px] xl:w-[746px] mx-auto subHeadingAnimation" style={{ fontFamily: "PoppinsRegular" }}>
                        <span>It</span> <span>all</span> <span>starts</span>
                        <br />
                        <span>with</span> <span>the</span> <span>ABCs</span>
                    </h3>
                    <div id="targetOurDifference3" className="md:w-[597px] xl:w-[746px]  text-justify m-auto ml-[0px] mx-[92px] md:mx-auto  mt-5 text-white text-[12px] md:text-sm leading-relaxed z-10" style={{ fontFamily: "Montserrat-Regular" }}>
                        <span >

                            {/* <p>
                                When you work with us, you will realize that our approach and processes are different from
                                other agencies you may have worked with. Our fundamental uniqueness springs from the
                                ABCs of the way we work.
                            </p> */}
                            <ParagraphLineWrapper
                                text='When you work with us, you will realize that our approach and processes are different from other agencies you may have worked with. Our fundamental uniqueness springs from the ABCs of the way we work.'
                                trigger={trigger}
                            />
                        </span>

                    </div>
                </div>


            </span>

            <div className="w-full flex justify-center items-center my-20 px-4">
                {/* <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 lg:gap-6 xl:gap-[60px] w-full md:w-[597px] xl:w-[746px] mx-auto"> */}
                <div id="targetOurDifference4" className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 lg:gap-6 xl:gap-[55px] w-full md:w-[597px] lg:w-[740px] mx-auto overflow-visible">

                    <div className="flex-1 border border-blue-400 p-[5px] rounded-tl-[55px] overflow-hidden relative borderAnimation opacity-0">

                        <div className="border border-blue-400 rounded-tl-[50px] w-[280px] lg:w-auto h-[373px] relative bg-[#000000]">
                            <div className="rounded-tl-[50px] px-7 pt-0 pb-7  w-[280px] lg:w-auto h-[56px] relative overflow-hidden z-10 bg-[#000000]">
                                <h2 className="text-[70px] font-bold text-blue-400 leading-[1] text-end translate-x-[30px] -translate-y-[6px]" style={{ fontFamily: "CemenRegular" }}>A</h2>
                                <div className="-mt-5">
                                    <div className="w-12 h-12 mb-2">
                                        <img
                                            src={icon1}
                                            alt="..."
                                            className="w-12 h-12 object-contain"
                                        />
                                    </div>
                                    <h3 className="font-medium text-white" style={{ fontFamily: "PoppinsRegular" }}>Attitude</h3>
                                </div>
                                <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "Montserrat-Regular" }}>
                                    Our People are committed to what they do. They are confident in what they deliver. They act like you business really matters. They are determined to make your business succeed. They are responsible with your budgets.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 border border-blue-400 p-[5px] rounded-tl-[55px] overflow-hidden relative borderAnimation2 opacity-0">

                        <div className="border border-blue-400 rounded-tl-[50px] w-[280px] lg:w-auto h-[373px] relative bg-[#000000]">
                            <div className="rounded-tl-[50px] px-7 pt-0 pb-7  w-[280px] lg:w-auto h-[56px] relative overflow-hidden z-10 bg-[#000000]">
                                <h2 className="text-[70px] font-bold text-blue-400 leading-[1] text-end translate-x-[30px] -translate-y-[6px]" style={{ fontFamily: "CemenRegular" }}>B</h2>
                                <div className="-mt-5">
                                    <div className="w-12 h-12 mb-2">
                                        <img
                                            src={icon2}
                                            alt="..."
                                            className="w-12 h-12 object-contain"
                                        />
                                    </div>
                                    <h3 className="font-medium text-white" style={{ fontFamily: "PoppinsRegular" }}>Belief</h3>
                                </div>
                                <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "Montserrat-Regular" }}>
                                    Our people will present work to you only if they believe in it. That work is often the end result of days spent understanding you business and consumer. That work is always driven by insight about your markets.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 border border-blue-400 p-[5px] rounded-tl-[55px] overflow-hidden relative borderAnimation opacity-0">

                        <div className="border border-blue-400 rounded-tl-[50px] w-[280px] lg:w-auto h-[373px] relative bg-[#000000]">
                            <div className="rounded-tl-[50px] px-7 pt-0 pb-7  w-[280px] lg:w-auto h-[56px] relative overflow-hidden z-10 bg-[#000000]">
                                <h2 className="text-[70px] font-bold text-blue-400 leading-[1] text-end translate-x-[30px] -translate-y-[6px]" style={{ fontFamily: "CemenRegular" }}>C</h2>
                                <div className="-mt-5">
                                    <div className="w-12 h-12 mb-2">
                                        <img
                                            src={icon3}
                                            alt="..."
                                            className="w-12 h-12 object-contain"
                                        />
                                    </div>
                                    <h3 className="font-medium text-white" style={{ fontFamily: "PoppinsRegular" }}>Craft</h3>
                                </div>
                                <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "Montserrat-Regular" }}>
                                    Excellent craftsmanship makes the difference between good work and great work. It is characterised by passion for the work and attention to detail. It is what you will find in the team that works on your business.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex-1 border border-blue-400 p-[5px] rounded-tl-[55px] overflow-hidden relative borderAnimation2 opacity-0">

                        <div className="border border-blue-400 rounded-tl-[50px] px-8 pt-0 pb-6  w-[280px] lg:w-auto h-full relative overflow-hidden z-10 bg-[#000000]">
                            <div className="mt-14">
                                <div className="w-12 h-12 mb-[2px]">
                                    <img
                                        src={icon2}
                                        alt="..."
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div className="absolute flex items-center gap-3 mb-2 -top-1 -right-[1px]">
                                    <h2 className="text-[70px] font-bold text-blue-400 leading-[4.5rem]" style={{ fontFamily: "CemenRegular" }}>B</h2>
                                </div>
                                <h3 className="font-medium text-white" style={{ fontFamily: "PoppinsRegular" }}>Belief</h3>
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "Montserrat-Regular" }}>
                                Our people will present work to you only if they believe in it. That work is often the end result of days spent understanding you business and consumer. That work is always driven by insight about your markets.
                            </p>
                        </div>
                    </div> */}

                    {/* <div className="flex-1 border border-blue-400 p-[5px] rounded-tl-[55px] overflow-hidden relative borderAnimation opacity-0">

                        <div className="border border-blue-400 rounded-tl-[50px] px-8 pt-0 pb-6  w-[280px] lg:w-auto h-full relative overflow-hidden z-10 bg-[#000000]">
                            <div className="mt-14">
                                <div className="w-12 h-12 mb-[2px]">
                                    <img
                                        src={icon3}
                                        alt="..."
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div className="absolute flex items-center gap-3 mb-2 -top-1 -right-[1px]">
                                    <h2 className="text-[70px] font-bold text-blue-400 leading-[4.5rem]" style={{ fontFamily: "CemenRegular" }}>C</h2>
                                </div>
                                <h3 className="font-medium text-white" style={{ fontFamily: "PoppinsRegular" }}>Craft</h3>
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "Montserrat-Regular" }}>
                                Excellent craftsmanship makes the difference between good work and great work. It is characterised by passion for the work and attention to detail. It is what you will find in the team that works on your business.
                            </p>
                        </div>
                    </div> */}

                </div>
            </div>


        </div>
    );
}

export default OurDifference;

