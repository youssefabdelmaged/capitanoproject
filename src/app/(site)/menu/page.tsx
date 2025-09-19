"use client";

import { useEffect, useState } from "react";

export default function MenuPage() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch("/api/menu", { cache: "no-store" })
      .then((r) => r.json())
      .then((j) => {
        if (!active) return;
        setPdfUrl(j.pdfUrl || null);
      })
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-coffee-900 mb-4">
            Our Delicious Menu
          </h1>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully crafted selection of coffee, pastries, and light meals. 
            Each item is prepared with love and the finest ingredients.
          </p>
        </div>

        {/* QR Code Section */}
        <div className="text-center mb-8 animate-slide-in-left">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-coffee-900 mb-3">Scan for Digital Menu</h3>
            <img src="/api/qr" alt="QR to menu" className="h-24 w-24 mx-auto" />
            <p className="text-sm text-coffee-600 mt-2">Scan with your phone camera</p>
          </div>
        </div>

        {/* Menu Content */}
        <div className="animate-slide-in-right">
          {loading ? (
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 border-4 border-coffee-200 border-t-coffee-600 rounded-full animate-spin"></div>
                <span className="text-lg font-semibold text-coffee-700">Loading our delicious menu...</span>
              </div>
              <p className="text-coffee-600">Please wait while we prepare your menu experience</p>
            </div>
          ) : !pdfUrl ? (
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-coffee-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-coffee-900 mb-4">Menu Coming Soon</h3>
              <p className="text-coffee-700 mb-6 max-w-md mx-auto">
                We're currently updating our menu with exciting new items. 
                Please check back soon or contact us for current offerings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-coffee-600 text-white rounded-xl hover:bg-coffee-700 transition-colors font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="/book-table"
                  className="px-6 py-3 border-2 border-coffee-300 text-coffee-700 rounded-xl hover:bg-coffee-50 transition-colors font-semibold"
                >
                  Book a Table
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-coffee-600 to-coffee-700 text-white p-6">
                <h2 className="text-2xl font-bold text-center">Capitano Coffee & Café Menu</h2>
                <p className="text-coffee-100 text-center mt-2">Fresh • Local • Delicious</p>
              </div>
              <div className="overflow-hidden">
                <iframe
                  src="/api/menu/file#toolbar=0&navpanes=0&scrollbar=0"
                  className="w-full h-[85vh] border-0"
                  title="Restaurant Menu PDF"
                />
              </div>
            </div>
          )}
        </div>

        {/* Menu Highlights */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-coffee-900 text-center mb-8">Menu Highlights</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☕</span>
                </div>
                <h4 className="font-semibold text-coffee-900 mb-2">Premium Coffee</h4>
                <p className="text-coffee-700 text-sm">Freshly roasted beans from around the world</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥐</span>
                </div>
                <h4 className="font-semibold text-coffee-900 mb-2">Fresh Pastries</h4>
                <p className="text-coffee-700 text-sm">Baked daily with love and attention to detail</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥗</span>
                </div>
                <h4 className="font-semibold text-coffee-900 mb-2">Light Meals</h4>
                <p className="text-coffee-700 text-sm">Healthy and delicious options for any time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
