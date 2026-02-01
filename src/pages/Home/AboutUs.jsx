import React, { useEffect, useRef, useState } from "react";
import img1 from "../../../assets/Images/shutterstock_519831238.webp"
import img2 from "../../../assets/Images/shutterstock_1932401591.webp"

import img3 from "../../../assets/Images/shutterstock_2475886765.webp"
import img4 from "../../../assets/Images/shutterstock_1909640902.webp"
import img5 from "../../../assets/Images/shutterstock_2115699611.webp"
import img6 from "../../../assets/Images/shutterstock_2531243013.webp"
import Linesbg from "../../../assets/Images/Lines Bg.svg"
import WrapWords from "./WrapWords";
import WrapParagraphWords from "./WrapParagraphWords";
import ParagraphLineWrapper from "./ParagraphLineWrapper";
import '../../styles/AboutUs.css'
import Wave from "../Wave";

// import waveBg from "../../../assets/Images/wave-pattern.png"; // Replace with your wave background SVG/PNG

const AboutUs = React.memo(() => {
    const logoContainer = useRef(null)
    const pageLogo = useRef(null)
    const animate = useRef([false, false, false]);
    const [animate2, setAnimate2] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const timeoutRef = useRef(null)



    useEffect(() => {
        const handleScroll = () => {
            const target = document.querySelector('#targetAboutUs1');
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

                    const target2 = document.querySelector('#targetAboutUs2');
                    if (target2 && !animate.current[1]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect2 = target2.getBoundingClientRect();
                        // if (targetRect2.top < (vh / 2) || targetRect2.bottom < vh) {

                        animate.current[1] = true; // prevent running again
                        const temp = document.querySelector('#targetAboutUs2');

                        // Remove the animate class to reset animation
                        // temp.classList.remove('animate');
                        const spans = temp.querySelectorAll(':scope > span');

                        // Add the animate class back to trigger animation
                        temp.classList.add('animate');
                        spans.forEach((span, index) => span.style.animation = `fade-in-text 0.8s ${2 + (index * 0.1)}s forwards cubic-bezier(0.11, 0, 0.5, 0)`);
                        // }
                    }
                    const target3 = document.querySelector('#targetAboutUs3');
                    if (target3 && !animate.current[2]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect = target3.getBoundingClientRect();
                        // console.log('aboutus', targetRect.top, vh);
                        // if (targetRect.top < (vh / 2) || targetRect.bottom < vh) {
                        // timeoutRef = setTimeout(() => setTrigger(true), 13800)
                        timeoutRef.current = setTimeout(() => setTrigger(true), 3800)
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


        <div id="targetAboutUs1" className="relative flex flex-col min-h-auto bg-[#000000] text-white pt-28 max-w-screen overflow-hidden z-20">
            <Wave.Animated
                className="absolute inset-0 top-[2%] w-[110%]  z-0 pointer-events-none"
                speed={100}
                paused={false}
            />
            <span className="w-full flex flex-col justify-center items-center relative z-10 pt-">
                {/* <div className="relative w-full flex justify-center"> */}
                <div
                    className="relative z-0  w-full flex-col flex  items-center py-20 "
                    id="targetAboutUsSection"
                >

                    <div className="logo-container absolute  pt-10 flex items-center " ref={logoContainer}>
                        <h1 className="text-[#343031] !text-[80px] sm:!text-[120px] md:!text-[200px] xl:!text-[250px] !leading-[0.6] page-logo" ref={pageLogo}>About<br />us</h1>
                    </div>
                </div>
                {/* </div> */}
                <div className="w-full mt-10  z-10">

                    <h3 id='targetAboutUs2' className={`text-[28px] md:text-[60px] xl:text-[99px] font-normal leading-[3.5rem] xl:leading-[5.5rem] mx-auto  max-w-[12ch] subHeadingAnimation`} style={{ fontFamily: "PoppinsRegular" }}>
                        <span>A</span> <span>new</span> <span>kind</span><br />
                        <span>of</span> <span>company,</span><br />
                        <span>for</span> <span>a</span> <span>new</span><br />
                        <span>kind</span> <span>of</span> <span>world.</span>
                    </h3>
                </div>
            </span>

            <div id='targetAboutUs3' className="w-full lg:w-[597px] xl:w-[746px] grid-cols-1 flex  m-auto mt-16 md:grid-cols-2 gap-16 mt-5 text-white text-[12px] md:text-sm leading-[1.3rem] z-10" style={{ fontFamily: "Montserrat-Regular" }}>
                <span className="w-80">
                    <ParagraphLineWrapper
                        text='We are a new kind of marketing services company, invented fresh from a non-traditional perspective. Whether you need marketing advice, advertising creative, branding, media plans or social marketing, we provide all these services under one roof. The result is that you get unique and holistic solutions, designed to tackle your business challenges. It also means that instead of dealing with different companies, you have one agency that can do everything for you.'
                        text2="The people who work on your brand are all senior specialists in their disciplines. You can trust them to look out for your business, with their vast experience and thorough expertise. Our business head has over two decades of experience in Qatar, collaborating with leading organizations to manage their marketing needs."
                        trigger={trigger}
                    />
                </span>
                <span className="w-80">
                    <ParagraphLineWrapper
                        text='Our creative head has spent more than three decades with both global and independent agencies in different parts of the world. With over two hundred man-years of collective experience, our team has created hundreds of brand campaigns across different media, and masterminded several hundred prestigious events and exhibitions.'
                        text2="Brain Wave has successfully executed over a hundred projects in the past couple of years across industries-from automotive and banking to retail and travel. This work cuts across media channels and spans the entire range of outreach, from branding and digital media to events and videos."
                        trigger={trigger}
                    />
                </span>
            </div>

            {/* <div className="relative   flex justify-center items-center aspect-square bg-[#000000] text-white overflow-hidden my-32 mx-auto" style={{ width: '90vw', maxWidth: '960px' }}>
                
                <div className="relative  w-[98%] h-[98%] rounded-full aspect-square rotatingAnimation">
                 
                    <div className="absolute top-[31.75%] left-[18.50%] -translate-x-1/2 -translate-y-1/2 w-44 h-44 lg:w-50 lg:h-50 xl:w-64 xl:h-64 rounded-full overflow-hidden circularImage">
                        <img
                            src={img2}
                            alt="Creative Services"
                            className="w-full h-full scale-150 shadow-2xl rotatingAnimation2"
                        />
                    </div>
                    <div className="absolute top-0 left-[50%] -translate-x-1/2  w-40 h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 rounded-full overflow-hidden">
                        <img
                            src={img1}
                            alt="SEO & Branding"
                            className="w-full h-full scale-125 shadow-2xl rotatingAnimation2"
                        />
                    </div>
 
                    <div className="absolute top-[31.75%] right-[18.50%] translate-x-1/2 -translate-y-1/2 w-44 h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden">
                        <img
                            src={img3}
                            alt="Digital Advertising"
                            className="w-full h-full rounded-full object-cover shadow-2xl rotatingAnimation2"
                        />
                    </div>
                    <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 max-w-md text-center px-[90px] rotatingAnimation2">
                        <p className="text-gray-300 text-xs md:text-sm leading-[1.5] font-light" style={{ fontFamily: "Montserrat-Regular" }}>
                            We are a full-service marketing services agency with deep and comprehensive expertise
                            in strategy, branding, creative, digital, events and media services. We create world-class
                            advertising and online and offline brand experiences. We work with prestigious clients
                            across industries to grow their business and enhance their marketing effectiveness.
                        </p>
                    </div>
                    <div className="absolute bottom-[31.75%] left-[18.50%] -translate-x-1/2 translate-y-1/2   w-42 h-42 lg:w-54 lg:h-54  xl:w-64 xl:h-64 rounded-full overflow-hidden">
                        <img
                            src={img4}
                            alt="Social Media Marketing"
                            className="w-full h-full scale-150 shadow-2xl rotatingAnimation2"
                        />
                    </div>
 
                    <div className="absolute bottom-0 left-[50%] -translate-x-1/2 w-42 h-42 lg:w-54 lg:h-54  xl:w-64 xl:h-64 rounded-full overflow-hidden">
                        <img
                            src={img5}
                            alt="Strategic Partnerships"
                            className="w-full h-full shadow-2xl rotatingAnimation2"
                        />
                    </div>
 
                    <div className="absolute bottom-[31.75%] right-[18.50%] translate-x-1/2 translate-y-1/2 w-46 h-46 lg:w-58 lg:h-58  xl:w-64 xl:h-64 rounded-full overflow-hidden">
                        <img
                            src={img6}
                            alt="Event Management"
                            className="w-full h-full rounded-full object-cover shadow-2xl rotatingAnimation2"
                        />
                    </div>
                </div>
            </div>
           */}
        </div>
    );
})

export default React.memo(AboutUs);