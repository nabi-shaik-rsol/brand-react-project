import React, { useEffect, useRef, useState } from "react";
import Linesbg from '../../../assets/Images/Lines Bg.svg'
import image1 from "../../../assets/Images/psdgraphic.png"
import icon1 from "../../../assets/icons/HandShake@300x.png"
import icon2 from "../../../assets/icons/Teamup@300x.png"
import icon3 from "../../../assets/icons/Craft@300x.png"
import ParagraphLineWrapper from "./ParagraphLineWrapper";
import Wave from "../Wave";
import '../../styles/OurDifference.css'; // Import the new CSS

function OurDifference() {
    const logoContainer = useRef(null)
    const pageLogo = useRef(null)
    const animate = useRef([false, false, false, false]);
    const [trigger, setTrigger] = useState(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const target = document.querySelector('#targetOurDifference1');
            if (target && !animate.current[0]) {
                const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                const targetRect = target.getBoundingClientRect();
                if (targetRect.top < (vh / 3)) {
                    animate.current[0] = true;
                    if (logoContainer.current) {
                        logoContainer.current.classList.add('animate');
                    }
                    if (pageLogo.current) {
                        pageLogo.current.classList.add('animate');
                    }

                    const target2 = document.querySelector('#targetOurDifference2');
                    if (target2 && !animate.current[1]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect2 = target2.getBoundingClientRect();
                        animate.current[1] = true;
                        const temp = document.querySelector('#targetOurDifference2');
                        temp.classList.add('animate');
                        const spans = temp.querySelectorAll(':scope > span');
                        spans.forEach((span, index) => span.style.animation = `fade-in-text 0.8s ${2 + (index * 0.1)}s forwards cubic-bezier(0.11, 0, 0.5, 0)`);
                    }
                    
                    const target3 = document.querySelector('#targetOurDifference3');
                    if (target3 && !animate.current[2]) {
                        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        const targetRect = target3.getBoundingClientRect();
                        timeoutRef.current = setTimeout(() => setTrigger(true), 3300)
                        animate.current[2] = true;
                    }
                }
            }

            const target4 = document.querySelector('.dGridParent');
            if (target4 && !animate.current[3]) {
                const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                const targetRect = target4.getBoundingClientRect();
                if (targetRect.top < (vh / 2) || targetRect.bottom < vh) {
                    animate.current[3] = true;
                    const cards = target4.querySelectorAll(':scope > div');
                    cards.forEach((card, index) => {
                        card.style.animation = `fadeInUp 1s ease-out ${index * 0.2}s forwards`;
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
                    <div className="relative w-full flex flex-col justify-center items-center py-20">
                        <div className="logo-container" ref={logoContainer}>
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
                        <span>
                            <ParagraphLineWrapper
                                text='When you work with us, you will realize that our approach and processes are different from other agencies you may have worked with. Our fundamental uniqueness springs from the ABCs of the way we work.'
                                trigger={trigger}
                            />
                        </span>
                    </div>
                </div>
            </span>

            <div className="app-difference mt-20">
                <div class="dGridParent mx-auto md:w-[597px] xl:!w-[746px]">
                    <div className="dGrid borderAnimationOD overflow-hidden p-[1px] rounded-[15px]">
                        <div class="dCard relative">
                            <h2 className="text-[80px] absolute top-[4%] z-100 right-[18%] font-bold text-blue-400 leading-[1] text-end translate-x-[30px] -translate-y-[6px]" style={{ fontFamily: "PoppinsRegular" }}>A</h2>
                            <span class="icon">
                                <img src={icon1} alt="Attitude" />
                            </span>
                            <h4>Attitude</h4>
                            <p>
                                Our People are committed to what they do. They are confident in what they deliver. They act like your business really matters. They are determined to make your business succeed. They are responsible with your budgets.
                            </p>
                            <div class="shine"></div>
                            <div class="background">
                                <div class="tiles">
                                    <div class="tile tile-1"></div>
                                    <div class="tile tile-2"></div>
                                    <div class="tile tile-3"></div>
                                    <div class="tile tile-4"></div>
                                    <div class="tile tile-5"></div>
                                    <div class="tile tile-6"></div>
                                    <div class="tile tile-7"></div>
                                    <div class="tile tile-8"></div>
                                    <div class="tile tile-9"></div>
                                    <div class="tile tile-10"></div>
                                </div>
                                <div class="line line-1"></div>
                                <div class="line line-2"></div>
                                <div class="line line-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="dGrid borderAnimation2OD overflow-hidden p-[1px] rounded-[15px]">
                        <div class="dCard relative">
                            <h2 className="text-[80px] absolute top-[4%] z-100 right-[18%] font-bold text-blue-400 leading-[1] text-end translate-x-[30px] -translate-y-[6px]" style={{ fontFamily: "PoppinsRegular" }}>B</h2>
                           <span class="icon">
                                <img src={icon2} alt="Belief" />
                            </span>
                            <h4>Belief</h4>
                            <p>
                                Our people will present work to you only if they believe in it. That work is often the end result of days spent understanding your business and consumer. That work is always driven by insight about your markets.
                            </p>
                            <div class="shine"></div>
                            <div class="background">
                                <div class="tiles">
                                    <div class="tile tile-1"></div>
                                    <div class="tile tile-2"></div>
                                    <div class="tile tile-3"></div>
                                    <div class="tile tile-4"></div>
                                    <div class="tile tile-5"></div>
                                    <div class="tile tile-6"></div>
                                    <div class="tile tile-7"></div>
                                    <div class="tile tile-8"></div>
                                    <div class="tile tile-9"></div>
                                    <div class="tile tile-10"></div>
                                </div>
                                <div class="line line-1"></div>
                                <div class="line line-2"></div>
                                <div class="line line-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="dGrid borderAnimationOD overflow-hidden p-[1px] rounded-[15px]">
                        <div class="dCard relative">
                            <h2 className="text-[80px] absolute top-[4%] z-100 right-[18%] font-bold text-blue-400 leading-[1] text-end translate-x-[30px] -translate-y-[6px]" style={{ fontFamily: "PoppinsRegular" }}>C</h2>
                            <span class="icon">
                                <img src={icon3} alt="Craft" />
                            </span>
                            <h4>Craft</h4>
                            <p>
                                Excellent craftsmanship makes the difference between good work and great work. It is characterised by passion for the work and attention to detail. It is what you will find in the team that works on your business.
                            </p>
                            <div class="shine"></div>
                            <div class="background">
                                <div class="tiles">
                                    <div class="tile tile-1"></div>
                                    <div class="tile tile-2"></div>
                                    <div class="tile tile-3"></div>
                                    <div class="tile tile-4"></div>
                                    <div class="tile tile-5"></div>
                                    <div class="tile tile-6"></div>
                                    <div class="tile tile-7"></div>
                                    <div class="tile tile-8"></div>
                                    <div class="tile tile-9"></div>
                                    <div class="tile tile-10"></div>
                                </div>
                                <div class="line line-1"></div>
                                <div class="line line-2"></div>
                                <div class="line line-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurDifference;