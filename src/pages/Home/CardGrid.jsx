import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FloatingCard = ({ title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer transform-gpu"
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        rotateX: 6,
        rotateY: -6,
        boxShadow: "0 20px 35px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.97 }}
      animate={{
        y: [0, -6, 0], // floating loop
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
};

export default function CardGrid() {
  const cards = [
    { title: "Card 1", description: "This is the first card." },
    { title: "Card 2", description: "This is the second card." },
    { title: "Card 3", description: "This is the third card." },
    { title: "Card 4", description: "This is the fourth card." },
    { title: "Card 5", description: "This is the fifth card." },
    { title: "Card 6", description: "This is the sixth card." },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card, index) => (
        <FloatingCard
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </motion.div>
  );
}
