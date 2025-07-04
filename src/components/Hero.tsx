import React, { useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll helper: if not on home, navigate there with state, else scroll directly
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToId: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // On mount, if location.state.scrollToId is set, scroll to that section once
  useEffect(() => {
    if (location.state?.scrollToId) {
      const el = document.getElementById(location.state.scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the history state so it won't scroll again on back/forward navigation
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build. Validate. Launch —{' '}
                <span className="text-primary-500">Without a Tech Team.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                NEXFERN helps you convert ideas into reality through MVPs, product strategy, and design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary-500 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('process')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-primary-500 hover:text-primary-500 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Play className="w-5 h-5" />
                <span>How It Works</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>MVP Ready in 60-90 days</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Full-stack solutions</span>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-slide-right">
            <div className="relative bg-gradient-to-br from-primary-100 to-teal-100 rounded-3xl p-8 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-teal-500/10 rounded-3xl"></div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Developer working on startup MVP"
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">MVP Launched</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-pulse-slow">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Validated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
