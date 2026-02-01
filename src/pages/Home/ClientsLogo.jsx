import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Import all logos here in the order of the image
import Dohabank from "../../../assets/BWLogos/Dohabank.png";
import toyota from "../../../assets/BWLogos/toyota.png";
import MTH from "../../../assets/BWLogos/MTH.png";
import QatarAirways from "../../../assets/BWLogos/Qatar_Airways_Logo.png";
import QatarFounda from "../../../assets/BWLogos/qatarfoundation.png";
import EducnaboveAll from "../../../assets/BWLogos/EducnaboveAll.png";
import GulfBank from "../../../assets/BWLogos/GulfBank.png";
import apple from "../../../assets/BWLogos/apple.png";
import Nebras from "../../../assets/BWLogos/Nebras.png";
import qnb from "../../../assets/BWLogos/QNBK.png";
import mazda from "../../../assets/BWLogos/mazda.png";
import qchem from "../../../assets/BWLogos/QChem.png";
import QLM from "../../../assets/BWLogos/QLM.png";
import KBN from "../../../assets/BWLogos/KBN.png";
import gacMotors from "../../../assets/BWLogos/gacMotors.png";
import ALMUFTAH from "../../../assets/BWLogos/ALMUFTAH.png";
import ALMALKI from "../../../assets/BWLogos/ALMALKI.png";
import casio from "../../../assets/BWLogos/casio.png";
import honda from "../../../assets/BWLogos/honda.png";
import JE from "../../../assets/BWLogos/JE.png";
import lexus from "../../../assets/BWLogos/lexus.png";
import LG from "../../../assets/BWLogos/LG.png";
import volvo from "../../../assets/BWLogos/volvo.png";
import AGmotors from "../../../assets/BWLogos/AGmotors.png";
import Titan from "../../../assets/BWLogos/Titan.png";
import baic from "../../../assets/BWLogos/baic.png";

const ClientsLogo = () => {
  const logos = [
    Dohabank, toyota, MTH, QatarAirways, QatarFounda, EducnaboveAll, GulfBank,
    apple, Nebras, qnb, mazda, qchem, QLM, KBN,
    gacMotors, ALMUFTAH, ALMALKI, casio, honda, JE, lexus,
    LG, volvo, AGmotors, Titan, baic
  ];

  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-7 gap-x-10 gap-y-30 justify-items-center p-20 bg-black"
    >
      {logos.map((logo, index) => (
        <motion.img
          key={index}
          src={logo}
          alt={`logo-${index}`}
          className="h-10 w-auto  object-contain"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: index * 0.3, duration: 0.8, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default ClientsLogo;
