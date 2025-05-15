
import React from 'react';

const WhyChooseUsSection = () => {
  const differentials = [
    {
      title: "Atendimento Rápido e Personalizado",
      description: "Fale diretamente com nossos especialistas pelo WhatsApp e tenha respostas e soluções na hora.",
      icon: (
        <svg className="w-12 h-12 text-mkw-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Técnicas Seguras e Eficazes",
      description: "Utilizamos produtos registrados, seguros para sua família e animais de estimação, com resultados garantidos contra as pragas.",
      icon: (
        <svg className="w-12 h-12 text-mkw-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Equipe Qualificada e Experiente",
      description: "Conte com profissionais experientes para identificar a origem do problema e aplicar a solução mais eficiente.",
      icon: (
        <svg className="w-12 h-12 text-mkw-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Preço Justo e Transparente",
      description: "Oferecemos orçamentos claros, detalhados e sem surpresas desagradáveis.",
      icon: (
        <svg className="w-12 h-12 text-mkw-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="diferenciais" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-mkw-neutral mb-4">
          Por Que Escolher a MKW Dedetizadora?
        </h2>
        <p className="text-center text-mkw-neutral-light max-w-3xl mx-auto mb-12">
          Seu ambiente protegido e saudável com a melhor equipe de controle de pragas de Brasília - DF e Entorno.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((differential, index) => (
            <div 
              key={differential.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                {differential.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-mkw-neutral mb-2">
                  {differential.title}
                </h3>
                <p className="text-mkw-neutral-light">
                  {differential.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
