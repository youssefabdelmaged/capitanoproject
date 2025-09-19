"use client";

import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[240px_1fr] bg-coffee-50 text-coffee-900">
      <aside
        className={`border-r border-black/10 bg-coffee-900 text-white md:block ${
          open ? "block" : "hidden"
        } md:static fixed inset-y-0 left-0 w-60 z-40`}
      >
        <div className="p-4 text-xl font-semibold tracking-wide">Admin</div>
        <nav className="p-2 space-y-1">
          <a
            className="block rounded-md px-3 py-2 hover:bg-white/10"
            href="/admin/dashboard"
          >
            Dashboard
          </a>
          <a
            className="block rounded-md px-3 py-2 hover:bg-white/10"
            href="/admin/reservations"
          >
            Reservations
          </a>
          <a
            className="block rounded-md px-3 py-2 hover:bg-white/10"
            href="/admin/menu"
          >
            Menu Management
          </a>
        </nav>
      </aside>
      <div className="flex flex-col">
        <header className="border-b border-black/10 bg-white px-4 py-3 flex items-center justify-between">
          <button
            className="md:hidden px-3 py-1 rounded-md border"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
          <div className="text-sm text-coffee-700">Basic JWT Auth</div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
