

import React, { useEffect, useRef, useState } from "react";
import apple from '../../../assets/BWLogos/apple.png'
import Dohabank from '../../../assets/BWLogos/Dohabank.png'
import EducnaboveAll from '../../../assets/BWLogos/EducnaboveAll.png'
import GulfBank from '../../../assets/BWLogos/GulfBank.png'
import Mannai from '../../../assets/BWLogos/Mannai.svg'
import MasterCard from '../../../assets/BWLogos/MasterCard-Logo-2016.png'
import Nebras from '../../../assets/BWLogos/Nebras.jpg'
import QatarAirways from '../../../assets/BWLogos/Qatar_Airways_Logo.png'
import QatarFounda from '../../../assets/BWLogos/qatarfoundation.png'
import qchem from '../../../assets/BWLogos/QChem.png'
import qnb from '../../../assets/BWLogos/QNBK.png'
import vcu from '../../../assets/BWLogos/VCU.png'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import Linesbg from '../../../assets/Images/Lines Bg.svg'
import ParagraphLineWrapper from "./ParagraphLineWrapper";

import Advertising1 from '../../../assets/Images/advertising1.webp'
import Advertising2 from '../../../assets/Images/advertising2.webp'
import Advertising3 from '../../../assets/Images/advertising3.webp'
import Brand from '../../../assets/Images/branding.webp'
import Wave from "../Wave";



function OurWorks() {
    const logoContainer = useRef(null)
    const pageLogo = useRef(null)
    const animate = useRef([false, false, false]);
    const [animate2, setAnimate2] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const target = document.querySelector('#targetOurWorks1');
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

                    const target2 = document.querySelector('#targetOurWorks2');
                    if (target2 && !animate.current[1]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect2 = target2.getBoundingClientRect();
                        // console.log('aboutus2', targetRect2.top, vh, targetRect2.top < (vh / 2) || targetRect2.bottom < vh);
                        // if (targetRect2.top < (vh / 2) || targetRect2.bottom < vh) {

                            animate.current[1] = true; // prevent running again
                            // setAnimate2(true)
                            const temp = document.querySelector('#targetOurWorks2');

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
                    const target3 = document.querySelector('#targetAboutUs3');
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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (


        <div id='targetOurWorks1' className="relative flex flex-col min-h-auto bg-[#000000] text-white py-32 max-w-screen overflow-hidden z-20">
            <Wave.Animated
                className="absolute inset-0 top-[-1%] w-[110%]  z-0 pointer-events-none"
                speed={100}
                paused={false}
            />

            <span className="w-full flex flex-col justify-center items-center relative z-10">
                {/* <div className="relative w-full flex justify-center"> */}
                <div
                    className="relative z-0  w-full flex-col flex  items-center py-20 "
                // style={{
                //     backgroundImage: `url(${Linesbg})`,
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: "120% auto",
                //     backgroundPosition: "center bottom",
                // }}
                >
                    <div
                        // className="text-[80px] sm:text-[120px] md:text-[198px] xl:text-[248px] flex justify-center w-full text-[#343031] my-0 py-0 leading-[0.8] relative px-4 subhead"
                        // style={{ fontFamily: "PoppinsRegular" }}
                        className="logo-container" ref={logoContainer}
                    >
                        <h1 className="!text-[80px] sm:!text-[120px] md:!text-[198px] xl:!text-[248px] flex justify-center w-full text-[#343031] !leading-[0.8] page-logo" ref={pageLogo}>
                            Our
                            <br />
                            Works
                        </h1>
                    </div>
                </div>
                {/* </div> */}
                <div className="w-full mt-10 justify-center z-10 m-auto">
                    <h3 id="targetOurWorks2" className="text-[28px] md:text-[60px] xl:text-[100px] font-700 leading-[3.5rem] xl:leading-[6.2rem] mx-auto w-[597px] xl:w-[746px] subHeadingAnimation" style={{ fontFamily: "PoppinsRegular" }}>
                        <span>Lorem</span> <span>ipsum</span>
                        <br />
                        <span>dolor</span> <span>sit</span> <span>amet</span>
                    </h3>
                    <div id="targetOurWorks3" className="w-auto mx-auto md:w-[597px] xl:w-[746px] mt-5 text-gray-400 text-[12px] md:text-[14px] xl:text-[16px] leading-relaxed z-10" style={{ fontFamily: "Montserrat-Regular" }}>
                        <span >

                            {/* <p>

                                Here is a look at our most recent successes in helping clients achieve 
                                <br />
                               their business goals. We deliver solutions across industries and are perfectly 
                                <br/> positioned as your ideal marketing services partner in Qatar.

                            </p> */}
                            <ParagraphLineWrapper
                                text='Here is a look at our most recent successes in helping clients achieve their business goals. We deliver solutions across industries and are perfectly positioned as your ideal marketing services partner in Qatar.'
                                trigger={trigger}
                            />

                        </span>

                    </div>
                </div>


            </span>
            <div className="w-[98vw]  mx-auto mt-16 relative z-10 overflow-hidden">
                <div className="flex gap-16 px-16 overflow-auto scrollbar-hide ">
                    <div className="relative h-[calc(50vh)] min-w-[calc((50vh)*1.6)] rounded-[5vh] overflow-hidden">
                        <img className="h-full w-full overflow-hidden transition-transform duration-300 hover:scale-110" src={Advertising1} alt="" srcset="" />
                        <p className="absolute left-4 top-4 text-white bg-[#171717] w-fit py-2 px-6 rounded-full">Advertising</p>
                    </div>
                    <div className="relative h-[calc(50vh)] min-w-[calc((50vh)*1.6)] rounded-[5vh] overflow-hidden">
                        <img className="h-full w-full overflow-hidden transition-transform duration-300 hover:scale-110" src={Advertising2} alt="" srcset="" />
                        <p className="absolute left-4 top-4 text-white bg-[#171717] w-fit py-2 px-6 rounded-full">Advertising</p>
                    </div>
                    <div className="relative h-[calc(50vh)] min-w-[calc((50vh)*1.6)] rounded-[5vh] overflow-hidden">
                        <img className="h-full w-full overflow-hidden transition-transform duration-300 hover:scale-110" src={Advertising3} alt="" srcset="" />
                        <p className="absolute left-4 top-4 text-white bg-[#171717] w-fit py-2 px-6 rounded-full">Advertising</p>
                    </div>
                    <div className="relative h-[calc(50vh)] min-w-[calc((50vh)*1.6)] rounded-[5vh] overflow-hidden">
                        <img className="h-full w-full overflow-hidden transition-transform duration-300 hover:scale-110" src={Brand} alt="" srcset="" />
                        <p className="absolute left-4 top-4 text-white bg-[#171717] w-fit py-2 px-6 rounded-full">Advertising</p>
                    </div>
                </div>
            </div>
            {/* <div className="max-w-screen  mx-auto mt-16 relative z-10">
                <div className="grid grid-cols-3 gap-6 md:gap-8 justify-items-center md:gap-y-[64px] mx-auto md:w-[597px] xl:w-[746px]">
                    <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 md:h-[120px] w-[200px]">
                        <img src={Dohabank} alt="Doha Bank" className="max-w-[150%] w-[100%] max-h-full object-cover" />
                    </div>
                    <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 md:h-[120px] w-[200px]">
                        <img src={GulfBank} alt="Qatar Airways" className="max-w-[150%] w-[100%] max-h-full object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 md:h-[120px] w-[200px]">
                        <img src={MasterCard} alt="Mastercard" className="max-w-[150%] w-[100%] max-h-full object-contain" />
                    </div>
 
                    <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 md:h-[120px] w-[200px]">
                        <img src={qnb} alt="QNB" className="max-w-[150%] w-[100%] max-h-full object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 md:h-[120px] w-[200px]">
                        <img src={apple} alt="Apple" className="max-w-[150%] w-[100%] max-h-full object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 md:h-[120px] w-[200px]">
                        <img src={Mannai} alt="Maersk Training" className="max-w-[150%] w-[100%] max-h-full object-contain" />
                    </div>
 
                    <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 md:h-[120px] w-[200px]">
                        <img src={QatarFounda} alt="Client Logo" className="max-w-[150%] w-[100%] max-h-full object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 md:h-[120px] w-[200px]">
                        <img src={EducnaboveAll} alt="Client Logo" className="max-w-[150%] w-[100%] max-h-full object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 md:h-[120px] w-[200px]">
                        <img src={vcu} alt="VCU" className="max-w-[150%] w-[100%] max-h-full object-contain" />
                    </div>
 
                </div>
 
                <div className="absolute -left-[10vw] top-1/2 transform -translate-y-1/2 -translate-x-4 bg-[#000000]">
                    <span className=" text-[30px] text-white bg-[#000000] ">
                        <SlArrowLeft />
                    </span>
                </div>
                <div className="absolute -right-[10vw] top-1/2 transform -translate-y-1/2 bg-[#000000] translate-x-4">
                    <span className=" text-[30px] text-white bg-[#000000]">
                        <SlArrowRight />
                    </span>
                </div>
            </div> */}


        </div>
    );
}

export default OurWorks;
