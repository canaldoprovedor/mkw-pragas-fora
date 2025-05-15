
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-mkw-neutral mb-12">
          O Que Nossos Clientes Dizem
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-mkw-primary max-w-3xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-mkw-secondary rounded-full flex items-center justify-center mr-4">
              <span className="text-mkw-primary font-bold text-xl">M</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-mkw-neutral">Maria S.</h4>
              <p className="text-mkw-neutral-light">Brasília, DF</p>
            </div>
            <div className="ml-auto flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className="w-5 h-5 text-yellow-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          <blockquote className="text-xl italic text-mkw-neutral-light">
            "O atendimento da MKW foi excelente e o problema com as baratas foi resolvido muito rapidamente! Equipe profissional, preço justo e o melhor de tudo: não tive mais sinal de pragas. Recomendo a todos."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
