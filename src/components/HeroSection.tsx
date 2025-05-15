
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-mkw-secondary to-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mkw-neutral mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Sua Casa <span className="text-mkw-primary">Livre de Pragas</span> HOJE!
            </h1>
            <p className="text-xl text-mkw-neutral-light mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Eliminamos baratas, ratos, cupins e muito mais. Orçamento rápido e sem compromisso pelo WhatsApp!
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <WhatsAppButton />
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-mkw-primary rounded-lg blur opacity-20 animate-pulse-subtle"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 22V12h6v10" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
