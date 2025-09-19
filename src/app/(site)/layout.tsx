export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-coffee-50 text-coffee-900">
      <header className="w-full border-b border-coffee-200 bg-coffee-50/80 backdrop-blur supports-[backdrop-filter]:bg-coffee-50/60 sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="/" className="font-semibold text-xl">
            Capitano
          </a>
          <nav className="flex gap-4 text-sm">
            <a href="/menu" className="hover:text-coffee-700">
              Menu
            </a>
            <a href="/book-table" className="hover:text-coffee-700">
              Book a table
            </a>
            <a href="/contact" className="hover:text-coffee-700">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="border-t border-coffee-200 py-8 text-center text-sm text-coffee-700">
        © {new Date().getFullYear()} Capitano
      </footer>
    </div>
  );
}
