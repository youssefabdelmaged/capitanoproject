'use client';

import { useState } from 'react';

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Form validation
  function validateForm(formData: FormData) {
    const validationErrors: string[] = [];
    
    // Name validation
    const name = formData.get('name') as string;
    if (!name || name.trim().length < 2) {
      validationErrors.push('Please enter a valid name (at least 2 characters)');
    }
    
    // Email validation
    const email = formData.get('email') as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      validationErrors.push('Please enter a valid email address');
    }
    
    // Phone validation
    const phone = formData.get('phone') as string;
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phone || !phoneRegex.test(phone.replace(/\s/g, ''))) {
      validationErrors.push('Please enter a valid phone number');
    }
    
    // Date validation
    const date = formData.get('date') as string;
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (!date || selectedDate < today) {
      validationErrors.push('Please select a valid future date');
    }
    
    // Time validation
    if (!formData.get('time')) {
      validationErrors.push('Please select a preferred time');
    }
    
    // Guests validation
    const guests = parseInt(formData.get('guests') as string);
    if (!formData.get('guests') || guests < 1 || guests > 8) {
      validationErrors.push('Please select between 1 and 8 guests');
    }
    
    return validationErrors;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setShowError(true);
      setShowSuccess(false);
      return;
    }
    
    setIsSubmitting(true);
    setShowError(false);
    
    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-0 transition-transform duration-300 max-w-md">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="font-semibold">Reservation Successful!</span>
          </div>
          <p className="text-sm mt-1">We'll contact you soon to confirm your booking.</p>
        </div>
      )}

      {/* Error Message */}
      {showError && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-0 transition-transform duration-300 max-w-md">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
            <span className="font-semibold">Please fix the following errors:</span>
          </div>
          <ul className="text-sm mt-2 list-disc list-inside">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
          <button
            onClick={() => setShowError(false)}
            className="mt-2 text-sm underline hover:no-underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Booking Form */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-coffee-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-coffee-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-coffee-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-semibold text-coffee-900 mb-2">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select guests</option>
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-coffee-900 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-coffee-900 mb-2">
                  Preferred Time *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select time</option>
                  {['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'].map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-semibold text-coffee-900 mb-2">
                Special Requests or Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Any special dietary requirements, celebrations, or other notes..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-coffee-600 hover:bg-coffee-700 disabled:bg-coffee-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : 'Reserve Table'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
