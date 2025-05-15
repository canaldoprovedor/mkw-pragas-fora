
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mkw-neutral text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MKW Dedetizadora</h3>
            <p className="mb-2">CNPJ: XX.XXX.XXX/0001-XX</p>
            <p className="mb-2">WhatsApp: (61) 98585-1689</p>
            <p className="mb-2">Email: contato@mkwdedetizadora.com.br</p>
            <p className="mb-4">
              <strong>Área de Atendimento:</strong> Brasília - DF e Entorno
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>Dedetização de Baratas</li>
              <li>Desratização (Controle de Ratos)</li>
              <li>Descupinização (Controle de Cupins)</li>
              <li>Controle de Formigas</li>
              <li>Controle de Mosquitos</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-sm text-gray-400">
            Serviços de dedetização realizados por profissionais qualificados. Utilizamos exclusivamente produtos registrados e seguros para o ambiente e seus ocupantes.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            © {currentYear} MKW Dedetizadora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
