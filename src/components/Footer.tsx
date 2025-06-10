import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-500">
            <a 
              href="#" 
              className="hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
            >
              Política de Privacidade
            </a>
            <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <a 
              href="#" 
              className="hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
            >
              Termos de Uso
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-400 text-sm">
              © 2025 Desafio 30D. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;