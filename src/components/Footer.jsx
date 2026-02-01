import React, { useRef } from "react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { FaPhone, FaMobileAlt } from "react-icons/fa";  // Import from fa instead of fa6

import { motion, useInView } from "framer-motion";

function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const icons = [
        { Icon: FaInstagram, link: "https://www.instagram.com/brainwave.qa" },
        { Icon: FaFacebookF, link: "https://facebook.com/brainwave.qatar" },
        { Icon: FaXTwitter, link: "https://x.com/Brainwave_qa" },
        { Icon: FaLinkedinIn, link: "https://linkedin.com/company/brainwave-qa" },
        { Icon: FaEnvelope, link: "mailto:info@brainwave.qa" },
        { Icon: FaWhatsapp, link: "https://wa.me/97459978601?text=Hello%20I%20want%20to%20chat%20with%20you" },
    ];

    return (
        <div className="relative flex flex-col min-h-auto bg-[#000000] text-white pt-20 pb-20 max-w-screen overflow-hidden z-20">
            <span className="w-full flex flex-col justify-center items-center relative z-10">
                <div className="relative w-full flex flex-col justify-center items-center py-0 ">
                    <div
                        ref={ref}
                        className="flex gap-2 items-start z-10 md:w-[597px] xl:w-[746px] mx-auto"
                    >
                        {icons.map(({ Icon, link }, index) => (
                            <motion.a
                                key={index}
                                href={link}
                                className="bg-white rounded-full p-2"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.3, duration: 0.6 }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="text-black" size={28} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact Info Section */}
                    <p className="mt-8 text-[18px] text-gray-400 z-10  font-medium text-left flex flex-col justify-end j gap-1 md:w-[597px] xl:w-[746px] mx-auto">
                        <span className="flex gap-2">
                            <FaPhone /> Landline: +974 40210100
                        </span>
                        <span className="flex  gap-2">
                            <FaMobileAlt /> Mobile: +974 59978601
                        </span>
                    </p>

                    <p className="mt-8 text-xs text-gray-400 z-10 italic text-justify md:w-[597px] xl:w-[746px] mx-auto">
                        © Copyright 2025, Brain Wave, All rights reserved
                    </p>
                </div>
            </span>
        </div>
    );
}

export default Footer;
