import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {  // full URL with port!
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess("Thank you! We'll get back to you within 24 hours.");
        setFormData({ name: '', email: '', project: '' });
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/+918790847755?text=Hi! I\'d like to discuss my startup idea with NEXFERN.', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Got an Idea? Let's Make It Real.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to turn your vision into a validated MVP? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="John Doe"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="john@startup.com"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  What do you want to build?
                </label>
                <textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your idea, target market, and what you're looking to achieve..."
                  disabled={loading}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group font-medium"
                disabled={loading}
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>{loading ? 'Sending...' : 'Send to Team'}</span>
              </button>

              {success && <div className="text-green-600 text-center font-medium">{success}</div>}
              {error && <div className="text-red-600 text-center font-medium">{error}</div>}
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div className="space-y-8 animate-slide-right">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prefer chatting?</h3>
                <p className="text-gray-600 mb-6">
                  Get instant responses to your questions via WhatsApp. Our team is available during business hours.
                </p>
                <button
                  onClick={openWhatsApp}
                  className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  Chat With Us
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-primary-100">We review your project within 24 hours</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-primary-100">Schedule a free 30-minute discovery call</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-primary-100">Receive a detailed project proposal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;