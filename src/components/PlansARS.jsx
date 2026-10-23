import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './Plans.css';

const PlansARS = () => {
  return (
    <section className="section-padding plans-section" id="planes">
      <div className="container">
        <div className="plans-header">
          <h2>Portafolios en {' '}<span className="gradient-text">pesos</span></h2>
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
              <li><Check size={20} className="text-gold" /> Básico · 4 meses: <strong>3% mensual</strong></li>
              <li><Check size={20} className="text-gold" /> Intermedio · 8 meses: <strong>3,5% mensual</strong></li>
              <li><Check size={20} className="text-gold" /> Premium · 12 meses: <strong>4% mensual</strong></li>
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
              <p>Reinvertís la rentabilidad y cada mes el interés se calcula sobre un capital mayor. <br/> <span className="text-gold" style={{fontSize:'13px'}}>Al 4% compuesto, 12 meses rinden 60,1% (contra 48% de la renta mensual).</span></p>
            </div>
            <ul className="plan-list">
              <li><Check size={20} className="text-gold" /> Smart · 4 meses: <strong>3% mensual compuesto</strong></li>
              <li><Check size={20} className="text-gold" /> Pro · 8 meses: <strong>3,5% mensual compuesto</strong></li>
              <li><Check size={20} className="text-gold" /> Elite · 12 meses: <strong>4% mensual compuesto</strong></li>
            </ul>
          </motion.div>
        </div>
        
        <p className="plans-note">
          * El plan depende del plazo. La tasa queda fija en el contrato por todo el plazo; las condiciones finales se informan antes de firmar.
        </p>
      </div>
    </section>
  );
};

export default PlansARS;
