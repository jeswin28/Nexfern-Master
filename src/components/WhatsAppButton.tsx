import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/+918790847755?text=Hi! I\'d like to discuss my startup idea with NEXFERN.', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6  right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:block text-sm font-medium">Chat With Us</span>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
    </button>
  );
};

export default WhatsAppButton;