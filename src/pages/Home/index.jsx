import React, { Suspense } from 'react'
import CardGrid from './CardGrid';
// import DNACompanies from './DNACompanies';

const Header = React.lazy(() => import("../../components/Header"));
const Banner2 = React.lazy(() => import("./Banner2"));
const Welcome = React.lazy(() => import("./Welcome"));
const Banner = React.lazy(() => import("./Banner"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const Video = React.lazy(() => import("./Video"));
const OurClients = React.lazy(() => import("./Clients"));
const OurClientsLogo = React.lazy(() => import("./ClientsLogo"));
const OurClients2 = React.lazy(() => import("./Clients2"));
const OurWorks = React.lazy(() => import("./OurWorks"));
const OurCulture = React.lazy(() => import("./OurCulture"));
const OurDifference = React.lazy(() => import("./OurDifference"));
const OurProcess = React.lazy(() => import("./OurProcess"));
const OurServices = React.lazy(() => import("./OurServices"));
const ContactUs = React.lazy(() => import("./ContactUs"));
const Footer = React.lazy(() => import("../../components/Footer"));
const index = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <div className='min-w-full'>
    <Suspense fallback={<div className='min-h-dvh bg-black'></div>}>
     <Banner2/>
     <Welcome />
     <Banner/>
     <OurServices/>
      <AboutUs/>
     {/* <Video /> */}
     <OurClients/>
     <OurClientsLogo/>
     {/* <OurClients2/> */}
     <OurCulture/>
     <OurDifference/>
     <OurProcess/>
     <ContactUs />
     {/* <CardGrid /> */}
     {/* <div className='bg-[#000000]'>
     <WavyLines />
     </div> */}
   </Suspense>
   </div>
  )
}

export default index