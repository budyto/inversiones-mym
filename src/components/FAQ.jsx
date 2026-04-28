import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "¿Quién puede invertir?",
      answer: "Personas del círculo privado de MyM Inversiones que pasen una evaluación previa y comprendan el funcionamiento del sistema."
    },
    {
      question: "¿Puedo retirar antes del plazo?",
      answer: "Los retiros anticipados deben solicitarse y pueden estar sujetos a condiciones según el plan elegido."
    },
    {
      question: "¿La rentabilidad es fija?",
      answer: "Los planes muestran referencias comerciales. Las condiciones finales se informan antes de cada operación."
    },
    {
      question: "¿Qué diferencia hay entre renta mensual e interés compuesto?",
      answer: "La renta mensual permite cobrar mes a mes. El interés compuesto reinvierte la ganancia para hacer crecer el capital."
    },
    {
      question: "¿En qué se utiliza el capital?",
      answer: "En operaciones de financiamiento privado a comercios y emprendedores evaluados por MyM Inversiones."
    },
    {
      question: "¿Puedo ser referidor?",
      answer: "Sí, si formás parte del círculo privado y aceptás las reglas internas. El referidor solo presenta interesados; MyM Inversiones se encarga de evaluar y cerrar la operación."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-padding faq-section bg-alt" id="faq">
      <div className="container">
        <div className="faq-header">
          <h2>Preguntas <span className="gradient-text">frecuentes</span></h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <ChevronDown className={`faq-icon ${activeIndex === index ? 'rotated' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
