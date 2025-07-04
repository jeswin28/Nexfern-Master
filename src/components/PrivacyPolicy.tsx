import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Eye, 
  Database, 
  Share2, 
  Cookie, 
  Clock, 
  Lock, 
  Users, 
  FileText, 
  Mail, 
  ChevronUp, 
  Menu, 
  X, 
  MessageCircle,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const sections: Section[] = [
  { id: 'introduction', title: 'Introduction', icon: FileText },
  { id: 'scope', title: 'Scope of Policy', icon: Eye },
  { id: 'collection', title: 'Information We Collect', icon: Database },
  { id: 'usage', title: 'How We Use Your Information', icon: Users },
  { id: 'sharing', title: 'Sharing and Disclosure', icon: Share2 },
  { id: 'cookies', title: 'Cookies and Tracking', icon: Cookie },
  { id: 'retention', title: 'Data Retention', icon: Clock },
  { id: 'security', title: 'Security Measures', icon: Lock },
  { id: 'children', title: 'Children\'s Privacy', icon: Shield },
  { id: 'links', title: 'Third-Party Links', icon: ExternalLink },
  { id: 'updates', title: 'Policy Updates', icon: FileText },
  { id: 'contact', title: 'Contact Us', icon: Mail }
];

interface PrivacyPolicyProps {
  companyName?: string;
  contactEmail?: string;
  supportEmail?: string;
  dpoEmail?: string;
  effectiveDate?: string;
  lastUpdated?: string;
  onContactClick?: () => void;
}

export default function PrivacyPolicy({
  companyName = "NEXFERN TECH & MARKETING",
  contactEmail = "team@nexfern.tech",
  supportEmail = "support@nexfern.tech",
  dpoEmail = "jeswin@nexfern.tech",
  effectiveDate = "July 1, 2025",
  lastUpdated = "July 1, 2025",
  onContactClick
}: PrivacyPolicyProps) {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      
      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsTocOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-50 via-emerald-50 to-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-500 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparency, trust, and your data — clearly explained.
          </p>
          <div className="mt-8 text-sm text-gray-500">
            Effective Date: {effectiveDate} | Last Updated: {lastUpdated}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Desktop Table of Contents */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Menu className="w-5 h-5 mr-2" />
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center text-sm ${
                        activeSection === section.id
                          ? 'bg-sky-100 text-sky-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
                      {section.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile TOC Toggle */}
        <div className="lg:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsTocOpen(!isTocOpen)}
            className="bg-white rounded-full p-3 shadow-lg border border-gray-200"
          >
            {isTocOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile TOC Overlay */}
        {isTocOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsTocOpen(false)}>
            <div className="bg-white w-80 h-full p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Menu className="w-5 h-5 mr-2" />
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center text-sm ${
                        activeSection === section.id
                          ? 'bg-sky-100 text-sky-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
                      {section.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
            
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Welcome to {companyName}. We are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your personal information.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>NEXFERN TECH</strong> specializes in custom software development, mobile and web applications, and tech-based digital solutions for startups and SMEs. <strong>NEXFERN MARKETING</strong> provides comprehensive digital marketing, branding, content management, and campaign execution services for brands.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This Privacy Policy explains how we handle your personal data when you interact with our services, websites, or platforms.
                </p>
              </div>
            </section>

            {/* Scope of Policy */}
            <section id="scope" className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Scope of Policy</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  This Privacy Policy applies to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Our company websites and web applications</li>
                  <li>Mobile applications developed by NEXFERN TECH</li>
                  <li>Digital marketing campaigns managed by NEXFERN MARKETING</li>
                  <li>Client consultation and project communication</li>
                  
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  This policy does not cover third-party websites, services, or applications that may be linked from our platforms.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section id="collection" className="mb-12">
              <div className="flex items-center mb-6">
                <Database className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Business Information:</strong> Job title, industry, company size</li>
                  <li><strong>Project Details:</strong> Requirements, specifications, and communication logs</li>
                  <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely)</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li><strong>Device Data:</strong> IP address, browser type, operating system</li>
                  <li><strong>Usage Analytics:</strong> Pages visited, time spent, click patterns</li>
                  <li><strong>Performance Data:</strong> Loading times, error logs, user interactions</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Campaign Data:</strong> Email open rates, click-through rates</li>
                  <li><strong>Preferences:</strong> Communication preferences, interests</li>
                  <li><strong>Social Media:</strong> Interactions with our social media content</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section id="usage" className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Project development and delivery</li>
                      <li>Client communication and support</li>
                      <li>Technical troubleshooting</li>
                      <li>Quality assurance and testing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Operations</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Billing and payment processing</li>
                      <li>Contract management</li>
                      <li>Legal compliance</li>
                      <li>Business analytics</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing & Communication</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Newsletter and updates</li>
                      <li>Promotional campaigns</li>
                      <li>Event invitations</li>
                      <li>Industry insights sharing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement & Security</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Platform optimization</li>
                      <li>Security monitoring</li>
                      <li>Fraud prevention</li>
                      <li>User experience enhancement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Sharing and Disclosure */}
            <section id="sharing" className="mb-12">
              <div className="flex items-center mb-6">
                <Share2 className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Sharing and Disclosure</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell, rent, or trade your personal information. We may share your data only in the following circumstances:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Trusted Service Providers</h3>
                  <p className="text-gray-600 text-sm">
                    Payment processors, cloud hosting services, email marketing platforms, and analytics tools that help us operate our business.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                  <p className="text-gray-600 text-sm">
                    When required by law, court order, or governmental authority, or to protect our rights and property.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Business Transfers</h3>
                  <p className="text-gray-600 text-sm">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section id="cookies" className="mb-12">
              <div className="flex items-center mb-6">
                <Cookie className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your experience and analyze website performance.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                    <p className="text-gray-600 text-sm">Required for basic website functionality and security.</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                    <p className="text-gray-600 text-sm">Help us understand how visitors interact with our website.</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                    <p className="text-gray-600 text-sm">Used to deliver relevant advertisements and track campaign performance.</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences or our cookie consent banner.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section id="retention" className="mb-12">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We retain your personal information only as long as necessary for the purposes outlined in this policy:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Active Client Data:</strong> Duration of business relationship plus 7 years for tax and legal purposes</li>
                  <li><strong>Marketing Data:</strong> Until you unsubscribe or request deletion</li>
                  <li><strong>Website Analytics:</strong> Up to 26 months from collection date</li>
                  <li><strong>Security Logs:</strong> Up to 12 months for security and fraud prevention</li>
                </ul>
              </div>
            </section>

            {/* Security Measures */}
            <section id="security" className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Security Measures</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement comprehensive security measures to protect your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Safeguards</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>SSL/TLS encryption for data transmission</li>
                      <li>Encrypted data storage</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Secure cloud infrastructure</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Administrative Controls</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Access controls and user authentication</li>
                      <li>Employee privacy training</li>
                      <li>Incident response procedures</li>
                      <li>Regular backup and recovery testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>


            {/* Children's Privacy */}
            <section id="children" className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Children's Privacy</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If we become aware that we have collected personal information from a child under 13, we will take immediate steps to delete such information from our records.
                </p>
              </div>
            </section>

            {/* Third-Party Links */}
            <section id="links" className="mb-12">
              <div className="flex items-center mb-6">
                <ExternalLink className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Third-Party Links</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our websites and applications may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We encourage you to review the privacy policies of any third-party websites or services before providing them with your personal information.
                </p>
              </div>
            </section>

            {/* Updates to This Policy */}
            <section id="updates" className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Updates to This Policy</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When we make material changes, we will notify you by email (if you have provided an email address) or by posting a prominent notice on our website at least 30 days before the changes take effect.
                </p>
              </div>
            </section>

            {/* Contact Us */}
            <section id="contact" className="mb-12">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gradient-to-r from-sky-50 to-emerald-50 p-6 rounded-xl border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">{companyName}</h3>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {contactEmail}
                        </p>
                        <p className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {supportEmail}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Privacy Officer</h3>
                      <div className="space-y-2 text-gray-600">
                        <p>For data protection inquiries</p>
                        <p className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {dpoEmail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

     

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 z-30"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      
    </div>
  );
}