import React from 'react';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const id = sectionId.toLowerCase();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToId: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/footer-logo.png"
                alt="NEXFERN Logo"
                className="w-40 h-20 object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              We help startup founders build and validate MVPs without a tech team. From idea to launch, we're your full-stack partner.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/nexfern-tech-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/nexfern.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:team@nexfern.tech"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['services', 'process', 'work', 'team', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-300 hover:text-white transition-colors capitalize"
                  >
                    {id === 'services'
                      ? 'What We Do'
                      : id === 'process'
                      ? 'How It Works'
                      : id === 'work'
                      ? 'Our Work'
                      : id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <a
                  href="mailto:team@nexfern.tech"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  team@nexfern.tech
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <a
                  href="tel:+918790847755"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 8790847755
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 NEXFERN PVT LTD. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
