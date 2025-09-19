"use client";

import { useState } from "react";

type ReservationResponse = {
  error?: string;
  reservation?: any; // You can replace `any` with your actual Reservation type
};

export default function BookTablePage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.phone || !data.date || !data.time || !data.guests) {
      setMessage("Please fill in all required fields.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage(null);

    const res = await fetch("/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    let json: ReservationResponse | null = null;
    try {
      json = (await res.json()) as ReservationResponse;
    } catch {
      // ignore parse error for empty or non-JSON bodies
    }

    setLoading(false);

    if (!res.ok) {
      setMessage(json?.error || "Something went wrong.");
      setMessageType("error");
      return;
    }

    setMessage("Reservation submitted! We will confirm shortly.");
    setMessageType("success");
    form.reset();
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-coffee-900 mb-4">
            Reserve Your Table
          </h1>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto leading-relaxed">
            Experience the warmth of Capitano Coffee & Café. Book your perfect spot and 
            let us create a memorable dining experience for you.
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-slide-in-left">
            <form onSubmit={onSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-coffee-900 border-b border-coffee-200 pb-2">
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-coffee-900">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      className="w-full px-4 py-4 border border-coffee-300 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 bg-coffee-50/50"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-coffee-900">
                      Phone or Email *
                    </label>
                    <input
                      name="phone"
                      className="w-full px-4 py-4 border border-coffee-300 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 bg-coffee-50/50"
                      placeholder="Enter your phone or email"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Reservation Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-coffee-900 border-b border-coffee-200 pb-2">
                  Reservation Details
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-coffee-900">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-4 border border-coffee-300 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 bg-coffee-50/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-coffee-900">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="time"
                      className="w-full px-4 py-4 border border-coffee-300 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 bg-coffee-50/50"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-coffee-900">
                    Number of Guests *
                  </label>
                  <select
                    name="guests"
                    className="w-full px-4 py-4 border border-coffee-300 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 bg-coffee-50/50"
                    required
                  >
                    <option value="">Select number of guests</option>
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-coffee-900 border-b border-coffee-200 pb-2">
                  Special Requests
                </h2>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-coffee-900">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    className="w-full px-4 py-4 border border-coffee-300 rounded-xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-200 bg-coffee-50/50 resize-none"
                    rows={4}
                    placeholder="Any special dietary requirements, celebrations, or other notes..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Reservation...</span>
                    </div>
                  ) : (
                    "Reserve Your Table"
                  )}
                </button>
              </div>

              {/* Message Display */}
              {message && (
                <div
                  className={`p-4 rounded-xl ${
                    messageType === "success"
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  } animate-fade-in`}
                >
                  <div className="flex items-center space-x-2">
                    {messageType === "success" ? (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <span className="font-medium">{message}</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-slide-in-right">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-coffee-900 mb-4">
              Why Choose Capitano?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☕</span>
                </div>
                <h4 className="font-semibold text-coffee-900 mb-2">
                  Premium Coffee
                </h4>
                <p className="text-coffee-700 text-sm">
                  Freshly roasted beans from around the world
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕐</span>
                </div>
                <h4 className="font-semibold text-coffee-900 mb-2">
                  24/7 Service
                </h4>
                <p className="text-coffee-700 text-sm">
                  Open around the clock for your convenience
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h4 className="font-semibold text-coffee-900 mb-2">
                  Cozy Atmosphere
                </h4>
                <p className="text-coffee-700 text-sm">
                  Warm and welcoming environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
