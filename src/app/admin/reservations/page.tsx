"use client";

import { useEffect, useState } from "react";

type Reservation = {
  _id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  status: "pending" | "accepted" | "rejected";
};

export default function AdminReservationsPage() {
  const [items, setItems] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      setLoading(false);
      return;
    }
    fetch("/api/reservations", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((j) => setItems(j.reservations || []))
      .finally(() => setLoading(false));
  }, []);

  async function setStatus(id: string, status: Reservation["status"]) {
    const token = localStorage.getItem("admin_token");
    if (!token) return alert("Login first on Dashboard");
    const res = await fetch(`/api/reservations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    const json = await res.json();
    if (!res.ok) return alert(json.error || "Failed");
    setItems((prev) => prev.map((r) => (r._id === id ? { ...r, status } : r)));
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Reservations</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b border-coffee-200">
              <th className="p-2">Name</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Date</th>
              <th className="p-2">Time</th>
              <th className="p-2">Guests</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((r) => (
              <tr key={r._id} className="border-b border-coffee-100">
                <td className="p-2">{r.name}</td>
                <td className="p-2">{r.phone}</td>
                <td className="p-2">{new Date(r.date).toLocaleDateString()}</td>
                <td className="p-2">{r.time}</td>
                <td className="p-2">{r.guests}</td>
                <td className="p-2 capitalize">{r.status}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => setStatus(r._id, "accepted")}
                    className="px-3 py-1 rounded-md bg-emerald-600 text-white"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => setStatus(r._id, "rejected")}
                    className="px-3 py-1 rounded-md bg-rose-600 text-white"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
