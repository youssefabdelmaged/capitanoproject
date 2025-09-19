import Link from "next/link";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-coffee-50 text-coffee-900">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-coffee-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-semibold text-xl tracking-wide">
            Capitano
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-coffee-200">
              Home
            </Link>
            <Link href="/menu" className="hover:text-coffee-200">
              Menu
            </Link>
            <Link href="/contact" className="hover:text-coffee-200">
              Contact
            </Link>
          </nav>
          <Link
            href="/book-table"
            className="ml-4 px-4 py-2 rounded-md bg-coffee-600 hover:bg-coffee-500 text-white text-sm"
          >
            Book a Table
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="border-t border-coffee-200 bg-white py-8 text-center text-sm text-coffee-700">
        © {new Date().getFullYear()} Capitano
      </footer>
    </div>
  );
}
