import React from 'react';
import { Phone, FileText, Rocket, BarChart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Free Discovery Call',
      description: 'We understand your vision, goals, and requirements'
    },
    {
      icon: FileText,
      title: 'Project Planning',
      description: 'Detailed roadmap, timeline, and resource allocation'
    },
    {
      icon: Rocket,
      title: 'MVP + Branding Delivery',
      description: 'Build and design your product with regular updates'
    },
    {
      icon: BarChart,
      title: 'Launch & Growth Consulting',
      description: 'Go-to-market strategy and ongoing optimization'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Idea to Impact in 4 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process gets you from concept to launch faster than traditional agencies
          </p>
        </div>

        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1 relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4 w-64 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{step.description}</p>
                </div>
                
                <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-primary-200">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary-200 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 animate-slide-right" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                  <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-primary-700 font-medium">Average timeline: 60-90 days</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;