import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/BWLogos/BW trasperant logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

// Separate component for menu items
function MenuItem({ text, link }) {
    const textRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);



    useEffect(() => {
        if (textRef.current) setLineWidth(textRef.current.offsetWidth);
    }, []);

    return (
        <motion.a
            href={link}
            className="relative group !text-[#faf9f9] text-[30px] font-bold cursor-pointer flex flex-col items-center"
            style={{ fontFamily: "Montserrat-Medium" }}
            whileHover={{ scale: 1.05 }}
        >
            <span ref={textRef}>{text}</span>
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                    //   width: lineWidth,
                    width: "100px",
                    height: "2px",
                    backgroundColor: "#2cc2ff",
                    transformOrigin: "center",
                    marginTop: "3px",
                }}
            />
        </motion.a>
    );
}

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const icons = [
        { Icon: FaFacebookF, link: "https://facebook.com/brainwave.qatar", color: "#ffffff" },
        { Icon: FaXTwitter, link: "https://x.com/Brainwave_qa", color: "#ffffff" },
        { Icon: FaInstagram, link: "https://www.instagram.com/brainwave.qa", color: "#ffffff" },
        { Icon: FaLinkedinIn, link: "https://linkedin.com/company/brainwave-qa", color: "#ffffff" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animation variants for the menu icon
    const lineVariants = {
        initial: { scaleX: 1 },
        hover: { scaleX: 1.2, transition: { duration: 0.3 } },
    };

    // Animation variants for the dropdown
    const dropdownVariants = {
        hidden: { opacity: 0, y: -20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
    };

    const menuItems = [
        { text: "Our Services", link: "#targetOurServicesSection" },
        { text: "About Us", link: "#targetAboutUsSection" },
        { text: "Our Clients", link: "#targetOurClientsSection" },
        { text: "Contact us", link: "#targetOurContactUsSection" },
    ];

    return (
        <div className="w-full fixed top-0 z-[1000]">
            <nav
                className={`flex items-center justify-between px-4 lg:px-10 xl:px-20 2xl:px-40 md:px-10 py-5 xl:py-10 text-white transition-colors duration-300 bg-[#000000] lg:bg-transparent`}
            >
                <div className="flex-shrink-0">
                    <a href="/">
                        <div className="flex items-center justify-center text-white w-36 font-bold text-lg xl:text-[50px]">
                            <img src={logo} alt="logo" />
                        </div>
                    </a>
                </div>

                {/* Parent container with hover events */}
                <div
                    className="md:block relative"
                    onMouseEnter={() => setMenuOpen(true)}
                    onMouseLeave={() => setMenuOpen(false)}
                >
                    {/* Three-dot menu with hover animation */}
                    <motion.div
                        className="flex flex-col justify-center gap-[6px] p-2 cursor-pointer"
                        whileHover="hover"
                        initial="initial"
                    >
                        <motion.span variants={lineVariants} className="w-8 h-[3px] bg-white rounded-full"></motion.span>
                        <motion.span variants={lineVariants} className="w-8 h-[3px] bg-white rounded-full"></motion.span>
                        <motion.span variants={lineVariants} className="w-8 h-[3px] bg-white rounded-full"></motion.span>
                    </motion.div>

                    {/* Dropdown Menu with smooth animation */}
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.div
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute right-0 mt-2 py-10 w-96 bg-[#000000] text-black rounded-lg shadow-xl p-4 z-[2000]"
                            >
                                <div className="flex flex-col gap-3 text-center">
                                    {menuItems.map((item, index) => (
                                        <MenuItem key={index} text={item.text} link={item.link} />
                                    ))}
                                </div>
                                <div className="text-white flex flex-col text-center justify-center">
                                    <div className="pt-10 cursor-pointer">
                                        <p>Call us :</p>
                                        <p>+974 5997 8601</p>
                                    </div>
                                    <div className="pt-8 cursor-pointer">
                                        <p>Email us :</p>
                                        <p>info@brainwave.qa</p>
                                    </div>
                                    <div className="flex gap-4 pt-8 justify-center items-center">
                                        {icons.map((item, index) => {
                                            const IconComponent = item.Icon;
                                            return (
                                                <a
                                                    key={index}
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 flex justify-center items-center rounded-full border-[1px] border-[#ffffff] border-solid shadow-md hover:shadow-lg transition-shadow duration-300"
                                                >
                                                    <IconComponent style={{ color: item.color }} className="text-xl" />
                                                </a>
                                            );
                                        })}
                                    </div>

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    );
}

export default Header;
