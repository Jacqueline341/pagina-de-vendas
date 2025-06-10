import React from 'react';
import { Zap, Heart, Smile, Utensils, Star } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: "Corpo menos inchado",
      description: "Reduza o inchaço e sinta-se mais leve"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Mais energia no dia a dia",
      description: "Desperte com disposição total"
    },
    {
      icon: <Smile className="w-12 h-12 text-green-500" />,
      title: "Redução da ansiedade",
      description: "Controle a compulsão alimentar"
    },
    {
      icon: <Utensils className="w-12 h-12 text-purple-500" />,
      title: "Organização alimentar",
      description: "Rotina estruturada e simples"
    },
    {
      icon: <Star className="w-12 h-12 text-pink-500" />,
      title: "Mais autoestima e leveza",
      description: "Reconecte-se com seu corpo"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-600 font-semibold">🌿 Seus Benefícios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Equilíbrio, Bem-Estar
            <span className="block">e Consistência</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100"
            >
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-purple-100">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;