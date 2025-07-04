import React from 'react';
import { Layers, Zap, Users, Target } from 'lucide-react';

const WhyNexfern = () => {
  const reasons = [
    {
      icon: Layers,
      title: 'Design + Tech under one roof',
      description: 'No coordination headaches between different agencies'
    },
    {
      icon: Zap,
      title: 'Flexible for early founders',
      description: 'Adaptable solutions that grow with your startup'
    },
    {
      icon: Users,
      title: 'Startup-first mindset',
      description: 'We understand the urgency and constraints of startups'
    },
    {
      icon: Target,
      title: 'Real-world launch experience',
      description: 'Battle-tested strategies from successful launches'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Startup Founders Choose NEXFERN
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another agency. We're startup builders who understand your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-teal-500 rounded-2xl p-8 text-center text-white animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Ready to validate your next big idea?</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Join the founders who've already built and launched with NEXFERN. Your idea deserves a team that moves as fast as you think.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-primary-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyNexfern;