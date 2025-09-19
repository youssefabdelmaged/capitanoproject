"use client";

import { useEffect, useState } from "react";

export default function AdminMenuPage() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetch("/api/menu")
      .then((r) => r.json())
      .then((j) => setPdfUrl(j.pdfUrl || null));
  }, []);

  async function onUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const token = localStorage.getItem("admin_token");
    if (!token) return alert("Login first on Dashboard");
    const fd = new FormData(e.currentTarget);
    setUploading(true);
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    });
    const json = await res.json();
    setUploading(false);
    if (!res.ok) return alert(json.error || "Upload failed");
    setPdfUrl(json.pdfUrl);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Menu management</h1>
      <form onSubmit={onUpload} className="space-y-3">
        <input
          name="file"
          type="file"
          accept="application/pdf"
          className="block"
          required
        />
        <button
          disabled={uploading}
          className="px-4 py-2 rounded-md bg-coffee-700 text-white"
        >
          {uploading ? "Uploading..." : "Upload/Replace PDF"}
        </button>
      </form>
      {pdfUrl && (
        <div className="rounded-lg overflow-hidden border border-coffee-200 bg-white">
          <iframe src={pdfUrl} className="w-full h-[70vh]" />
        </div>
      )}
    </div>
  );
}
