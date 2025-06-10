import React from 'react';
import { ArrowRight, Clock, Shield, Zap } from 'lucide-react';

const FinalOffer = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-800/30 via-pink-800/20 to-indigo-800/30"></div>
        <div className="absolute top-20 left-20 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20 animate-pulse">
            <Clock className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white font-bold">⏰ Oferta Limitada</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
            Comece Hoje Mesmo a Sua
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
              Transformação!
            </span>
          </h2>
        </div>
        
        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-white/60 text-2xl line-through mr-4">R$97,00</span>
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-full px-4 py-2">
                  <span className="text-white font-bold">62% OFF</span>
                </div>
              </div>
              <div className="text-6xl md:text-7xl font-bold text-white mb-2">
                R$37<span className="text-3xl">,00</span>
              </div>
              <p className="text-white/80 text-xl">
                Pagamento único • Acesso vitalício
              </p>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center text-white">
                <Zap className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center text-white">
                <Shield className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center text-white">
                <ArrowRight className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                <span>Resultados reais</span>
              </div>
              <div className="flex items-center text-white">
                <Zap className="w-6 h-6 text-pink-400 mr-3 flex-shrink-0" />
                <span>Pagamento seguro</span>
              </div>
            </div>
            
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Por apenas <strong className="text-yellow-300">R$37,00</strong>, você recebe o 
              <strong className="text-pink-300"> Desafio completo + 2 bônus incríveis</strong>.
              <br />
              Acesso imediato e garantia total por 7 dias.
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="relative">
          <a 
            href="https://pay.kiwify.com.br/XtH5M42"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-12 py-6 text-2xl md:text-3xl font-bold text-purple-900 bg-white rounded-full shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100"
          >
            {/* Animated Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            
            <span className="relative flex items-center">
              🟢 Quero Entrar no Desafio 30D Agora
              <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </a>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Security Badges */}
        <div className="flex flex-wrap items-center justify-center mt-12 space-x-8 text-white/60">
          <div className="flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            <span>Pagamento Seguro</span>
          </div>
          <div className="flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            <span>Acesso Instantâneo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalOffer;