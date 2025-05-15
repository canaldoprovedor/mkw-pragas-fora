
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-mkw-primary bg-opacity-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-mkw-neutral mb-6">
          Pronto para Acabar com as Pragas de Vez?
        </h2>
        <p className="text-xl text-mkw-neutral-light mb-8 max-w-2xl mx-auto">
          Não espere o problema se agravar e trazer mais transtornos. Nossa equipe de especialistas está pronta para te atender pelo WhatsApp e oferecer a solução mais adequada e eficaz para sua casa ou empresa.
        </p>
        <WhatsAppButton 
          text="FALAR COM ESPECIALISTA NO WHATSAPP" 
          className="mx-auto text-lg"
        />
      </div>
    </section>
  );
};

export default FinalCTA;
