"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    
    if (!data.name || !data.email || !data.subject || !data.message) {
      setMessage("Please fill in all required fields.");
      setMessageType('error');
      return;
    }
    
    setLoading(true);
    setMessage(null);
    
    // Simulate form submission
    setTimeout(() => {
      setMessage("Message sent successfully! We'll get back to you soon.");
      setMessageType('success');
      setLoading(false);
      form.reset();
    }, 1500);
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-coffee-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-3xl font-bold text-coffee-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-coffee-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-900 mb-1">Address</h3>
                    <p className="text-coffee-700">
                      مساكن الجوهرة والخمس آلاف وحدة – بورسعيد<br/>
                      Al-Jawhara Housing and the Five Thousand Units – Port Said
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-coffee-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-900 mb-1">Phone</h3>
                    <p className="text-coffee-700">(+2) 01221758882</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-coffee-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-900 mb-1">Email</h3>
                    <p className="text-coffee-700">capitanocafeeg@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-coffee-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-900 mb-1">Hours</h3>
                    <p className="text-coffee-700">24/7 - Always Open</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-coffee-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-coffee-100 rounded-full flex items-center justify-center hover:bg-coffee-200 transition-colors">
                  <svg className="w-5 h-5 text-coffee-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-coffee-100 rounded-full flex items-center justify-center hover:bg-coffee-200 transition-colors">
                  <svg className="w-5 h-5 text-coffee-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281h-1.297v-1.297h1.297v1.297zm-1.297 1.297h1.297v6.51h-1.297v-6.51zm-6.533 0c-.718 0-1.297.579-1.297 1.297s.579 1.297 1.297 1.297 1.297-.579 1.297-1.297-.579-1.297-1.297-1.297z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-coffee-100 rounded-full flex items-center justify-center hover:bg-coffee-200 transition-colors">
                  <svg className="w-5 h-5 text-coffee-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-coffee-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-coffee-900">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-4 border border-coffee-300 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 bg-coffee-50/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-coffee-900">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-4 border border-coffee-300 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 bg-coffee-50/50"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-coffee-900">
                    Subject *
                  </label>
                  <input
                    name="subject"
                    type="text"
                    required
                    className="w-full px-4 py-4 border border-coffee-300 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 bg-coffee-50/50"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-coffee-900">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-4 border border-coffee-300 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 bg-coffee-50/50 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Message Display */}
                {message && (
                  <div className={`p-4 rounded-xl ${
                    messageType === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  } animate-fade-in`}>
                    <div className="flex items-center space-x-2">
                      {messageType === 'success' ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                        </svg>
                      )}
                      <span className="font-medium">{message}</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
