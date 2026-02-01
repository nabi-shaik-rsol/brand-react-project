import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './FlipTiles.css';
import ser1 from "../../../assets/Images/services1.webp";
import ser2 from "../../../assets/Images/services2.webp";
import ser3 from "../../../assets/Images/services3.webp";
import ser4 from "../../../assets/Images/services4.webp";
import ser5 from "../../../assets/Images/services5.webp";
import ser6 from "../../../assets/Images/services6.webp";
import ser7 from "../../../assets/Images/services7.webp";
import ser8 from "../../../assets/Images/services8.webp";
import ser9 from "../../../assets/Images/services9.webp";
import ServiceVideo from "../../../assets/Video/Service.mp4"
import { useNavigate } from "react-router-dom";


const services = [
    { id: 1, type: "image", image: ser1, alt: "Business meeting" },
    {
        id: 2,
        type: "text",
        title: ["Brand", "Consulting"],
        subtitle: ["Brand identity and", "brand guidelines"],
        color: "bg-[#c31c26]",
        textColor: "text-white",
        link: "/brand",
        video: ServiceVideo,
    },
    { id: 3, type: "image", image: ser2, alt: "Design work" },
    {
        id: 4,
        type: "text",
        title: ["Advertising", "and Promotions"],
        subtitle: ["Strategy", "and planning"],
        color: "bg-[#00974d]",
        textColor: "text-white",
        link: "/advertising",
        video: ServiceVideo,
    },
    { id: 5, type: "image", image: ser3, alt: "Mobile app development" },
    {
        id: 6,
        type: "text",
        title: ["PR and", "Reputation", "Management"],
        subtitle: ["Media", "planning"],
        color: "bg-[#008fbf]",
        textColor: "text-white",
        video: ServiceVideo,
    },
    { id: 7, type: "image", image: ser4, alt: "Photography equipment" },
    {
        id: 8,
        type: "text",
        title: ["Media", "Buying"],
        subtitle: ["Event planning", "and production"],
        color: "bg-[#c98e27]",
        textColor: "text-white",
        link: "/events",
        video: ServiceVideo,
    },
    { id: 9, type: "image", image: ser5, alt: "Event management" },
    {
        id: 10,
        type: "text",
        title: ["Editorial and", "Advertorial"],
        subtitle: ["Exhibition concepts", "and production"],
        color: "bg-[#761a5b]",
        textColor: "text-white",
        link: "/exhibitions",
        video: ServiceVideo,
    },
    { id: 11, type: "image", image: ser6, alt: "Social media management" },
    {
        id: 12,
        type: "text",
        title: ["Digital", "Marketing"],
        subtitle: ["Social media marketing"],
        color: "bg-[#e2496d]",
        textColor: "text-white",
        link: "/socialmedia",
        video: ServiceVideo,
    },
    { id: 13, type: "image", image: ser7, alt: "E-commerce development" },
    {
        id: 14,
        type: "text",
        title: ["Websites", "and Apps"],
        subtitle: ["Visual merchandising"],
        color: "bg-[#00aa7d]",
        textColor: "text-white",
        video: ServiceVideo,
    },
    { id: 15, type: "image", image: ser8, alt: "Training and workshops" },
    {
        id: 16,
        type: "text",
        title: ["Packaging", "and Graphics"],
        subtitle: ["Content development"],
        color: "bg-[#9e745e]",
        textColor: "text-white",
        link: "/printingpublications",
        video: ServiceVideo,
    },
    { id: 17, type: "image", image: ser9, alt: "Motion graphics" },
    {
        id: 18,
        type: "text",
        title: ["Motion Graphics", "and Animation"],
        subtitle: ["Viral videos", "B2B marketing"],
        color: "bg-[#859283]",
        textColor: "text-white",
        link: "/animationspage",
        video: ServiceVideo,
    },
];

const FilpTilesFirst = ({ onComplete }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();
    const [cardsVisible, setCardsVisible] = useState(false)
    const gridRef = useRef(null)
    const hasTriggeredRef = useRef(false);
    const completionCalledRef = useRef(false);
    const timeoutRef = useRef(null);

    const handleTileClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

 useEffect(() => {
    const checkGrid = () => {
      if (!gridRef.current || hasTriggeredRef.current) return;

      const rect = gridRef.current.getBoundingClientRect();
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

      
      if (rect.top < vh && rect.bottom > 0) {
        hasTriggeredRef.current = true;
        setTimeout(() => {

            setCardsVisible(true);
        },2000)

        window.removeEventListener('scroll', checkGrid);
        window.removeEventListener('resize', checkGrid);

        
        const itemCount = services.length; 
        const perItemDelayMs = 280; 
        const animationDurationMs = 220; 
                const totalMs = (Math.max(0, itemCount - 1) * perItemDelayMs) + animationDurationMs + 120;

                timeoutRef.current = setTimeout(() => {
                    if (gridRef.current) gridRef.current.setAttribute('data-animated', 'true');
                    if (typeof onComplete === 'function' && !completionCalledRef.current) {
                        completionCalledRef.current = true;
                        try { onComplete(); } catch (e) { /* swallow callback errors */ }
                    }
                }, totalMs);
      }
    };

   
    window.addEventListener('scroll', checkGrid, { passive: true });
    window.addEventListener('resize', checkGrid);

  
    checkGrid();

        return () => {
            window.removeEventListener('scroll', checkGrid);
            window.removeEventListener('resize', checkGrid);
            if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
        };
  }, []); 





    const orderedServices =
        activeIndex !== null
            ? [services[activeIndex], ...services.filter((_, i) => i !== activeIndex)]
            : services;

    return (
        <div className="container mx-auto w-3/4 px-20 p-4">
            <div ref={gridRef} data-visible={cardsVisible} className={`grid grid-cols-12 gap-2 [grid-auto-flow:dense] services-grid  `}>
            {/* <div  className="grid grid-cols-12 gap-2 [grid-auto-flow:dense] "> */}
                {orderedServices.map((service, index) => {
                    const isActive = activeIndex !== null && service === services[activeIndex];
                    return (
                        <motion.div
                            key={service.id}
                            layout
                            initial={false} 
                            style={{ "--i": index }}
                            transition={{ duration: 0.6 }}
                            className={`tile-container cursor-pointer 
                            ${isActive ? "col-span-4 row-span-2" : "col-span-4 row-span-1"}`}
                            onClick={() => {
                                if (service.type === "text") {
                                    handleTileClick(services.indexOf(service));
                                }
                            }}

                        >
                            <motion.div
                                className="tile relative w-full h-full  shadow-lg overflow-hidden square-tile"
                                 initial={false}
                                animate={{
                                    scale: isActive ? 1 : 1,
                                    zIndex: isActive ? 50 : 1,
                                }}
                                transition={{ duration: 0.6 }}
                            >
                                <AnimatePresence mode="wait">
                                    {isActive ? (
                                        <motion.div
                                            key="back"
                                            className="back  inset-0 flex items-center justify-center text-xl font-bold relative"
                                            initial={{ rotateY: 180 }}
                                            animate={{ rotateY: 0 }}
                                            exit={{ rotateY: 180 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {service.video ? (
                                                <div className="absolute inset-0">
                                                    <video
                                                        src={service.video}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-[#000000a7] "></div>
                                                    <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-6 z-10">
                                                        <h3
                                                            className="text-2xl font-light  mb-2 "
                                                            style={{ fontFamily: "Montserrat-Medium" }}
                                                        >
                                                            {service.title.map((line, i) => (
                                                                <span key={i}>
                                                                    {line}
                                                                    <br />
                                                                </span>
                                                            ))}
                                                        </h3>


                                                        <div className="w-7 h-[2px]  rounded-full bg-[blue] text-left opacity-50 mb-2"></div>

                                                        <p
                                                            className="text-base opacity-90 leading-relaxed "
                                                            style={{ fontFamily: "Montserrat-Regular" }}
                                                        >
                                                            {service.subtitle.map((line, i) => (
                                                                <span key={i}>
                                                                    {line}
                                                                    <br />
                                                                </span>
                                                            ))}
                                                        </p>
                                                        {isActive && service.link && (
                                                            // <div className=" bg-transparent">
                                                            <div
                                                                onClick={(e) => {
                                                                    e.stopPropagation(); 
                                                                    navigate(service.link);
                                                                }}
                                                                className="absolute bottom-4 right-4   flex items-center"
                                                                style={{ fontFamily: "Montserrat-Regular" }}
                                                            >
                                                                <p className={`text-xs text-nowrap pr-2 w-0 overflow-hidden duration-300 leading-[1] w-full `}>LEARN MORE</p>
                                                                <hr className={`border-[#BA3161] w-4`} />
                                                                <div className="p-[4px] border border-[#BA3161] border-l-0 border-b-0 -ml-[8px] rotate-45"></div>
                                                            </div>
                                                            // </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className={`w-full h-full p-4 ${service.color} ${service.textColor} flex flex-col items-center justify-center relative`}>
                                                    <h2 className="text-lg font-bold text-center">
                                                        {service.title.map((line, i) => (
                                                            <div key={i}>{line}</div>
                                                        ))}
                                                    </h2>
                                                    {service.subtitle.length > 0 && (
                                                        <p className="text-sm text-center mt-2">
                                                            {service.subtitle.map((line, i) => (
                                                                <div key={i}>{line}</div>
                                                            ))}
                                                        </p>
                                                    )}
                                                    {isActive && service.link && (
                                                        // <div className=" bg-transparent">
                                                        <div
                                                            onClick={(e) => {
                                                                e.stopPropagation(); 
                                                                navigate(service.link);
                                                            }}
                                                            className="absolute bottom-4 right-4   flex items-center"
                                                        >
                                                            <p className={`text-[14px] text-nowrap pr-2 w-0 overflow-hidden duration-300 leading-[1] w-full `}>VIEW PROJECTS</p>
                                                            <hr className={`border-[#BA3161] w-4`} />
                                                            <div className="p-[4px] border border-[#BA3161] border-l-0 border-b-0 -ml-[8px] rotate-45"></div>
                                                        </div>
                                                        // </div>
                                                    )}
                                                </div>
                                            )}
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="front"
                                            className="front absolute inset-0 flex items-center justify-center text-xl font-bold bg-blue-100 text-blue-800"
                                            initial={{ rotateY: -180 }}
                                            animate={{ rotateY: 0 }}
                                            exit={{ rotateY: -180 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {service.type === "image" ? (
                                                <img
                                                    src={service.image}
                                                    alt={service.alt}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className={`w-full h-full p-4 ${service.color} ${service.textColor} flex flex-col items-start justify-center`}>
                                                    <h3
                                                        className="text-sm 2xl:text-base font-light  mb-2 "
                                                        style={{ fontFamily: "Montserrat-Medium" }}
                                                    >
                                                        {service.title.map((line, i) => (
                                                            <span key={i}>
                                                                {line}
                                                                <br />
                                                            </span>
                                                        ))}
                                                    </h3>
                                                    <div className="w-7 h-[2px] rounded-full bg-[blue] opacity-50 mb-2"></div>
                                                    <p
                                                        className="text-xs 2xl:text-lg opacity-90 leading-relaxed "
                                                        style={{ fontFamily: "Montserrat-Regular" }}
                                                    >
                                                        {service.subtitle.map((line, i) => (
                                                            <span key={i}>
                                                                {line}
                                                                <br />
                                                            </span>
                                                        ))}
                                                    </p>
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default FilpTilesFirst;

