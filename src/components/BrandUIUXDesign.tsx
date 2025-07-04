import React from 'react';
import { Palette, Users, Layers, Smartphone, Eye, Pen, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BrandUIUXDesign = () => {
  const navigate = useNavigate();

  const processSteps = [
    {
      number: '01',
      icon: <Target className="h-8 w-8" />,
      title: 'Brand Discovery',
      description: 'We immerse ourselves in your vision, values, and audience to create a unique brand strategy that truly represents you.'
    },
    {
      number: '02',
      icon: <Users className="h-8 w-8" />,
      title: 'UI/UX Research & Wireframing',
      description: 'We map user journeys and create low-fidelity wireframes to build an intuitive and logical structure for your application.'
    },
    {
      number: '03',
      icon: <Palette className="h-8 w-8" />,
      title: 'High-Fidelity Visual Design',
      description: 'This is where your brand comes to life. We design visually stunning, pixel-perfect mockups of your product\'s interface.'
    },
    {
      number: '04',
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Prototyping & Design System Delivery',
      description: 'We create interactive prototypes for user testing and deliver a comprehensive design system with all assets and guidelines for your developers.'
    }
  ];

  const services = [
    {
      icon: <Pen className="h-8 w-8" />,
      title: 'Brand Identity',
      description: 'We develop everything you need to launch your brand: logo design, color palette, typography, and a comprehensive brand style guide.'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'We focus on creating beautiful and intuitive interfaces that are easy to navigate, reduce friction, and keep your users engaged.'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Interactive Prototyping',
      description: 'We build clickable prototypes that simulate the final product, allowing for effective user testing and stakeholder feedback before development.'
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: 'Scalable Design Systems',
      description: 'We create a reusable library of UI components and guidelines that ensures brand consistency as your product grows and evolves.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create a Brand They'll Remember and a 
              <span className="text-green-600"> Product They'll Love</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We craft compelling brand identities and design stunning, user-centric interfaces that make your 
              digital product stand out from the competition.
            </p>
            <div className="flex justify-center mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg"></div>
                  <div className="w-16 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-gray-600" />
                  </div>
                </div>
                <p className="text-gray-600 text-center">From brand identity to user interface</p>
              </div>
            </div>
            <button
            onClick={() => navigate('/', { state: { scrollToId: 'contact' } })}
             className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
             Start Your Design Project
            </button>


          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Does your product's look and feel match its potential?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A powerful product can fail if it's confusing to use or has a weak brand presence. In a crowded market, 
              exceptional design isn't a luxury—<span className="text-green-600 font-semibold">it's a core competitive advantage</span> that builds trust and drives user adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Process Fueled by Empathy and Creativity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our design methodology combines user research with creative excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                      <div className="text-green-600">{step.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Full-Spectrum Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From brand strategy to interactive prototypes, we handle every aspect of your design needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                      <div className="text-green-600">{service.icon}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Design That Speaks to Your Users
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every pixel serves a purpose, every interaction tells a story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="h-40 bg-white rounded-lg shadow-sm mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-20 mx-auto mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-16 mx-auto"></div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Clean & Minimal</h3>
              <p className="text-gray-600 text-sm">Focused interfaces that eliminate distractions</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
              <div className="h-40 bg-white rounded-lg shadow-sm mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-24 mx-auto mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-20 mx-auto"></div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">User-Centered</h3>
              <p className="text-gray-600 text-sm">Designed with your users' needs in mind</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl">
              <div className="h-40 bg-white rounded-lg shadow-sm mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl mx-auto mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-22 mx-auto mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-18 mx-auto"></div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Brand Consistent</h3>
              <p className="text-gray-600 text-sm">Every element reinforces your brand identity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to craft an unforgettable brand experience?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's create a design that not only looks beautiful but drives real business results
          </p>
          <button
           onClick={() => navigate('/', { state: { scrollToId: 'contact' } })}
           className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
         Start Your Design Project
          </button>

        </div>
      </section>
    </div>
  );
};

export default BrandUIUXDesign;
