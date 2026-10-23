import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';
import './Footer.css';

const WHATSAPP = 'https://wa.me/5491125834909';
const INSTAGRAM = 'https://instagram.com/mym.creditos';
const CREDITOS = 'https://www.creditosmym.com';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-header">
              <img src="/assets/images/logo_mym.webp" alt="MyM Inversiones Logo" className="footer-logo" />
              <span className="logo-text">MyM Inversiones</span>
            </div>
            <p className="footer-desc">
              Gestión estratégica de capital y financiamiento comercial. Operaciones sujetas a evaluación de riesgo.
            </p>
            <div className="footer-redes">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="red-btn" aria-label="WhatsApp">
                <WhatsAppIcon size={22} />
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="red-btn" aria-label="Instagram">
                <InstagramIcon size={22} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#planes">Planes</a></li>
              <li><a href="#simulador">Simulador</a></li>
              <li><a href="#referidores">Referidores</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Contacto</h4>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="social-link">
              <WhatsAppIcon size={20} /> +54 9 11 2583-4909
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="social-link">
              <InstagramIcon size={20} /> @mym.creditos
            </a>
            <span className="social-link sin-link">
              <MapPin size={20} /> Ciudad Autónoma de Buenos Aires
            </span>
          </div>

          <a href={CREDITOS} target="_blank" rel="noreferrer" className="footer-creditos">
            <span className="fc-eyebrow">¿Necesitás financiar tu negocio?</span>
            <span className="fc-titulo">MyM Créditos <ArrowUpRight size={18} /></span>
            <span className="fc-texto">Créditos para comerciantes y emprendedores, en el día.</span>
            <span className="fc-url">creditosmym.com</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p className="footer-sociedad">
            MyM Inversiones es una marca de MyM CREDITOS S.A. · CUIT 30-71917577-1
          </p>
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
