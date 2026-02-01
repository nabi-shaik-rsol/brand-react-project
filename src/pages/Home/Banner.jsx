import React, { useEffect, useRef } from 'react';
import hero from '../../../assets/Images/shutterstock_2552996991.jpg';
import whatsapp from '../../../assets/Images/WhatsappBW.png';
import messag from '../../../assets/Images/MesageBW.png';
import bannerVideo from '../../../assets/WEBSITE VIDEO.webm'
import MediaWithLoader from '../../components/MediaWithLoader';


function Banner() {
    const ref = useRef(null);

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
        // <div className="relative px-10 w-full h-screen top-18  bg-[#000000] overflow-hidden">
        <div ref={ref} className="relative w-full min-h-screen top-30  bg-[#000000] overflow-hidden">


            <div className="relative z-30 w-full h-full flex flex-col justify-center items-center text-white">
                {/* <img className='w-full h-auto justify-center' src={hero} alt="..." />
                <div className='absolute text-white text text-[36px] xl:text-[60px]' style={{fontFamily:"PoppinsRegular"}}>
                    Insight. Inspiration. Innovation
                </div> */}
                {/* <video width="320" height="240" controls> */}
                {/* <video width="100% " */}
                {/* <MediaWithLoader width="100% "
                    muted
                    autoPlay
                    playsInline
                    // controls
                    preload="none">
                    src={bannerVideo} 
                    type={"video/mp4"}
                /> */}
                <MediaWithLoader
                    className="w-full "
                    // className="absolute top-1/2 left-1/2 min-w-full  w-auto h-full transform -translate-x-1/2 -translate-y-1/2"
                    // ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    preload="none"
                    src={bannerVideo}
                    type="video/mp4"
                />

            </div>

        </div>
    );
}

export default Banner;
