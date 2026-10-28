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
      answer: "Sí, avisando con 30 días de anticipación. En ese caso el interés se recalcula con la tasa del plan del plazo que hayas cumplido: por ejemplo, si firmaste a 8 meses y te vas en el mes 4, se te liquida con la tasa del plan de 4 meses, y se descuenta lo que ya cobraste. Si te vas antes de los 4 meses, recuperás tu capital."
    },
    {
      question: "¿Cómo entrego el dinero y cómo cobro?",
      answer: "Todo es en efectivo: entregás el capital en efectivo y cobrás los intereses y el capital en efectivo, en la misma moneda de tu plan (pesos o dólares billete). Cada entrega y cada pago lleva un recibo numerado firmado por las dos partes."
    },
    {
      question: "¿La rentabilidad es fija?",
      answer: "La tasa del plan queda fija en el contrato por todo el plazo. Las condiciones finales se informan antes de firmar."
    },
    {
      question: "¿Qué respaldo tengo?",
      answer: "Cada inversión se instrumenta con un contrato de mutuo y un pagaré firmados por MyM CREDITOS S.A., la sociedad que opera la marca MyM Inversiones."
    },
    {
      question: "¿Qué diferencia hay entre renta mensual e interés compuesto?",
      answer: "La renta mensual permite cobrar mes a mes. El interés compuesto reinvierte la ganancia para hacer crecer el capital."
    },
    {
      question: "¿En qué se utiliza el capital?",
      answer: "En créditos a comerciantes y emprendedores evaluados por MyM Inversiones."
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
          <h2>Preguntas {' '}<span className="gradient-text">frecuentes</span></h2>
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
