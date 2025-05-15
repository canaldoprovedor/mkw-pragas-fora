
import React from 'react';
import { Bug, Rat, Spray, Biohazard } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const ServicesSection = () => {
  const services = [
    {
      icon: Bug,
      title: 'Dedetização de Baratas',
      description: 'Elimine infestações de baratas de forma eficaz e proteja a saúde da sua família.'
    },
    {
      icon: Rat,
      title: 'Desratização',
      description: 'Controle de ratos e roedores com técnicas seguras e eficientes.'
    },
    {
      icon: Spray,
      title: 'Controle de Formigas',
      description: 'Combate especializado contra diferentes espécies de formigas.'
    },
    {
      icon: Biohazard,
      title: 'Controle de Mosquitos',
      description: 'Proteção contra dengue, zika e outros vetores prejudiciais à saúde.'
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-mkw-neutral mb-4">
          Combatemos Diversas Pragas Urbanas Comuns
        </h2>
        <p className="text-center text-mkw-neutral-light max-w-3xl mx-auto mb-12">
          Serviços profissionais de controle de pragas para sua casa ou empresa.
          Soluções seguras e eficazes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-mkw-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <service.icon className="w-8 h-8 text-mkw-primary" />
              </div>
              <h3 className="text-xl font-semibold text-mkw-neutral mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-mkw-neutral-light text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <WhatsAppButton 
            text="SOLICITE SEU ORÇAMENTO DETALHADO" 
            prefilledMessage="Olá! Gostaria de um orçamento detalhado para controle de pragas."
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
