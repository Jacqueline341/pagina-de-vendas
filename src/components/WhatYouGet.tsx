import React from 'react';
import { Calendar, ChefHat, Brain, CheckSquare } from 'lucide-react';

const WhatYouGet = () => {
  const items = [
    {
      icon: <Calendar className="w-10 h-10 text-purple-500" />,
      title: "Planejamento alimentar para 30 dias",
      description: "Cardápio completo e detalhado"
    },
    {
      icon: <ChefHat className="w-10 h-10 text-pink-500" />,
      title: "Receitas fáceis e econômicas",
      description: "Pratos deliciosos e acessíveis"
    },
    {
      icon: <Brain className="w-10 h-10 text-indigo-500" />,
      title: "Técnicas de foco e bem-estar",
      description: "Cuide da sua mente e emoções"
    },
    {
      icon: <CheckSquare className="w-10 h-10 text-green-500" />,
      title: "Checklists e planos diários",
      description: "Organização total do seu dia"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-pink-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/50">
            <span className="text-purple-600 font-bold text-lg">📦 Seu Kit Completo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Tudo o Que Você Precisa
            <span className="block">Para Começar Agora</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;