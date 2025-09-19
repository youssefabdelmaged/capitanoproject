"use client";

import { useState } from "react";

export default function BookTablePage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.phone || !data.date || !data.time || !data.guests) {
      setMessage("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setMessage(null);
    const res = await fetch("/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let json: any = null;
    try {
      json = await res.json();
    } catch {
      // ignore parse error for empty or non-JSON bodies
    }
    setLoading(false);
    if (!res.ok) {
      setMessage((json && json.error) || "Something went wrong.");
      return;
    }
    setMessage("Reservation submitted! We will confirm shortly.");
    form.reset();
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">Book your table</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm mb-1">Name *</label>
          <input
            name="name"
            className="w-full rounded-md border border-coffee-300 bg-white px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Phone or Email *</label>
          <input
            name="phone"
            className="w-full rounded-md border border-coffee-300 bg-white px-3 py-2"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">Date *</label>
            <input
              type="date"
              name="date"
              className="w-full rounded-md border border-coffee-300 bg-white px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Time *</label>
            <input
              type="time"
              name="time"
              className="w-full rounded-md border border-coffee-300 bg-white px-3 py-2"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1">Guests *</label>
          <input
            type="number"
            min={1}
            name="guests"
            className="w-full rounded-md border border-coffee-300 bg-white px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Notes</label>
          <textarea
            name="notes"
            className="w-full rounded-md border border-coffee-300 bg-white px-3 py-2"
            rows={4}
          />
        </div>
        <button
          disabled={loading}
          className="px-5 py-2 rounded-md bg-coffee-700 text-white hover:bg-coffee-800 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit reservation"}
        </button>
        {message && <p className="text-sm text-coffee-800">{message}</p>}
      </form>
    </div>
  );
}
