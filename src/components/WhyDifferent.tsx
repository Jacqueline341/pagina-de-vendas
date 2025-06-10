import React from 'react';
import { Check, Heart, Clock, Brain, Home } from 'lucide-react';

const WhyDifferent = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      text: "Alimentação prática e acessível"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      text: "Orientações simples para rotina real"
    },
    {
      icon: <Brain className="w-8 h-8 text-indigo-500" />,
      text: "Técnicas mentais que funcionam"
    },
    {
      icon: <Home className="w-8 h-8 text-pink-500" />,
      text: "Tudo em um só lugar, sem complicação"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 transform rotate-6 scale-110"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Criado para Mulheres Reais,
            <span className="block">com Rotinas Reais</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Check className="w-6 h-6 text-green-500 absolute" />
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <p className="text-xl text-gray-700 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              <img
                src="/_Как простые шаги меняют ваше здоровье навсегда__.jpg"
                alt="Happy woman with healthy lifestyle"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;