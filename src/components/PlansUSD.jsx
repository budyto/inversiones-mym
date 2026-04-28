import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './Plans.css';

const PlansUSD = () => {
  return (
    <section className="section-padding plans-section bg-alt" id="planes-usd">
      <div className="container">
        <div className="plans-header">
          <h2>Portafolios en <span className="gradient-text">dólares</span></h2>
        </div>

        <div className="plans-grid">
          {/* COLUMNA A */}
          <motion.div 
            className="plan-column glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="plan-col-header">
              <h3>Renta mensual común</h3>
            </div>
            <ul className="plan-list">
              <li><Check size={20} className="text-gold" /> Básico: <strong>4% mensual</strong></li>
              <li><Check size={20} className="text-gold" /> Intermedio: <strong>5% mensual</strong></li>
              <li><Check size={20} className="text-gold" /> Premium: <strong>6% mensual</strong></li>
            </ul>
          </motion.div>

          {/* COLUMNA B */}
          <motion.div 
            className="plan-column glass-card gold-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="plan-col-header">
              <h3>Interés compuesto</h3>
            </div>
            <ul className="plan-list">
              <li><Check size={20} className="text-gold" /> Smart: <strong>3% mensual compuesto</strong></li>
              <li><Check size={20} className="text-gold" /> Pro: <strong>4% mensual compuesto</strong></li>
              <li><Check size={20} className="text-gold" /> Elite: <strong>5% mensual compuesto</strong></li>
            </ul>
          </motion.div>
        </div>
        
        <p className="plans-note">
          * Los planes en dólares están sujetos a condiciones de disponibilidad, plazo y validación previa.
        </p>
      </div>
    </section>
  );
};

export default PlansUSD;
