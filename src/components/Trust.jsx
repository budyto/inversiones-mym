import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Trust.css';

const Trust = () => {
  const points = [
    "Evaluación previa de cada operación",
    "Control de capital activo",
    "Registro de inversores y referidores",
    "Seguimiento mensual",
    "Fondo de reserva interno",
    "Comunicación directa"
  ];

  return (
    <section className="section-padding trust-section">
      <div className="container">
        <div className="trust-content">
          <motion.div 
            className="trust-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Un modelo privado, {' '}<span className="gradient-text">ordenado y transparente</span></h2>
            <p>
              Capital aplicado a operaciones reales, con control interno y seguimiento personalizado. Nuestro enfoque asegura que cada paso esté validado para tu tranquilidad.
            </p>
          </motion.div>

          <motion.div 
            className="trust-points glass-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul>
              {points.map((point, index) => (
                <li key={index}>
                  <CheckCircle2 size={24} className="text-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
