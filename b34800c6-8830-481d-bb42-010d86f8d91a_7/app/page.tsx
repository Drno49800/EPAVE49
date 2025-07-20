'use client';

import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ContactForm from './components/ContactForm';
import CoverageArea from './components/CoverageArea';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CoverageArea />
      <ContactForm />
      <Footer />
    </div>
  );
}