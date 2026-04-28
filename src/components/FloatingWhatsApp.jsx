import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const text = encodeURIComponent("Hola MyM Inversiones, me comunico desde la web y me gustaría recibir información sobre los planes privados.");

  return (
    <motion.a 
      href={`https://wa.me/5491125834909?text=${text}`}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default FloatingWhatsApp;
