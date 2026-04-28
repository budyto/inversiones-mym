import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './Plans.css';

const PlansARS = () => {
  return (
    <section className="section-padding plans-section" id="planes">
      <div className="container">
        <div className="plans-header">
          <h2>Portafolios en <span className="gradient-text">pesos</span></h2>
          <p>Esquemas diseñados para optimizar el rendimiento mediante distribución periódica o capitalización.</p>
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
              <p>Cobrás una renta mensual y mantenés el capital invertido.</p>
            </div>
            <ul className="plan-list">
              <li><Check size={20} className="text-gold" /> Básico: <strong>5% mensual</strong></li>
              <li><Check size={20} className="text-gold" /> Intermedio: <strong>6% mensual</strong></li>
              <li><Check size={20} className="text-gold" /> Premium: <strong>7% mensual</strong></li>
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
              <p>Reinvertís la rentabilidad para hacer crecer el capital mes a mes.</p>
            </div>
            <ul className="plan-list">
              <li><Check size={20} className="text-gold" /> Smart: <strong>4% mensual compuesto</strong></li>
              <li><Check size={20} className="text-gold" /> Pro: <strong>5% mensual compuesto</strong></li>
              <li><Check size={20} className="text-gold" /> Elite: <strong>6% mensual compuesto</strong></li>
            </ul>
          </motion.div>
        </div>
        
        <p className="plans-note">
          * Los porcentajes pueden variar según monto, plazo, disponibilidad operativa y evaluación interna.
        </p>
      </div>
    </section>
  );
};

export default PlansARS;
