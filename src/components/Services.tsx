import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'MVP Development',
      slug: 'mvp-development',
      description: 'From sketches to functional MVPs. Fast. Affordable. Scalable.',
      features: ['Full-stack development', 'API integrations', 'Database design', 'Cloud deployment']
    },
    {
      icon: Palette,
      title: 'Brand & UI/UX Design',
      slug: 'brand-uiux-design',
      description: 'Crafting identities and stunning interfaces for your digital product.',
      features: ['Brand identity', 'UI/UX design', 'Prototyping', 'Design systems']
    },
    {
      icon: TrendingUp,
      title: 'Go-to-Market & Strategy',
      slug: 'go-to-market-strategy',
      description: 'We help you validate ideas and position them for investor attention.',
      features: ['Market research', 'Strategy planning', 'Launch campaigns', 'Growth consulting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end solutions for startup founders who need to move fast and validate ideas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <service.icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-primary-500 font-medium hover:text-primary-600 transition-colors flex items-center group"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
