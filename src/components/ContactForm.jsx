import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { conPuntos } from '../utils/miles';
import './ContactForm.css';

// Además de abrir WhatsApp, la consulta llega a la app de MyM (pestaña Inversores → Consultas de la web).
// Si ese envío falla, no pasa nada: el WhatsApp se abre igual.
const URL_CONSULTAS = 'https://mym-creditos-81440681742.southamerica-east1.run.app/api/publico/inversiones/consulta';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    monto: '',
    moneda: 'ARS',
    modalidad: 'Renta mensual',
    tipo: 'Inversor',
    plazo: '',
    localidad: '',
    horario: '',
    conocio: '',
    mensaje: '',
    sitio: ''   // campo trampa: invisible para una persona, lo llenan los robots
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    // El monto se ve con punto cada tres cifras mientras se tipea: 10000 → 10.000.
    const valor = e.target.name === 'monto' ? conPuntos(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: valor
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // A la app de MyM, sin esperar la respuesta: si falla, el WhatsApp sale igual.
    try {
      fetch(URL_CONSULTAS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, pagina: window.location.pathname }),
        keepalive: true
      }).catch(() => {});
    } catch (err) { /* sin conexión: queda el WhatsApp */ }
    
    // Prepare WhatsApp Link
    const text = formData.tipo === 'Referidor'
      ? `Hola MyM Inversiones, quiero información para ser referidor. Mi nombre es ${formData.nombre}. ${formData.mensaje ? `Mensaje extra: ${formData.mensaje}` : ''}`
      : `Hola MyM Inversiones, quiero recibir información sobre el sistema privado de inversiones. Mi nombre es ${formData.nombre}, quiero consultar por ${formData.modalidad}, en ${formData.moneda}, por un monto aproximado de ${formData.moneda === 'USD' ? 'US$' : '$'}${formData.monto}${formData.plazo ? `, a ${formData.plazo}` : ''}.${formData.localidad ? ` Soy de ${formData.localidad}.` : ''}${formData.horario ? ` Mejor horario para llamarme: ${formData.horario}.` : ''} ${formData.mensaje ? `Mensaje extra: ${formData.mensaje}` : ''}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5491125834909?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-padding contact-section" id="contacto">
      <div className="container">
        <div className="contact-wrapper glass-card">
          <div className="contact-header">
            <h2>Solicitá información {' '}<span className="gradient-text">privada</span></h2>
            <p>Completá el formulario para derivarte con un asesor por WhatsApp.</p>
          </div>

          {submitted ? (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 size={48} className="text-success" />
              <h3>¡Gracias! Tu consulta está lista.</h3>
              <p>Abrimos WhatsApp con el mensaje armado: envialo y un asesor de MyM Inversiones se va a contactar con vos.</p>
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
                  <input type="text" inputMode="numeric" name="monto" required value={formData.monto} onChange={handleChange} className="form-input" placeholder="Ej: 1.000.000" />
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

              <div className="form-row">
                <div className="form-group">
                  <label>Plazo que te interesa</label>
                  <select name="plazo" value={formData.plazo} onChange={handleChange} className="form-input select-input">
                    <option value="">Todavía no sé</option>
                    <option value="4 meses">4 meses</option>
                    <option value="8 meses">8 meses</option>
                    <option value="12 meses">12 meses</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Localidad (Opcional)</label>
                  <input type="text" name="localidad" value={formData.localidad} onChange={handleChange} className="form-input" placeholder="Ej: Lanús" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Mejor horario para llamarte (Opcional)</label>
                  <select name="horario" value={formData.horario} onChange={handleChange} className="form-input select-input">
                    <option value="">Cualquiera</option>
                    <option value="Mañana">Mañana</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noche">Noche</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>¿Cómo nos conociste? (Opcional)</label>
                  <select name="conocio" value={formData.conocio} onChange={handleChange} className="form-input select-input">
                    <option value="">Elegí una opción</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="TikTok">TikTok</option>
                    <option value="Google">Google</option>
                    <option value="Me lo recomendaron">Me lo recomendaron</option>
                    <option value="Soy cliente de MyM">Soy cliente de MyM</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              {/* Campo trampa: no se ve ni se tabula; si viene lleno, es un robot. */}
              <input type="text" name="sitio" value={formData.sitio} onChange={handleChange} tabIndex="-1" autoComplete="off" aria-hidden="true"
                style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', opacity: 0 }} />

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
