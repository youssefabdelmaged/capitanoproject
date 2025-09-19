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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Our delicious menu</h1>
        <img src="/api/qr" alt="QR to menu" className="h-12 w-12" />
      </div>
      {loading ? (
        <div className="rounded-lg border border-coffee-200 bg-white p-6 text-coffee-700">
          Loading menu…
        </div>
      ) : !pdfUrl ? (
        <div className="rounded-lg border border-coffee-200 bg-white p-6 text-coffee-700">
          No menu uploaded yet.
        </div>
      ) : (
        <div className="overflow-hidden">
          <iframe
            src="/api/menu/file#toolbar=0&navpanes=0&scrollbar=0"
            className="w-full h-[85vh] border-0"
            title="Restaurant Menu PDF"
          />
        </div>
      )}
    </div>
  );
}
