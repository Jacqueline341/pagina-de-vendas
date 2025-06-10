import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/90 via-purple-200/80 to-indigo-200/90 z-10"></div>
        <img
          src="/_Как простые шаги меняют ваше здоровье навсегда__.jpg"
          alt="Happy woman with healthy lifestyle"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-300/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-40">
        <img
          src="/ChatGPT_Image_8_de_jun._de_2025__09_10_44-removebg-preview.png"
          alt="Desafio 30D Logo"
          className="h-16 w-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-pink-500 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-pink-600 font-semibold tracking-wide uppercase text-sm">Transformação em 30 Dias</span>
            <Sparkles className="w-8 h-8 text-pink-500 ml-2 animate-spin" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 mb-6 leading-tight">
            Descubra o Segredo para
            <span className="block text-pink-600">Transformar Seu Corpo</span>
            <span className="block">em Apenas 30 Dias</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Com o <strong className="text-purple-600">Desafio 30D</strong>, você vai desinchar, melhorar sua alimentação, 
            cuidar da mente e conquistar uma nova relação com o seu corpo — tudo com um passo a passo simples e realista.
          </p>
          
          <a 
            href="https://pay.kiwify.com.br/XtH5M42"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-pink-700"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              🟣 Quero Começar Agora
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;