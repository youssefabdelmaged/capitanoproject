export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-coffee-50 text-coffee-900">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-coffee-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="/" className="font-semibold text-xl tracking-wide">
            Capitano
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-coffee-200">
              Home
            </a>
            <a href="/menu" className="hover:text-coffee-200">
              Menu
            </a>
            <a href="/contact" className="hover:text-coffee-200">
              Contact
            </a>
          </nav>
          <a
            href="/book-table"
            className="ml-4 px-4 py-2 rounded-md bg-coffee-600 hover:bg-coffee-500 text-white text-sm"
          >
            Book a Table
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="border-t border-coffee-200 bg-white py-8 text-center text-sm text-coffee-700">
        © {new Date().getFullYear()} Capitano
      </footer>
    </div>
  );
}
