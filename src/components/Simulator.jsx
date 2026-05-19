import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import './Simulator.css';

const Simulator = () => {
  const [currency, setCurrency] = useState('ARS');
  const [modality, setModality] = useState('mensual');
  const [amount, setAmount] = useState(1000000);
  const [months, setMonths] = useState(4);

  const plansOptions = {
    ARS: {
      mensual: [
        { label: 'Básico (3%)', value: 0.03 },
        { label: 'Intermedio (4%)', value: 0.04 },
        { label: 'Premium (5%)', value: 0.05 },
      ],
      compuesto: [
        { label: 'Smart (3.5%)', value: 0.035 },
        { label: 'Pro (4.5%)', value: 0.045 },
        { label: 'Elite (5.5%)', value: 0.055 },
      ]
    },
    USD: {
      mensual: [
        { label: 'Básico (1.5%)', value: 0.015 },
        { label: 'Intermedio (2%)', value: 0.02 },
        { label: 'Premium (2.5%)', value: 0.025 },
      ],
      compuesto: [
        { label: 'Smart (1.8%)', value: 0.018 },
        { label: 'Pro (2.3%)', value: 0.023 },
        { label: 'Elite (2.8%)', value: 0.028 },
      ]
    }
  };

  useEffect(() => {
    // Adjust default amount format
    if (currency === 'USD' && amount > 100000) {
      setAmount(1000);
    } else if (currency === 'ARS' && amount < 100000) {
      setAmount(1000000);
    }
  }, [currency, modality]);

  const getPlanDetails = () => {
    let index = 0;
    if (months === 8) index = 1;
    if (months === 12) index = 2;
    return plansOptions[currency][modality][index];
  };

  const selectedPlan = getPlanDetails();
  const rate = selectedPlan.value;

  const formatCurrency = (val) => {
    if (currency === 'ARS') {
      return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(val);
    } else {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    }
  };

  // Calculations
  let rentaMensual = 0;
  let gananciaTotal = 0;
  let capitalFinal = 0;
  let crecimiento = 0;

  if (modality === 'mensual') {
    rentaMensual = amount * rate;
    gananciaTotal = rentaMensual * months;
    capitalFinal = amount + gananciaTotal;
  } else {
    capitalFinal = amount * Math.pow(1 + rate, months);
    gananciaTotal = capitalFinal - amount;
    crecimiento = ((capitalFinal / amount) - 1) * 100;
  }

  return (
    <section className="section-padding simulator-section" id="simulador">
      <div className="container">
        <div className="simulator-header">
          <h2>Proyección de {' '}<span className="gradient-text">capital</span></h2>
          <p>Analizá el rendimiento estimado de tu posición según la modalidad seleccionada.</p>
        </div>

        <div className="simulator-wrapper glass-card dashboard-ui">
          <div className="simulator-grid">
            {/* Controls */}
            <div className="simulator-controls">
              
              <div className="form-group">
                <label>Moneda</label>
                <div className="radio-group">
                  <button 
                    className={`radio-btn ${currency === 'ARS' ? 'active' : ''}`}
                    onClick={() => setCurrency('ARS')}
                  >
                    Pesos (ARS)
                  </button>
                  <button 
                    className={`radio-btn ${currency === 'USD' ? 'active' : ''}`}
                    onClick={() => setCurrency('USD')}
                  >
                    Dólares (USD)
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Modalidad</label>
                <div className="radio-group">
                  <button 
                    className={`radio-btn ${modality === 'mensual' ? 'active' : ''}`}
                    onClick={() => setModality('mensual')}
                  >
                    Renta Mensual
                  </button>
                  <button 
                    className={`radio-btn ${modality === 'compuesto' ? 'active' : ''}`}
                    onClick={() => setModality('compuesto')}
                  >
                    Interés Compuesto
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Monto a invertir ({currency})</label>
                <input 
                  type="number" 
                  className="number-input"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  min="0"
                />
              </div>

              <div className="form-group">
                <label>Plazo de inversión</label>
                <div className="radio-group">
                  <button 
                    className={`radio-btn ${months === 4 ? 'active' : ''}`}
                    onClick={() => setMonths(4)}
                  >
                    4 meses
                  </button>
                  <button 
                    className={`radio-btn ${months === 8 ? 'active' : ''}`}
                    onClick={() => setMonths(8)}
                  >
                    8 meses
                  </button>
                  <button 
                    className={`radio-btn ${months === 12 ? 'active' : ''}`}
                    onClick={() => setMonths(12)}
                  >
                    12 meses
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Plan Asignado</label>
                <div className="select-input" style={{backgroundColor: 'rgba(212, 175, 55, 0.1)', borderColor: 'var(--gold-main)', color: 'var(--gold-main)'}}>
                  {selectedPlan.label}
                </div>
              </div>

            </div>

            {/* Results */}
            <div className="simulator-results">
              <div className="results-header">
                <Calculator size={24} className="text-gold" />
                <h3>Resultados estimados</h3>
              </div>

              <div className="results-content">
                <div className="result-row">
                  <span>Capital inicial</span>
                  <strong>{formatCurrency(amount)}</strong>
                </div>

                {modality === 'mensual' && (
                  <div className="result-row highlight">
                    <span>Renta mensual estimada</span>
                    <strong className="text-gold">{formatCurrency(rentaMensual)}</strong>
                  </div>
                )}

                <div className="result-row">
                  <span>Ganancia total ({months} meses)</span>
                  <strong className="text-success">+{formatCurrency(gananciaTotal)}</strong>
                </div>

                {modality === 'compuesto' && (
                  <div className="result-row">
                    <span>Crecimiento porcentual</span>
                    <strong className="text-success">+{crecimiento.toFixed(2)}%</strong>
                  </div>
                )}

                <div className="result-row total">
                  <span>Capital final estimado</span>
                  <strong>{formatCurrency(capitalFinal)}</strong>
                </div>
              </div>
              
              <div className="results-action">
                <a href="#contacto" className="btn-primary" style={{width: '100%'}}>Solicitar evaluación de perfil</a>
              </div>
            </div>
          </div>
          
          <p className="simulator-note">
            * Información de carácter proyectivo. Toda asignación de capital está sujeta a análisis de riesgo y disponibilidad comercial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
