async function getMenu() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || ""}/api/menu`, {
    cache: "no-store",
  });
  try {
    return await res.json();
  } catch {
    return { pdfUrl: null };
  }
}

export default async function MenuPage() {
  const { pdfUrl } = await getMenu();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Our delicious menu</h1>
        <img src="/api/qr" alt="QR to menu" className="h-12 w-12" />
      </div>
      {!pdfUrl ? (
        <div className="rounded-lg border border-coffee-200 bg-white p-6 text-coffee-700">
          No menu uploaded yet.
        </div>
      ) : (
        <div className="overflow-hidden">
          <iframe
            src="/api/menu/file#toolbar=0&navpanes=0&scrollbar=0"
            className="w-full h-[85vh] border-0"
          />
        </div>
      )}
    </div>
  );
}
