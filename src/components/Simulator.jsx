import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import './Simulator.css';

const Simulator = () => {
  const [currency, setCurrency] = useState('ARS');
  const [modality, setModality] = useState('mensual');
  const [amount, setAmount] = useState(1000000);
  const [months, setMonths] = useState(6);
  const [rate, setRate] = useState(0.05);

  const plansOptions = {
    ARS: {
      mensual: [
        { label: 'Básico (5%)', value: 0.05 },
        { label: 'Intermedio (6%)', value: 0.06 },
        { label: 'Premium (7%)', value: 0.07 },
      ],
      compuesto: [
        { label: 'Smart (4%)', value: 0.04 },
        { label: 'Pro (5%)', value: 0.05 },
        { label: 'Elite (6%)', value: 0.06 },
      ]
    },
    USD: {
      mensual: [
        { label: 'Básico (4%)', value: 0.04 },
        { label: 'Intermedio (5%)', value: 0.05 },
        { label: 'Premium (6%)', value: 0.06 },
      ],
      compuesto: [
        { label: 'Smart (3%)', value: 0.03 },
        { label: 'Pro (4%)', value: 0.04 },
        { label: 'Elite (5%)', value: 0.05 },
      ]
    }
  };

  useEffect(() => {
    // Reset rate to the first option when changing currency or modality
    setRate(plansOptions[currency][modality][0].value);
    
    // Adjust default amount format
    if (currency === 'USD' && amount > 100000) {
      setAmount(1000);
    } else if (currency === 'ARS' && amount < 100000) {
      setAmount(1000000);
    }
  }, [currency, modality]);

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
                <label>Plazo: {months} meses</label>
                <input 
                  type="range" 
                  className="range-input"
                  min="1" 
                  max="12" 
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                />
                <div className="range-labels">
                  <span>1 mes</span>
                  <span>12 meses</span>
                </div>
              </div>

              <div className="form-group">
                <label>Plan de rentabilidad</label>
                <select 
                  className="select-input"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                >
                  {plansOptions[currency][modality].map((plan, idx) => (
                    <option key={idx} value={plan.value}>{plan.label}</option>
                  ))}
                </select>
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
