"use client";

import { useState } from "react";

export default function AdminDashboardPage() {
  const [token, setToken] = useState<string | null>(null);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (res.ok) {
      setToken(json.token);
      localStorage.setItem("admin_token", json.token);
    } else {
      alert(json.error || "Login failed");
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin dashboard</h1>

      {!token && (
        <form onSubmit={login} className="max-w-sm space-y-3">
          <input
            name="email"
            placeholder="Email"
            className="w-full rounded-md border border-coffee-300 px-3 py-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded-md border border-coffee-300 px-3 py-2"
          />
          <button className="px-4 py-2 rounded-md bg-coffee-700 text-white">
            Login
          </button>
          <p className="text-xs text-coffee-600">
            Set ADMIN_EMAIL and ADMIN_PASSWORD to seed first admin.
          </p>
        </form>
      )}

      {token && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/admin/reservations"
            className="rounded-lg border border-coffee-200 bg-white p-6 block"
          >
            Manage reservations →
          </a>
          <a
            href="/admin/menu"
            className="rounded-lg border border-coffee-200 bg-white p-6 block"
          >
            Upload menu PDF →
          </a>
          <a
            href="/menu"
            className="rounded-lg border border-coffee-200 bg-white p-6 block"
          >
            View menu (QR) →
          </a>
        </div>
      )}
    </div>
  );
}
