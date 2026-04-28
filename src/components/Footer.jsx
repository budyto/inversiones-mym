import React from 'react';
import { MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-icon mb-4">M</div>
            <span className="logo-text">MyM Inversiones</span>
            <p className="footer-desc mt-2">
              Sistema privado de financiación comercial. Información sujeta a evaluación previa.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#planes">Planes</a></li>
              <li><a href="#simulador">Simulador</a></li>
              <li><a href="#referidores">Referidores</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Contacto</h4>
            <a href="https://instagram.com/mym.creditos" target="_blank" rel="noreferrer" className="social-link">
              @mym.creditos
            </a>
            <a href="https://wa.me/5491125834909" target="_blank" rel="noreferrer" className="social-link">
              <MessageCircle size={20} /> +54 9 11 2583-4909
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="disclaimer">
            La información publicada en esta página es de carácter informativo y no constituye oferta pública de valores, asesoramiento financiero, bancario, bursátil ni captación masiva de ahorro público. Toda operación queda sujeta a evaluación privada, aceptación de condiciones, documentación correspondiente y acuerdo entre partes.
          </p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} MyM Inversiones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
