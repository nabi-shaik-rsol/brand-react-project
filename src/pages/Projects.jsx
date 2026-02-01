import React from 'react'
import '../ParallaxStars.scss';
import ALMALKI from '../../assets/BWLogos/ALMALKI.png';

const Projects = () => {
  return (
    <>
      <div className='w-screen relative'>
      <div className="parallaxStars w-full max-w-screen !h-full fixed top-0 -z-10">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className='py-32 z-[100] overflow-y-scroll'>
        <div className='flex'>
          <div className='bg-[#1c1c1caa] h-screen w-5/12 flex justify-center items-center'>
            <img className={`w-2/5`} src={ALMALKI} alt="" />
          </div>
          <div className='ml-[8vw] w-5/12'>
            <div className='h-auto'>
              <div className='h-screen flex flex-col justify-center'>
              <h3 className='text-6xl text-gray-300 font-DariusRegular'>Al Malki</h3>
                <div className='flex flex-col mt-20'>
                  <ul className='flex flex-wrap w-4/5'>
                    <li className='w-1/2 h-11'><span className='text-[#ff0054] text-[10px] tracking-wide uppercase font-bold'>Website</span></li>
                    <li className='w-1/2 h-11'><span className='text-gray-300'>https://almalki.com</span></li>

                    <li className='w-1/2 h-11'><span className='text-[#ff0054] text-[10px] tracking-wide uppercase font-bold'>Stage</span></li>
                    <li className='w-1/2 h-11'><span className='text-gray-300'>Venture capital</span></li>

                    <li className='w-1/2 h-11'><span className='text-[#ff0054] text-[10px] tracking-wide uppercase font-bold'>Geography</span></li>
                    <li className='w-1/2 h-11'><span className='text-gray-300'>Middle East</span></li>

                    <li className='w-1/2 h-11'><span className='text-[#ff0054] text-[10px] tracking-wide uppercase font-bold'>Status</span></li>
                    <li className='w-1/2 h-11'><span className='text-gray-300'>Current</span></li>
                  </ul>
                </div>
                </div>
              {/* <p className='text-gray-300'>Cortex is a healthcare company that provides real-time patient updates for healthcare providers through live nurse follow-up calls, hospital alerts, performance metrics. It specializes in the field of healthcare, software, technology, readmission prevention, patient experience, patient follow-up, and health tech. The company was founded in 2015 and is headquartered in Draper, Utah.</p> */}
            </div>
          </div>
        </div>
        </div>
        <div className=''>
          <div className='grid grid-cols-2 grid-flow-col gap-4 px-2 pb-2 '>
            <div className='grid grid-cols-6 gap-x-8 gap-y-8 auto-cols-fr grid-rows-[auto] place-items-stretch place-content-start'></div>
            <div className=''></div>
          </div>
        </div>
        <div className='w-3/4 mx-auto border-t border-gray-500 flex justify-center'>
          <div className='flex flex-col  py-28 w-fit mx-auto'>
          <p className='text-[#ff0054] text-[10px] tracking-wide uppercase font-bold'>Next Company</p>
          <div className='flex flex-col w-fit mt-10'>
            <img className={`w-[16vw]`} src={ALMALKI} alt="" />
            <p className='text-gray-300 text-right text-[10px] tracking-wide uppercase font-bold mt-6'>Learn More</p>
          </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Projects