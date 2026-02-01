import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


import Linesbg from '../../../assets/Images/Lines Bg.svg'

import Circles from "../../../assets/icons/PNG Circles@300x.png"
// import Circles from "../../../assets/icons/file.svg"
import ParagraphLineWrapper from "./ParagraphLineWrapper";
import LayerSVG from "./LayerSVG";
import AnimatedE from "./AnimatedE";
import AnimatedF from "./AnimatedF";
import AnimatedI from "./AnimatedI";
import Wave from "../Wave";
// import AnimatedCircles from "./AnimatedCircles"

function OurProcess() {
    const logoContainer = useRef(null)
    const pageLogo = useRef(null)
    const animate = useRef([false, false, false]);
    const [animate2, setAnimate2] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const [dStarted, setDStarted] = useState(false);
    const [eStarted, setEStarted] = useState(false)
    const [fStarted, setFStarted] = useState(false)
    const timeoutRef = useRef(null)

    // Motion variants for description boxes
    const descVariant = {
        hidden: (c) => ({
            opacity: 0,
            x: c?.dir === "left" ? -28 : c?.dir === "right" ? 28 : 0,
            y: 8,
        }),
        visible: (c) => ({
            opacity: [0, 0.5, 1], // 0% → 50% → 100%
            x: 0,
            y: 0,
            transition: {
                duration: 3,         // total 3s
                ease: "easeInOut",   // smooth curve
                times: [0, 0.5, 1],  // keyframe timing
                delay: (c?.i || 0) * 0.12,
            },
        }),
    };






    useEffect(() => {
        const handleScroll = () => {
            const target = document.querySelector('#targetOurProcess1');
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

                    const target2 = document.querySelector('#targetOurProcess2');
                    if (target2 && !animate.current[1]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect2 = target2.getBoundingClientRect();
                        // console.log('aboutus2', targetRect2.top, vh, targetRect2.top < (vh / 2) || targetRect2.bottom < vh);
                        // if (targetRect2.top < (vh / 2) || targetRect2.bottom < vh) {

                        animate.current[1] = true; // prevent running again
                        // setAnimate2(true)
                        const temp = document.querySelector('#targetOurProcess2');

                        // Remove the animate class to reset animation
                        // temp.classList.remove('animate');
                        const spans = temp.querySelectorAll(':scope > span');
                        // spans.forEach(span => span.classList.remove('animate'));

                        // Force a reflow to ensure the browser notices the change
                        // void temp.offsetWidth;

                        // Add the animate class back to trigger animation
                        temp.classList.add('animate');
                        spans.forEach((span, index) => span.style.animation = `fade-in-text 0.8s ${0.5 + (index * 0.1)}s forwards cubic-bezier(0.11, 0, 0.5, 0)`);
                        // const spans = temp.querySelectorAll(':scope > span');
                        // spans.forEach((span) => {
                        // span.classList.add('animate');
                        // });
                        // }
                    }
                    const target3 = document.querySelector('#targetOurProcess3');
                    if (target3 && !animate.current[2]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect = target3.getBoundingClientRect();
                        // console.log('aboutus', targetRect.top, vh);
                        // if (targetRect.top < (vh / 2) || targetRect.bottom < vh) {
                        timeoutRef = setTimeout(() => setTrigger(true), 1500)
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


        <div id="targetOurProcess1" className="relative flex flex-col items-center overflow-hidden min-h-auto bg-[#000000] text-white ">
            <Wave.Animated
                className="absolute inset-0 top-[-2%] w-[110%]  z-0 pointer-events-none"
                speed={100}
                paused={false}
            />

            <span className="w-full flex flex-col justify-center items-center relative z-10">
                <div className="relative w-full flex justify-center">
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
                            // className="text-[80px] sm:text-[120px] md:text-[150px] xl:text-[188px] flex justify-center w-full text-[#343031] my-0 py-0 leading-[0.8] relative px-4 subhead"
                            // style={{ fontFamily: "PoppinsRegular" }}
                            className="logo-container" ref={logoContainer}
                        >
                            <h1 className="!text-[80px] pt-4 sm:!text-[120px] md:!text-[150px] xl:!text-[188px] w-full text-[#343031] my-0 py-0 !leading-[0.65] page-logo" ref={pageLogo}>
                                Our
                                <br />
                                process
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-full text-justify mt-10  z-10 m-auto ">
                    <h3 id="targetOurProcess2" className="text-[28px] md:text-[60px] xl:text-[100px] font-700 leading-[3.5rem] xl:leading-[5.5rem] md:w-[597px] xl:w-[746px] mx-auto subHeadingAnimation" style={{ fontFamily: "PoppinsRegular" }}>
                        <span>DEFI</span> <span>the</span> <span>limits</span>
                    </h3>
                    <div id="targetOurProcess3" className=" md:w-[597px] xl:w-[746px]   mx-[92px] m-auto ml-0  mt-5 md:mx-auto text-gray-300 text-[12px] md:text-[14px] xl:text-[14px] leading-relaxed z-10" style={{ fontFamily: "Montserrat-Regular" }}>
                        <span className="max-w-5xl" >

                            {/* <p className="">

                                At Brain Wave, we follow a process called the DEFI System, which is designed to take us from insight to innovation in 4 steps
                            </p> */}
                            <ParagraphLineWrapper
                                text='At Brain Wave, we follow a process called the DEFI System, which is designed to take us from insight to innovation in 4 steps. The DEFI System is a trusted process that helps our team make a difference to your business and contributes to both immediate and long-term success.'
                                trigger={trigger}
                            />
                        </span>

                    </div>
                </div>


            </span>
            <div className="relative mt-20 w-[500px] md:w-[700px] xl:w-[850px] ">
                {/* Circles background */}
                <img src={Circles} alt="DEFI Circles" className="w-full h-auto " />
                {/* <LayerSVG className="bg-transparent"/> */}
                {/* <AnimatedCircles/> */}

                {/* Letters Overlay */}
                {/* <div className="absolute top-[36%] left-[18%] text-[50px] md:text-[80px] xl:text-[100px] text-[#7175a3] font-bold"
                    style={{ fontFamily: "Monoton-Regular" }}>D</div> */}
                <div className="absolute top-[26%] left-[7%] "
                >
                    <LayerSVG onStart={() => setDStarted(true)} />
                </div>
                {/* <div className="absolute top-[12%] left-[46%] text-[50px] md:text-[80px] xl:text-[100px]   text-[#00a4a3] font-bold"
                    style={{ fontFamily: "Monoton-Regular" }}>E</div> */}
                <div className="absolute top-[0%] left-[33%] "
                >
                    <AnimatedE onStart={() => setEStarted(true)} />
                </div>
                {/* <div className="absolute top-[36%] right-[18%] text-[50px] md:text-[80px] xl:text-[100px] text-[#00c1e8] font-bold"
                    style={{ fontFamily: "Monoton-Regular" }}>F</div> */}
                <div className="absolute top-[26%] left-[60%] "
                >
                    <AnimatedF onStart={() => setFStarted(true)} />
                </div>
                {/* <div className="absolute bottom-[22%] left-[47%] text-[50px] md:text-[80px] xl:text-[100px] text-[#0074b9] font-bold"
                    style={{ fontFamily: "Monoton-Regular" }}>I</div> */}
                <div className="absolute bottom-[2%] left-[31%] "
                >
                    <AnimatedI />
                </div>

                {/* Descriptions */}
                <motion.div
                    className="absolute left-0 top-[7%] w-[155px] text-gray-300 text-[12px] md:text-[14px] xl:text-[16px] leading-[1.5rem]"
                    style={{ fontFamily: "Montserrat-Regular" }}
                    variants={descVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.45 }}
                    custom={{ dir: 'left', i: 3 }}
                >
                    <span style={{ fontFamily: "PoppinsLight", color: "white", fontSize: "18px" }}>
                        <span style={{ fontFamily: "PoppinsSemiBold", }}>D</span>iscover:
                    </span>
                    <br />
                    study the brand,
                    the consumer and
                    the market as
                    comprehensively as
                    possible
                </motion.div>

                <motion.div className="absolute right-0 top-[7%] w-[155px] text-gray-300 text-[12px] md:text-[14px] xl:text-[16px] leading-[1.5rem]" style={{ fontFamily: "Montserrat-Regular" }}
                    variants={descVariant}
                    initial="hidden"
                    animate={eStarted ? "visible" : "hidden"}
                >
                    <span style={{ fontFamily: "PoppinsLight", color: "white", fontSize: "18px" }}>
                        <span style={{ fontFamily: "PoppinsSemiBold" }}>E</span>stablish:
                    </span>
                    <br />
                    determine the
                    problem marketing
                    needs to solve, and
                    arrive at relevant
                    insights

                </motion.div>

                <motion.div className="absolute right-[0%] bottom-[6%] text-gray-300 w-[155px] text-[12px] md:text-[14px] xl:text-[16px] leading-[1.5rem]" style={{ fontFamily: "Montserrat-Regular" }}
                    variants={descVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.45 }}
                    custom={{ dir: 'left', i: 3 }}
                >
                    <span style={{ fontFamily: "PoppinsLight", color: "white", fontSize: "18px" }}>
                        <span style={{ fontFamily: "PoppinsSemiBold" }}>F</span>ocus:
                    </span>
                    <br />
                    execute winning
                    ideas meticulously,
                    unifying the
                    message across
                    channels for
                    maximum impact

                </motion.div>

                <motion.div className="absolute left-0 bottom-[6%] text-gray-300 w-[155px] text-[12px] md:text-[14px] xl:text-[16px] leading-[1.5rem]" style={{ fontFamily: "Montserrat-Regular" }}
                    variants={descVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.45 }}
                    custom={{ dir: 'left', i: 3 }}
                >
                    <span style={{ fontFamily: "PoppinsLight", color: "white", fontSize: "18px" }}>
                        <span style={{ fontFamily: "PoppinsSemiBold" }}>I</span>nnovate:
                    </span>
                    <br />
                    execute winning
                    ideas meticulously,
                    unifying the
                    message across
                    channels for
                    maximum impact

                </motion.div>
                <div className="max-w-5xl   mx-[92px] m-auto ml-0  mt-5 text-gray-300 text-[12px] md:text-[14px] xl:text-[16px] leading-relaxed z-10" style={{ fontFamily: "Montserrat-Regular" }}>
                    {/* <span >

                        <p>

                            The DEFI System is a trusted process that helps our team make a
                            <br />
                            difference to your business and contributes to both immediate and
                            <br />
                            long-term success

                        </p>

                    </span> */}

                </div>
            </div>

            <div>
            </div>


        </div>
    );
}

export default OurProcess;
