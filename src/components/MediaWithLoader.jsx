import React, { useEffect, useRef, useState } from "react";
// import Ourlegacy from "./svgComponents/ourlegacy";


const MediaWithLoader = ({
    src,
    alt,
    className,
    style,
    autoPlay = true,
    loop = true,
    muted = true,
    playsInline = true,
}) => {
    const [loading, setLoading] = useState(true);
    const isVideo = src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once loaded
                }
            },
            {
                rootMargin: '100px', // Preload before fully in view
                threshold: 0.1
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {!isVisible && <div ref={ref}></div>}
            {isVisible && <>
                {loading && (
                    <div className={className + " flex !h-[300px]"} style={style}>
                        <div role="status" className='w-5 my-auto mx-auto h-full flex justify-center align-middle animate-ping duration-500'>
                            {/* <Ourlegacy color='#183d628f' animation={true} /> */}
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
                {isVideo ? (
                    <video
                        src={src}
                        className={`${className} ${loading ? "hidden" : ""}`}
                        onLoadedData={() => setLoading(false)}
                        onError={() => setLoading(false)}
                        autoPlay={autoPlay}
                        loop={loop}
                        muted={muted}
                        playsInline={playsInline}
                        preload="none"
                        style={style}
                    />
                ) : (
                    <img
                        src={src}
                        alt={alt}
                        className={`${className} ${loading ? "hidden" : ""}`}
                        loading="lazy"
                        onLoad={() => setLoading(false)}
                        onError={() => setLoading(false)}
                    />
                )}
            </>}
        </>

    );
};

export default MediaWithLoader;