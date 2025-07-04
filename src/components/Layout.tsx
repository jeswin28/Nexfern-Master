import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
