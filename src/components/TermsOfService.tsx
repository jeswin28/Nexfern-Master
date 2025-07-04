import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Users, 
  AlertTriangle, 
  Copyright, 
  Scale, 
  Shield, 
  CreditCard, 
  RefreshCw, 
  Mail, 
  ChevronUp,
  Menu,
  X,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const sections: Section[] = [
  { id: 'acceptance', title: 'Acceptance of Terms', icon: FileText },
  { id: 'user-responsibilities', title: 'User Responsibilities', icon: Users },
  { id: 'service-limitations', title: 'Service Limitations', icon: AlertTriangle },
  { id: 'intellectual-property', title: 'Intellectual Property', icon: Copyright },
  { id: 'privacy', title: 'Privacy & Data Protection', icon: Shield },
  { id: 'payment', title: 'Payment Terms', icon: CreditCard },
  { id: 'termination', title: 'Termination', icon: RefreshCw },
  { id: 'governing-law', title: 'Governing Law', icon: Scale },
  { id: 'contact', title: 'Contact Information', icon: Mail }
];

interface TermsConditionsProps {
  companyName?: string;
  websiteUrl?: string;
  contactEmail?: string;
  supportEmail?: string;
  effectiveDate?: string;
  lastUpdated?: string;
  onPrivacyPolicyClick?: () => void;
  onContactClick?: () => void;
}

export default function TermsConditions({
  companyName = "NEXFERN TECH & MARKETING",
  websiteUrl = "nexfern.tech",
  contactEmail = "team@nexfern.com",
  supportEmail = "support@nexfern.tech",
  effectiveDate = "January 1, 2025",
  lastUpdated = "January 1, 2025",
  onPrivacyPolicyClick,
  onContactClick
}: TermsConditionsProps) {
  const [activeSection, setActiveSection] = useState('acceptance');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-50 via-emerald-50 to-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-full mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Clear guidelines for using our services — your rights and responsibilities explained.
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
                          ? 'bg-emerald-100 text-emerald-700 font-medium'
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
                          ? 'bg-emerald-100 text-emerald-700 font-medium'
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
            
            {/* Acceptance of Terms */}
            <section id="acceptance" className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  By accessing and using the services provided by {companyName}, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms and Conditions ("Terms") govern your use of our website located at {websiteUrl} and all related services, features, content, and applications offered by {companyName}.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </section>

            {/* User Responsibilities */}
            <section id="user-responsibilities" className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain the security of your password and identification</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                  <li>Not engage in any activity that interferes with or disrupts our services</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Comply with all applicable local, state, national, and international laws</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  You are solely responsible for your conduct and any data, text, files, information, usernames, images, graphics, photos, profiles, audio and video clips, sounds, musical works, works of authorship, applications, links and other content or materials that you submit, post, or display on or via the service.
                </p>
              </div>
            </section>

            {/* Service Limitations */}
            <section id="service-limitations" className="mb-12">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Service Limitations</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our services are provided "as is" and "as available" without any warranties of any kind. We do not guarantee that:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>The service will meet your specific requirements</li>
                  <li>The service will be uninterrupted, timely, secure, or error-free</li>
                  <li>The results obtained from the use of the service will be accurate or reliable</li>
                  <li>Any errors in the service will be corrected</li>
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
                  <p className="text-gray-600 text-sm">
                    In no event shall {companyName} be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of our service at any time without notice.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property" className="mb-12">
              <div className="flex items-center mb-6">
                <Copyright className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  The service and its original content, features, and functionality are and will remain the exclusive property of {companyName} and its licensors.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Our Rights</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Website design and layout</li>
                      <li>• Software and applications</li>
                      <li>• Trademarks and logos</li>
                      <li>• Content and documentation</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Limited license to use our services</li>
                      <li>• Right to your own content</li>
                      <li>• Access to purchased services</li>
                      <li>• Fair use of our materials</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our service without our prior written consent.
                </p>
              </div>
            </section>

            {/* Privacy & Data Protection */}
            <section id="privacy" className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Privacy & Data Protection</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service.
                </p>
                <div className="bg-sky-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Data Collection</h3>
                  <p className="text-gray-600 text-sm">
                    We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
                  <p className="text-gray-600 text-sm">
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
                </p>
              </div>
            </section>

            {/* Payment Terms */}
            <section id="payment" className="mb-12">
              <div className="flex items-center mb-6">
                <CreditCard className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Payment Terms</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you purchase services from us, the following payment terms apply:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Processing</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>All payments are processed securely</li>
                      <li>We accept major credit cards and bank transfers</li>
                      <li>Payments are due upon invoice receipt</li>
                      <li>Late payments may incur additional fees</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Policy</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Refunds are considered on a case-by-case basis</li>
                      <li>Service-related refunds within 30 days</li>
                      <li>Custom development work is non-refundable</li>
                      <li>Contact us for refund requests</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  You are responsible for providing current, complete, and accurate purchase and account information for all purchases made via our service.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section id="termination" className="mb-12">
              <div className="flex items-center mb-6">
                <RefreshCw className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.
                </p>
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Grounds for Termination</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Breach of these Terms and Conditions</li>
                    <li>• Violation of applicable laws or regulations</li>
                    <li>• Fraudulent, abusive, or illegal activity</li>
                    <li>• Non-payment of fees</li>
                  </ul>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you wish to terminate your account, you may simply discontinue using the service or contact us directly.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Upon termination, your right to use the service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="mb-12">
              <div className="flex items-center mb-6">
                <Scale className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms shall be interpreted and governed by the laws of the jurisdiction in which {companyName} operates, without regard to its conflict of law provisions.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
                  <p className="text-gray-600 text-sm">
                    Any disputes arising from these terms will be resolved through binding arbitration in accordance with the rules of the applicable arbitration association.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="mb-12">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have any questions about these Terms and Conditions, please contact us:
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
                      <h3 className="font-semibold text-gray-900 mb-3">Legal Department</h3>
                      <div className="space-y-2 text-gray-600">
                        <p>For legal and compliance inquiries</p>
                        <p>Response time: 2-3 business days</p>
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
          className="fixed bottom-8 right-8 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 z-30"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
