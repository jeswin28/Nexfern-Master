import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll or navigate + scroll based on current path
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToId: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Navigation items with label overrides
  const navItems: { id: string; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'What We Do' },
    { id: 'process', label: 'How It Works' },
    { id: 'work', label: 'Our Work' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center h-full py-2 cursor-pointer"
            onClick={() => navigate('/')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') navigate('/');
            }}
            aria-label="Go to homepage"
          >
            <img
              src="/logo.png"
              alt="Nexfern Logo"
              className="max-h-16 sm:max-h-20 object-contain"
              style={{ marginTop: '2px' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Primary navigation">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-700 hover:text-primary-500 transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              Let's Build
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-500 w-full text-left"
                >
                  {label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                Let's Build
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
