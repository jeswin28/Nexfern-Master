import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Work from './components/Work';
import WhyNexfern from './components/WhyNexfern';
import Team from './components/Team';
import Contact from './components/Contact';
import MVPDevelopment from './components/MVPDevelopment';
import BrandUIUXDesign from './components/BrandUIUXDesign';
import GoToMarketStrategy from './components/GoToMarketStrategy';
import CaseStudy from './components/casestudy';

// ScrollToTop component scrolls window to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const el = document.getElementById('contact');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
    if (location.state?.scrollToId) {
      const el = document.getElementById(location.state.scrollToId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <>
      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="process"><Process /></section>
      <section id="work"><Work /></section>
      <section id="why-nexfern"><WhyNexfern /></section>
      <section id="team"><Team /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this here */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/services/mvp-development" element={<MVPDevelopment />} />
          <Route path="/services/brand-uiux-design" element={<BrandUIUXDesign />} />
          <Route path="/services/go-to-market-strategy" element={<GoToMarketStrategy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
