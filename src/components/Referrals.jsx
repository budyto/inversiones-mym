import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Coins, Shield } from 'lucide-react';
import './Referrals.css';

const Referrals = () => {
  const points = [
    { icon: <UserPlus size={24} />, text: "No necesitás invertir" },
    { icon: <Users size={24} />, text: "Solo conectás interesados" },
    { icon: <Coins size={24} />, text: "Comisiones mensuales" },
    { icon: <Shield size={24} />, text: "Sistema privado por invitación" },
  ];

  return (
    <section className="section-padding referrals-section" id="referidores">
      <div className="container">
        <div className="referrals-wrapper glass-card gold-border">
          <div className="referrals-content">
            <h2>También podés formar parte como <span className="gradient-text">referidor privado</span></h2>
            <p className="referrals-desc">
              Si conocés personas interesadas en invertir de forma privada, podés conectarlas con MyM Inversiones y generar una comisión mensual mientras el capital permanezca activo.
            </p>
            
            <div className="referrals-grid">
              {points.map((point, idx) => (
                <div key={idx} className="referral-point">
                  <div className="referral-icon">{point.icon}</div>
                  <span>{point.text}</span>
                </div>
              ))}
            </div>

            <div className="referrals-action">
              <a href="#contacto" className="btn-primary">Quiero ser referidor</a>
            </div>
            
            <p className="referrals-note">
              * Los referidores no están autorizados a prometer rentabilidades, tomar dinero ni cerrar operaciones. Solo presentan interesados. Toda operación es evaluada y cerrada directamente por MyM Inversiones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
