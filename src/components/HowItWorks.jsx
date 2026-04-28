import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      title: "Recepción de solicitud",
      desc: "Contacto inicial mediante nuestro canal privado para agendar una reunión."
    },
    {
      title: "Análisis de perfil",
      desc: "Evaluación conjunta de capacidad de capital, plazo esperado y tolerancia."
    },
    {
      title: "Estructuración del acuerdo",
      desc: "Definición de la modalidad (renta distribuida o capitalización compuesta)."
    },
    {
      title: "Asignación comercial",
      desc: "El capital es inyectado en el flujo de trabajo de comercios previamente verificados."
    },
    {
      title: "Monitoreo de rendimientos",
      desc: "Acceso a reportes periódicos sobre el estatus de la operación y liquidaciones."
    }
  ];

  return (
    <section className="section-padding how-it-works" id="como-funciona">
      <div className="container">
        <div className="how-it-works-header">
          <h2>Cómo <span className="gradient-text">funciona</span></h2>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <motion.div 
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="timeline-number">{index + 1}</div>
              <div className="timeline-content glass-card">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
