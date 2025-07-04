import React from 'react';
import { Lightbulb, Search, Palette, Code, Database, Cloud, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MVPDevelopment = () => {
  const navigate = useNavigate();

  const processSteps = [
    {
      number: '01',
      icon: <Search className="h-8 w-8" />,
      title: 'Discovery & Strategy',
      description: 'We start by deeply understanding your idea, target users, and business goals to define the core features for a successful MVP.'
    },
    {
      number: '02',
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX & Prototyping',
      description: 'We design an intuitive user interface and create interactive prototypes so you can see and feel your product before any code is written.'
    },
    {
      number: '03',
      icon: <Code className="h-8 w-8" />,
      title: 'Agile Development Sprints',
      description: 'We build your MVP in manageable two-week sprints, providing you with regular updates and demos to ensure we are always aligned with your vision.'
    },
    {
      number: '04',
      icon: <Cloud className="h-8 w-8" />,
      title: 'Deployment & Handover',
      description: 'We handle the complete cloud deployment on scalable infrastructure and provide a clean, well-documented codebase for future development.'
    }
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Full-stack Development',
      description: 'We handle both the user-facing front-end and the powerful server-side back-end to create a complete and seamless application.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'API Integrations',
      description: 'We integrate essential third-party services for payments, analytics, social logins, and more, saving you time and resources.'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Custom Database Design',
      description: 'We architect a robust and scalable database schema tailored to your application\'s specific needs, ensuring data integrity and performance.'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Deployment',
      description: 'We deploy your application on leading cloud platforms like AWS or Vercel, configured for security, scalability, and reliability.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From Idea to Functional MVP, 
              <span className="text-green-600"> Faster Than You Think</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We specialize in turning your vision into a high-quality, scalable Minimum Viable Product. 
              Launch quickly, gather feedback, and start your journey to product-market fit.
            </p>
            <div className="flex justify-center mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md">
                <div className="flex items-center justify-center mb-4">
                  <Lightbulb className="h-16 w-16 text-green-600" />
                </div>
                <p className="text-gray-600 text-center">From wireframe to deployed product</p>
              </div>
            </div>
            <button
           onClick={() => navigate('/', { state: { scrollToId: 'contact' } })}
           className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
        Get a Free MVP Consultation
          </button> 
            
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Have a brilliant idea but not the resources to build it?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The path from a concept to a functional product is filled with challenges: finding the right technical talent, 
              managing budgets, and avoiding endless development cycles. Many great ideas fail before they even launch. 
              <span className="text-green-600 font-semibold"> We're here to change that.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Agile Path to Your Product Launch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that transforms ideas into market-ready products
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
              What's Included in Your MVP Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to launch a successful product, from concept to deployment
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to build the first version of your big idea?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of founders who've launched successful products with NEXFERN
          </p><button
           onClick={() => navigate('/', { state: { scrollToId: 'contact' } })}
           className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
        Discuss Your Project
          </button> 
          
        </div>
      </section>
    </div>
  );
};

export default MVPDevelopment;
