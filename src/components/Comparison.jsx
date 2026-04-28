import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import './Comparison.css';

const Comparison = () => {
  return (
    <section className="section-padding comparison-section bg-alt" id="comparativa">
      <div className="container">
        <div className="comparison-header">
          <h2>Renta mensual vs <span className="gradient-text">interés compuesto</span></h2>
        </div>

        <div className="comparison-grid">
          {/* Renta Mensual */}
          <motion.div 
            className="comparison-card glass-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Renta mensual</h3>
            <ul className="comparison-list">
              <li><Check size={20} className="text-success" /> Cobrás todos los meses</li>
              <li><Check size={20} className="text-success" /> Mayor liquidez</li>
              <li><Check size={20} className="text-success" /> Ideal para ingreso pasivo mensual</li>
              <li><X size={20} className="text-muted" /> El capital no crece salvo reinversión manual</li>
            </ul>
          </motion.div>

          {/* Interés Compuesto */}
          <motion.div 
            className="comparison-card glass-card gold-border"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Interés compuesto</h3>
            <ul className="comparison-list">
              <li><X size={20} className="text-muted" /> No retirás la renta mensual</li>
              <li><Check size={20} className="text-success" /> El capital crece mes a mes</li>
              <li><Check size={20} className="text-success" /> Ideal para plazos más largos</li>
              <li><Check size={20} className="text-success" /> Mayor resultado acumulado</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
