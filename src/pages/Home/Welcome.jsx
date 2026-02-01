import React, { useEffect, useRef, useState } from 'react'
import AnimatedText from './AnimatedText';

const Welcome = () => {
    const ref = useRef(null);

    const values = ['Media Buying (Online & Offline/OOH)', 'Event planning and production', 'Exhibition concepts and production', 'Digital Marketing', 'Motion Graphics and Animation', 'Visual Merchandising', 'Product Packaging and Graphics']
    const [typewriterAnimation, setTypewriterAnimation] = useState(values[0])
    const typewriterAnimationRef = useRef(values[0]?.split("").length)
    const indexRef = useRef(0)
    const wait = useRef(false);
    // const [prev, setPrev] = useState('')
    const incrementRef = useRef(false)
    useEffect(() => {
        const timeoutRef = { current: null };
        const intervalRef = { current: null };
        const timeoutFunc = () => {
            wait.current = true
            timeoutRef.current = setTimeout(() => wait.current = false, 2000)
        }
        timeoutFunc()
        intervalRef.current = setInterval(() => {
            // setPrev(typewriterAnimation)
            if (!wait.current) {
                if (incrementRef.current && values[indexRef.current]?.length > typewriterAnimationRef.current) {
                    // console.log('true is true', indexRef.current)
                    if (values[indexRef.current]?.length === typewriterAnimationRef.current + 1)
                        incrementRef.current = false
                    typewriterAnimationRef.current = typewriterAnimationRef.current + 1
                    if (typewriterAnimationRef.current === values[indexRef.current]?.length) {
                        timeoutFunc()
                    }
                } else if (!incrementRef.current && typewriterAnimationRef.current > 0) {
                    const temp = typewriterAnimationRef.current === 1
                    // console.log('index', indexRef.current, typewriterAnimationRef.current === 1, typewriterAnimationRef.current)
                    if (temp) {
                        incrementRef.current = true
                        // console.log('index')
                        if (indexRef.current !== values?.length - 1 && indexRef.current < values?.length - 1)
                            indexRef.current = indexRef.current + 1
                        else
                            indexRef.current = 0
                    }
                    // setTypewriterAnimation(prev => prev - 1)
                    typewriterAnimationRef.current = typewriterAnimationRef.current - 1
                    // if(temp) {
                    //     if(index !== values?.length - 1)
                    //         setIndex(prev => prev + 1)
                    //     else
                    //         setIndex(0)
                    //     console.log('index')
                    // } 
                }
                setTypewriterAnimation(values[indexRef.current]?.substring(0, typewriterAnimationRef.current))
                // console.log(values[indexRef.current]?.substring(0, typewriterAnimationRef.current), typewriterAnimation.current)
            }
        }, 100)
        return () => {
            clearInterval(intervalRef.current)
            clearTimeout(timeoutRef.current)
        }
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                        // Scroll this component to the top of the viewport
                        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                });
            },
            { threshold: [0.1] } // trigger when 10% is visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);
    return (
        <div ref={ref} className="flex flex-col justify-center min-h-auto bg-[#000000] text-white h-[108vh] max-w-screen overflow-hidden sticky -top-10 -z-20">

            <div className="text-center relative z-10" >

                {/* <p className=" leading-[120px]" style={{fontFamily: "PoppinsRegular"}}>Welcome */}
                <p className="text-[48px] md:text-[80px] xl:text-[125px] title" style={{ fontFamily: "Montserrat-Medium" }}>Welcome
                    <div class="aurora">
                        <div class="aurora__item"></div>
                        <div class="aurora__item"></div>
                        <div class="aurora__item"></div>
                        <div class="aurora__item"></div>
                    </div>
                </p>
                {/* <div className="text-[14px] md:text-[14px]  xl:text-[22px] text-white flex justify-center animated-text mx-auto" style={{ fontFamily: "Montserrat-Medium" }}>
                    to Brain Wave&nbsp;<span>{typewriterAnimation}</span>
                   
                </div> */}
                <div className="absolute top-[110%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <AnimatedText />
</div>
            </div>
            
        </div>
    )
}

export default Welcome
