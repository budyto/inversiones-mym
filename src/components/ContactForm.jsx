import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    monto: '',
    moneda: 'ARS',
    modalidad: 'Renta mensual',
    tipo: 'Inversor',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Prepare WhatsApp Link
    const text = `Hola MyM Inversiones, quiero recibir información sobre el sistema privado de inversiones. Mi nombre es ${formData.nombre}, quiero consultar por ${formData.modalidad}, en ${formData.moneda}, por un monto aproximado de ${formData.monto}. ${formData.mensaje ? `Mensaje extra: ${formData.mensaje}` : ''}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5491125834909?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-padding contact-section" id="contacto">
      <div className="container">
        <div className="contact-wrapper glass-card">
          <div className="contact-header">
            <h2>Solicitá información <span className="gradient-text">privada</span></h2>
            <p>Completá el formulario para derivarte con un asesor por WhatsApp.</p>
          </div>

          {submitted ? (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 size={48} className="text-success" />
              <h3>¡Gracias! Recibimos tu consulta.</h3>
              <p>Un asesor de MyM Inversiones se va a contactar con vos. También abrimos WhatsApp para que puedas enviarnos el mensaje directo.</p>
              <button className="btn-secondary mt-4" onClick={() => setSubmitted(false)}>Enviar otra consulta</button>
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Nombre y apellido *</label>
                  <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label>Teléfono / WhatsApp *</label>
                  <input type="tel" name="telefono" required value={formData.telefono} onChange={handleChange} className="form-input" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email (Opcional)</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label>Soy *</label>
                  <select name="tipo" value={formData.tipo} onChange={handleChange} className="form-input select-input">
                    <option value="Inversor">Inversor</option>
                    <option value="Referidor">Referidor</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Monto estimado *</label>
                  <input type="text" name="monto" required value={formData.monto} onChange={handleChange} className="form-input" placeholder="Ej: 1000000" />
                </div>
                <div className="form-group">
                  <label>Moneda *</label>
                  <select name="moneda" value={formData.moneda} onChange={handleChange} className="form-input select-input">
                    <option value="ARS">Pesos (ARS)</option>
                    <option value="USD">Dólares (USD)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Modalidad de interés *</label>
                <select name="modalidad" value={formData.modalidad} onChange={handleChange} className="form-input select-input">
                  <option value="Renta mensual">Renta mensual</option>
                  <option value="Interés compuesto">Interés compuesto</option>
                  <option value="Quiero asesoramiento">Quiero asesoramiento</option>
                </select>
              </div>

              <div className="form-group">
                <label>Mensaje adicional (Opcional)</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} className="form-input" rows="3"></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn">
                Enviar consulta <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
