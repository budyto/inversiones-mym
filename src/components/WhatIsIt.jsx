import React from 'react';
import { motion } from 'framer-motion';
import { Store, TrendingUp, Handshake, ShieldCheck } from 'lucide-react';
import './WhatIsIt.css';

const WhatIsIt = () => {
  const cards = [
    {
      icon: <Store size={32} />,
      title: "Financiación a comercios",
      desc: "Préstamos orientados exclusivamente a negocios físicos y emprendedores activos."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Cobranzas con flujo diario",
      desc: "Retornos constantes basados en la recaudación diaria de los comercios."
    },
    {
      icon: <Handshake size={32} />,
      title: "Seguimiento personalizado",
      desc: "Atención uno a uno para revisar el estado de tu capital y rendimientos."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Modelo privado y controlado",
      desc: "Sistema cerrado por invitación o evaluación para garantizar la seguridad."
    }
  ];

  return (
    <section className="section-padding what-is-it" id="que-es">
      <div className="container">
        <div className="what-is-it-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Invertí en un sistema basado en {' '}<span className="gradient-text">comercios reales</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MyM Inversiones trabaja con comerciantes y emprendedores que necesitan capital para stock, mercadería, herramientas o crecimiento diario. El capital de los inversores se aplica a operaciones privadas previamente evaluadas, buscando generar una renta mensual ordenada y sostenible.
          </motion.p>
        </div>

        <div className="what-is-it-grid">
          {cards.map((card, index) => (
            <motion.div 
              className="glass-card feature-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{card.icon}</div>
              <h3 className="feature-title">{card.title}</h3>
              <p className="feature-desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsIt;
