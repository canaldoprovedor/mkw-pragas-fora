
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
                <img 
                  src="/placeholder.svg" 
                  alt="Ambiente protegido contra pragas" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
