import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juliana S.",
      text: "Não foi só sobre alimentação. Mudei minha cabeça também.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Carla R.",
      text: "Fácil de seguir e sem passar fome. Fez sentido pra mim!",
      image: "https://images.pexels.com/photos/3771121/pexels-photo-3771121.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Vanessa M.",
      text: "Aprendi a organizar minha rotina de um jeito leve.",
      image: "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Adriana N.",
      text: "Tudo muito acessível, e os resultados foram além do físico.",
      image: "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Priscila T.",
      text: "Achei que seria mais difícil, mas foi tranquilo e transformador.",
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Renata L.",
      text: "Amei os sucos detox, virou parte do meu dia!",
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/50">
            <Quote className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-bold">💬 Depoimentos Reais</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Quem Já Participou
            <span className="block">Conta Como Foi</span>
          </h2>
        </div>
        
        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 transform hover:scale-105 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover shadow-xl ring-4 ring-purple-200"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-semibold text-gray-800 italic mb-4">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <cite className="text-xl text-purple-600 font-bold">
                  — {testimonials[currentIndex].name}
                </cite>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div 
              key={index}
              className={`group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-purple-400 transform scale-105' : 'hover:-translate-y-1'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 shadow-md"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic group-hover:text-purple-600 transition-colors duration-300">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-500 transform scale-125' 
                  : 'bg-purple-200 hover:bg-purple-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;