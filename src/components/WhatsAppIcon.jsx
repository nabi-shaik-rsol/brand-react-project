import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const openWhatsApp = () => {
    const phoneNumber = "97459978601"; // Change to your number with country code
    const message = "Hello, I want to chat with you"; // Pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div
      onClick={openWhatsApp}
      style={{
        position: "fixed",
        right: "40px",
        bottom: "40px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        zIndex: 9999
      }}
    >
      <FaWhatsapp size={30} color="#fff" />
    </div>
  );
};

export default WhatsAppIcon;
