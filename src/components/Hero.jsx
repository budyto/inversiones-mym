import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, DollarSign, Lock } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container hero-container">
        
        <motion.div 
          className="hero-badges"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge"><DollarSign size={14} /> Renta mensual</span>
          <span className="badge"><TrendingUp size={14} /> Interés compuesto</span>
          <span className="badge"><DollarSign size={14} /> Pesos y dólares</span>
          <span className="badge"><Lock size={14} /> Círculo privado</span>
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Gestión estratégica de capital mediante <span className="gradient-text">financiamiento comercial</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Acceso exclusivo al sistema de financiamiento privado de MyM Inversiones. Diseñado para ofrecer rentabilidad ordenada y seguimiento analítico sobre operaciones evaluadas rigurosamente.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <a href="#contacto" className="btn-primary">Contactar a un asesor</a>
          <a href="#planes" className="btn-secondary">Explorar modalidades</a>
        </motion.div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="stat-item">
            <span className="stat-value">Desde 3 meses</span>
            <span className="stat-label">Plazo inicial mínimo</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">ARS y USD</span>
            <span className="stat-label">Monedas de inversión</span>
          </div>
          <div className="stat-item">
            <span className="stat-value"><ShieldCheck size={20} className="text-gold" /> Capital aplicado</span>
            <span className="stat-label">A créditos comerciales</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
