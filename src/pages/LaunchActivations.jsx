








import Linesbg from "../../assets/Images/Lines Bg.svg";
import img1 from '../../assets/Images/services4.webp'

const LaunchActivations = () => {
    return (
       <div   className="relative  lg:justify-evenly md:justify-between sm:justify-center w-screen items-center min-h-screen mx-auto bg-black text-white overflow-hidden py-20 px-10 
                      2xl:py-30 2xl:px-23
                      bg-no-repeat bg-[length:120%_auto] 
                      bg-center lg:bg-bottom"
                  style={{
                      backgroundImage: `url(${Linesbg})`,
                  }}
              >
            <div className='absolute top-[100px] w-full'>

               <div className='w-full flex justify-between items-baseline px-16 2xl:px-50 xl:px-17 lg:px-12 md:px-12 2xl:pl-[200px]'>
                <h3 className="text-[35px]  xl:text-[35px] md:text-[30px] 2xl:text-[45px] font-light tracking-wide 2xl:leading-[3.2rem] xl:leading-[2.5rem] md:leading-[1.5rem] leading-[2rem]" style={{ fontFamily: "PoppinsLight" }}>
                    Product Launch Activations
                    </h3>
                </div>
                <div className="w-full px-15 md:px-12 xl:px-17 2xl:px-50">
                    <img src={img1} className="2xl:w-[65%] xl:w-[65%] md:w-[65%] w-[80%] " alt='..' />




                </div>
            </div>
        </div>
    );
};

export default LaunchActivations;