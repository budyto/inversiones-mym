import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIsIt from './components/WhatIsIt';
import HowItWorks from './components/HowItWorks';
import PlansARS from './components/PlansARS';
import PlansUSD from './components/PlansUSD';
import Simulator from './components/Simulator';
import Comparison from './components/Comparison';
import Referrals from './components/Referrals';
import Trust from './components/Trust';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsIt />
        <HowItWorks />
        <PlansARS />
        <PlansUSD />
        <Simulator />
        <Comparison />
        <Referrals />
        <Trust />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
