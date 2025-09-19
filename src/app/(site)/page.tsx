"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
  };

  const handleStarHover = (starValue: number) => {
    setHoveredRating(starValue);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/90 to-coffee-800/80 rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80')",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            <span className="block text-coffee-100">Capitano</span>
            <span className="block text-4xl md:text-5xl mt-2 font-light">
              Coffee & Café
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-coffee-100/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where every cup tells a story. Experience the perfect blend of
            tradition, quality, and warm hospitality in our cozy caf&eacute;.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              className="px-8 py-4 rounded-full bg-coffee-600 hover:bg-coffee-500 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              href="/book-table"
            >
              Book a Table
            </Link>
            <Link
              className="px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/10 text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              href="/menu"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-700 mb-6 text-center">
              Our Story
            </h2>
            <div className="flex-1 flex items-center justify-center">
              <div className="max-w-lg text-center">
                <p className="text-lg text-coffee-800 leading-relaxed">
                  Founded in 2008, Capitano Coffee & Café has been serving the
                  community for over 15 years with passion, dedication, and the
                  finest coffee beans sourced from around the world. Our cozy
                  atmosphere and friendly staff create the perfect environment
                  for your morning coffee, business meetings, or quiet moments
                  of reflection.
                </p>
                <p className="text-lg text-coffee-800 leading-relaxed mt-6">
                  We believe that great coffee is more than just a
                  beverage—it&apos;s an experience that brings people together.
                  From our carefully crafted espresso drinks to our freshly
                  baked pastries, every item on our menu is prepared with love
                  and attention to detail.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-coffee-600 rounded-full"></div>
                <span className="text-coffee-800 font-medium">
                  Locally Sourced
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-coffee-600 rounded-full"></div>
                <span className="text-coffee-800 font-medium">
                  Freshly Roasted
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-coffee-600 rounded-full"></div>
                <span className="text-coffee-800 font-medium">
                  Cozy Atmosphere
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Café interior with warm lighting and cozy atmosphere"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-coffee-600 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-coffee-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-coffee-50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-4">
            Why Choose Capitano?
          </h2>
          <p className="text-lg text-coffee-700 max-w-2xl mx-auto">
            We&apos;re committed to providing an exceptional coffee experience
            that goes beyond just great taste.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-8">
          {[
            {
              title: "Premium Quality",
              description:
                "We source only the finest coffee beans from sustainable farms around the world.",
              icon: "☕",
            },
            {
              title: "Expert Baristas",
              description:
                "Our skilled baristas craft each drink with precision and passion.",
              icon: "👨‍🍳",
            },
            {
              title: "Cozy Environment",
              description:
                "A warm, welcoming space perfect for work, relaxation, or meeting friends.",
              icon: "🏠",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mx-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-coffee-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-coffee-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-700 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-coffee-700 max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from our wonderful
            customers.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
          {[
            {
              name: "Sarah Johnson",
              text: "The best coffee in town! The atmosphere is so cozy and the staff is incredibly friendly. I come here every morning before work.",
              rating: 5,
            },
            {
              name: "Mike Chen",
              text: "Amazing pastries and excellent coffee. The perfect place to work remotely or catch up with friends. Highly recommended!",
              rating: 5,
            },
            {
              name: "Emily Rodriguez",
              text: "Capitano has become my second home. The quality is consistently excellent and the ambiance is just perfect for relaxation.",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mx-2"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-coffee-800 leading-relaxed mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-coffee-600 font-semibold">
                – {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Write Review Section */}
      <section className="py-16 bg-gradient-to-br from-coffee-100 to-coffee-200 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-4">
            Share Your Experience
          </h2>
          <p className="text-lg text-coffee-700 max-w-2xl mx-auto">
            We&apos;d love to hear about your visit! Share your thoughts and
            help others discover the magic of Capitano Coffee & Caf&eacute;.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="reviewer-name"
                    className="block text-sm font-semibold text-coffee-900 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="reviewer-name"
                    name="reviewer-name"
                    required
                    className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="reviewer-email"
                    className="block text-sm font-semibold text-coffee-900 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="reviewer-email"
                    name="reviewer-email"
                    required
                    className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-coffee-900 mb-2">
                  Your Rating *
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isActive = star <= (hoveredRating || rating);
                    return (
                      <button
                        key={star}
                        type="button"
                        className={`text-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coffee-500 rounded ${
                          isActive
                            ? "text-yellow-400"
                            : "text-gray-300 hover:text-yellow-300"
                        }`}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleStarHover(star)}
                        onMouseLeave={handleStarLeave}
                      >
                        ★
                      </button>
                    );
                  })}
                </div>
                <p className="text-sm text-coffee-600 mt-1">
                  {rating > 0
                    ? `You rated ${rating} star${rating > 1 ? "s" : ""}`
                    : "Click on a star to rate your experience"}
                </p>
              </div>

              <div>
                <label
                  htmlFor="review-title"
                  className="block text-sm font-semibold text-coffee-900 mb-2"
                >
                  Review Title
                </label>
                <input
                  type="text"
                  id="review-title"
                  name="review-title"
                  className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200"
                  placeholder="Give your review a title (optional)"
                />
              </div>

              <div>
                <label
                  htmlFor="review-text"
                  className="block text-sm font-semibold text-coffee-900 mb-2"
                >
                  Your Review *
                </label>
                <textarea
                  id="review-text"
                  name="review-text"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your experience at Capitano Coffee & Café..."
                ></textarea>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="recommend"
                  name="recommend"
                  className="w-4 h-4 text-coffee-600 border-coffee-300 rounded focus:ring-coffee-500"
                />
                <label htmlFor="recommend" className="text-sm text-coffee-700">
                  I would recommend this café to others
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-coffee-600 hover:bg-coffee-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="text-center py-16">
        <div className="rounded-2xl bg-gradient-to-r from-coffee-800 to-coffee-900 text-white p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-coffee-900/20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Capitano?
            </h3>
            <p className="text-xl text-coffee-100/90 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable coffee experience. Book your table
              today and discover why our customers keep coming back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-table"
                className="inline-block px-8 py-4 rounded-full bg-white text-coffee-900 font-semibold text-lg hover:bg-coffee-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Your Table
              </Link>
              <Link
                href="/menu"
                className="inline-block px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Our Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-coffee-200 bg-coffee-900 text-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-coffee-100">Capitano</h3>
              <p className="text-coffee-300 leading-relaxed">
                Where every cup tells a story. Experience the perfect blend of
                tradition, quality, and warm hospitality.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-coffee-400 hover:text-coffee-200 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-coffee-400 hover:text-coffee-200 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281h-1.297v-1.297h1.297v1.297zm-1.297 1.297h1.297v6.51h-1.297v-6.51zm-6.533 0c-.718 0-1.297.579-1.297 1.297s.579 1.297 1.297 1.297 1.297-.579 1.297-1.297-.579-1.297-1.297-1.297z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-coffee-400 hover:text-coffee-200 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-coffee-100">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-coffee-300 hover:text-coffee-100 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="text-coffee-300 hover:text-coffee-100 transition-colors"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book-table"
                    className="text-coffee-300 hover:text-coffee-100 transition-colors"
                  >
                    Book a Table
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-coffee-300 hover:text-coffee-100 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-coffee-100">Opening Hours</h4>
              <div className="space-y-2 text-coffee-300">
                <div className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span>24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Every Day</span>
                  <span>Always Open</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-coffee-100">Contact Info</h4>
              <div className="space-y-2 text-coffee-300">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    مساكن الجوهرة والخمس آلاف وحدة – بورسعيد
                    <br />
                    Al-Jawhara Housing and the Five Thousand Units – Port Said
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>(+2) 01221758882</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>capitanocafeeg@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-coffee-700 pt-8 text-center">
            <p className="text-coffee-400">
              © {new Date().getFullYear()} Capitano Coffee & Café. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
