import React, { useEffect, useState } from 'react'
// import eyeVideo from "../../../assets/Images/eyeVideo.mov"
import eyeVideo from "../../../assets/Images/eyeVideo.mp4"

const Video = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      // const target = document.querySelector('.target');
      // if (target) {
      //   const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      //   const targetRect = target.getBoundingClientRect();
      //   // console.log(targetRect, vh + 100);
      //   if(targetRect.bottom < 0)
      //       setShow(false)
      //   else if(targetRect.top < vh + 2000 && !show)
      //       setShow(true)
      //   else if(targetRect.top > vh + 2000) 
      //       setShow(false)

      // }
      const target = document.querySelector('#targetAboutUs1');
      const target2 = document.querySelector('#targetOurClients1');
      if (target) {
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        const targetRect = target.getBoundingClientRect();
        const targetRect2 = target2.getBoundingClientRect();
        // console.log('aboutus', targetRect.top, vh);
        if (targetRect.top < 0 && targetRect2.bottom > vh) {
          setShow(true)
        } else {
          setShow(false)
        }
      }
    }, 1);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function debounce(fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  return (
    <div className='h-screen max-w-screen target'>
      {show && (
        <div className="w-full min-h-screen h-full fixed top-0 left-0 right-0 -z-10 bg-white">
          <video
            width="100%"
            muted
            autoPlay
            playsInline
            loop
            preload="auto"
          >
            <source src={eyeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  )
}

export default Video

