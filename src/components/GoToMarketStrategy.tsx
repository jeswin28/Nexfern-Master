import React from 'react';
import { TrendingUp, Target, Rocket, BarChart3, Search, FileText, Megaphone, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GoToMarketStrategy = () => {
  const navigate = useNavigate();

  const processSteps = [
    {
      number: '01',
      icon: <Search className="h-8 w-8" />,
      title: 'Market & Competitor Analysis',
      description: 'We dive deep into your industry, target audience, and competitive landscape to identify your unique value proposition and market opportunities.'
    },
    {
      number: '02',
      icon: <FileText className="h-8 w-8" />,
      title: 'Strategic Plan Formulation',
      description: 'We work with you to craft a comprehensive plan that outlines your positioning, messaging, pricing, and channel strategy.'
    },
    {
      number: '03',
      icon: <Rocket className="h-8 w-8" />,
      title: 'Launch Campaign Execution',
      description: 'We help you plan and execute a high-impact launch campaign designed to generate initial buzz, attract early adopters, and gather crucial feedback.'
    },
    {
      number: '04',
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growth Consulting & Optimization',
      description: 'Post-launch, we provide ongoing consulting to help you analyze data, optimize your funnels, and build a sustainable engine for growth.'
    }
  ];

  const services = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'In-Depth Market Research',
      description: 'We provide actionable insights into your customer segments, market size, and competitor strategies so you can make data-informed decisions.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Go-to-Market Strategy Planning',
      description: 'We deliver a complete strategic document covering your positioning, messaging framework, sales channels, and marketing roadmap.'
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: 'Targeted Launch Campaigns',
      description: 'We help you design and manage campaigns on the right channels to reach your ideal first customers effectively.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Investor-Ready Growth Consulting',
      description: 'We help you build the narrative and metrics to create a compelling business case for potential investors.'
    }
  ];

  const metrics = [
    { number: '250+', label: 'Successful Launches' },
    { number: '85%', label: 'Hit Target Metrics' },
    { number: '$2.5M', label: 'Avg. Funding Raised' },
    { number: '6 months', label: 'Avg. Time to PMF' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Launch with Confidence. Position Your Product for 
              <span className="text-green-600"> Market Success</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Building a great product is only half the battle. We help you develop and execute a data-driven 
              go-to-market strategy to validate your idea and capture investor attention.
            </p>
            <div className="flex justify-center mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-center">Strategic launch for maximum impact</p>
              </div>
            </div>
            <button
           onClick={() => navigate('/', { state: { scrollToId: 'contact' } })}
           className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
         Book a Strategy Session
          </button> 
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built a great product but struggling to find your first users?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The "if you build it, they will come" mentality is one of the biggest risks for any new venture. 
              Without a clear strategy, even the most innovative products can get lost in the noise. 
              <span className="text-green-600 font-semibold"> A solid go-to-market plan is your roadmap to traction and growth.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{metric.number}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Market Research to Growth Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic framework takes you from launch to sustainable growth
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Services to Amplify Your Launch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive strategy and execution support to maximize your market entry
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

      {/* Strategy Framework Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The NEXFERN Strategy Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that has helped hundreds of startups achieve product-market fit
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discover</h3>
                <p className="text-gray-600">Market research, competitor analysis, and customer discovery to identify opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Position</h3>
                <p className="text-gray-600">Strategic positioning, messaging, and go-to-market plan development</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Execute</h3>
                <p className="text-gray-600">Launch execution, performance tracking, and continuous optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to build your roadmap for success?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the startups that launched successfully and secured funding with our strategic guidance
          </p>
          <button
           onClick={() => navigate('/', { state: { scrollToId: 'contact' } })}
           className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
        Define Your GTM Strategy
          </button> 
        </div>
      </section>
    </div>
  );
};

export default GoToMarketStrategy;
