

import React, { useEffect, useRef, useState } from "react";

import ParagraphLineWrapper from "./ParagraphLineWrapper";
import Wave from "../Wave";


function Footer() {
    const logoContainer = useRef(null)
    const pageLogo = useRef(null)
    const animate = useRef([false, false, false]);
    const [animate2, setAnimate2] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const target = document.querySelector('#targetContactUs1');
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

                    const target2 = document.querySelector('#targetContactUs2');
                    if (target2 && !animate.current[1]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect2 = target2.getBoundingClientRect();
                        // console.log('aboutus2', targetRect2.top, vh, targetRect2.top < (vh / 2) || targetRect2.bottom < vh);
                        // if (targetRect2.top < (vh / 2) || targetRect2.bottom < vh) {

                            animate.current[1] = true; // prevent running again
                            // setAnimate2(true)
                            const temp = document.querySelector('#targetContactUs2');

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
                    const target3 = document.querySelector('#targetContactUs3');
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
            if(timeoutRef.current)
                clearTimeout(timeoutRef.current)
        };
    }, []);
    return (


        <div id="targetContactUs1" className="relative flex flex-col min-h-auto bg-[#000000] text-white pt-32 pb-10 max-w-screen overflow-hidden z-20">

            <Wave.Animated
                className="absolute inset-0 top-[-0%] w-[110%]  z-0 pointer-events-none"
                speed={100}
                paused={false}
            />
            <span className="w-full flex flex-col justify-center items-center relative z-10">
                {/* <div className="relative w-full flex justify-center"> */}
                <div
                    className="relative w-full flex flex-col justify-center items-center py-10 "
                // style={{
                //     backgroundImage: `url(${Linesbg})`,
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: "120% auto",
                //     backgroundPosition: "center bottom",
                // }}
                >
                    <div
                        //    className="text-[80px] sm:text-[120px] md:text-[150px] xl:text-[188px] flex justify-center w-full text-[#343031] my-0 py-0 leading-[0.7] relative px-4 subhead"
                        //    style={{ fontFamily: "PoppinsRegular" }}
                        className="logo-container" ref={logoContainer}
                        id="targetOurContactUsSection"
                    >
                        <h1 className="!text-[80px] sm:!text-[120px] pt-4 md:!text-[180px] xl:!text-[200px] w-full !text-[#343031] !leading-[0.7] page-logo" ref={pageLogo}>
                            Contact
                            <br />
                            us
                        </h1>
                    </div>
                </div>
                {/* </div> */}
                <div className="w-full mt-10  z-10 m-auto ">
                    <h3 id="targetContactUs2" className="text-[28px] md:text-[60px] xl:text-[100px] font-700 leading-[3.5rem] xl:leading-[5.5rem]  md:w-[597px] xl:w-[820px] mx-auto subHeadingAnimation" style={{ fontFamily: "PoppinsRegular" }}>
                        <span>Say</span> <span>hello</span> <span>to</span> <span>your</span>
                        <span>new</span> <span>friends</span>
                    </h3>
                    <div id="targetContactUs3" className="md:w-[597px] xl:w-[816px]   mx-[92px] m-auto ml-0  mt-5 md:mx-auto text-gray-400 text-[12px] md:text-[14px] xl:text-[16px] leading-relaxed z-10" style={{ fontFamily: "Montserrat-Regular" }}>
                        <span >

                            {/* <p>
                                Take advantage of our strategic and creative skills. Forge new
                                <br />
                                successes for your brands. Get in touch with us now
                            </p> */}
                            <ParagraphLineWrapper
                                text='Take advantage of our strategic and creative skills. Forge new successes for your brands. Get in touch with us now'
                                trigger={trigger}
                            />

                        </span>

                    </div>
                    {/* <div className="flex gap-2 items-start mt-35 z-10 md:w-[597px] xl:w-[746px] mx-auto">
                        <a href="#" className="  bg-white rounded-full p-2">
                            <FaInstagram className="text-black" size={28} />
                        </a>
                        <a href="#" className="  bg-white rounded-full p-2">
                            <FaFacebookF className="text-black" size={28} />
                        </a>
                        <a href="#" className="  bg-white rounded-full p-2">
                            <FaXTwitter className="text-black" size={28} />
                        </a>
                        <a href="#" className="  bg-white rounded-full p-2">
                            <FaLinkedinIn className="text-black" size={28} />
                        </a>
                    </div>

                    <p className="mt-10 text-xs text-gray-400 z-10 mt-35 italic text-justify md:w-[597px] xl:w-[746px] mx-auto">
                        © Copyright 2025, Brain Wave, All rights reserved
                    </p> */}
                </div>


            </span>



        </div>
    );
}

export default Footer;
