import React from 'react';
import { Gift, Coffee, Shield } from 'lucide-react';

const Bonuses = () => {
  const bonuses = [
    {
      icon: <Gift className="w-12 h-12 text-pink-500" />,
      title: "20 Receitas Low Carb",
      description: "Práticas, saborosas e acessíveis",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: <Coffee className="w-12 h-12 text-green-500" />,
      title: "10 Receitas de Sucos Detox",
      description: "Naturais, refrescantes e desintoxicantes",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Garantia de 7 dias",
      description: "Se não se adaptar, seu dinheiro de volta",
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <span className="text-white font-bold text-lg">🎁 Bônus Exclusivos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Você Ainda Recebe Estes
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              Bônus Exclusivos
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${bonus.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}></div>
              
              <div className="relative z-10 text-center">
                <div className={`w-24 h-24 bg-gradient-to-r ${bonus.gradient} rounded-3xl shadow-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  {bonus.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                  {bonus.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  {bonus.description}
                </p>
              </div>
              
              {/* Floating Particles Effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;