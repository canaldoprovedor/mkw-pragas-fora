
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'MKW Dedetizadora | Controle de Pragas em Brasília - DF';

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Serviço de dedetização profissional em Brasília - DF. Elimine pragas com segurança e eficácia. Fale conosco via WhatsApp para um orçamento rápido e sem compromisso!');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5561985851689?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20dedetização."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
        aria-label="Contato por WhatsApp"
      >
        <svg 
          className="w-8 h-8" 
          fill="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="font-bold text-xl md:text-2xl text-mkw-primary">
            MKW Dedetizadora
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#servicos" className="text-mkw-neutral-light hover:text-mkw-primary transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="text-mkw-neutral-light hover:text-mkw-primary transition-colors">Por Que Nos Escolher</a></li>
              <li><a href="#depoimentos" className="text-mkw-neutral-light hover:text-mkw-primary transition-colors">Depoimentos</a></li>
            </ul>
          </nav>
          <a 
            href="https://wa.me/5561985851689"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mkw-accent hover:bg-opacity-90 text-white px-4 py-2 rounded-md text-sm font-semibold hidden md:block"
          >
            Contato WhatsApp
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
