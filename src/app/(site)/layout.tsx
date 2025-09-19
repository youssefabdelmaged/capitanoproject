export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-coffee-50 text-coffee-900">
      <header className="sticky top-0 z-40 border-b border-coffee-700/20 bg-coffee-900/95 backdrop-blur-md text-white shadow-lg">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <a 
            href="/" 
            className="font-bold text-2xl tracking-wide hover:text-coffee-200 transition-colors duration-300 transform hover:scale-105"
          >
            Capitano
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a 
              href="/" 
              className="relative hover:text-coffee-200 transition-colors duration-300 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-200 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/menu" 
              className="relative hover:text-coffee-200 transition-colors duration-300 group"
            >
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-200 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/contact" 
              className="relative hover:text-coffee-200 transition-colors duration-300 group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-200 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <a
            href="/book-table"
            className="ml-4 px-6 py-3 rounded-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-500 hover:to-coffee-600 text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book a Table
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="border-t border-coffee-200 bg-coffee-900 text-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-coffee-100">Capitano</h3>
              <p className="text-coffee-300 leading-relaxed">
                Where every cup tells a story. Experience the perfect blend of tradition, 
                quality, and warm hospitality.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-coffee-400 hover:text-coffee-200 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-coffee-400 hover:text-coffee-200 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281h-1.297v-1.297h1.297v1.297zm-1.297 1.297h1.297v6.51h-1.297v-6.51zm-6.533 0c-.718 0-1.297.579-1.297 1.297s.579 1.297 1.297 1.297 1.297-.579 1.297-1.297-.579-1.297-1.297-1.297z"/>
                  </svg>
                </a>
                <a href="#" className="text-coffee-400 hover:text-coffee-200 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-coffee-100">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-coffee-300 hover:text-coffee-100 transition-colors">Home</a></li>
                <li><a href="/menu" className="text-coffee-300 hover:text-coffee-100 transition-colors">Menu</a></li>
                <li><a href="/book-table" className="text-coffee-300 hover:text-coffee-100 transition-colors">Book a Table</a></li>
                <li><a href="/contact" className="text-coffee-300 hover:text-coffee-100 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-coffee-100">Opening Hours</h4>
              <div className="space-y-2 text-coffee-300">
                <div className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span>24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Every Day</span>
                  <span>Always Open</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-coffee-100">Contact Info</h4>
              <div className="space-y-2 text-coffee-300">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>مساكن الجوهرة والخمس آلاف وحدة – بورسعيد<br/>Al-Jawhara Housing and the Five Thousand Units – Port Said</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>(+2) 01221758882</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>capitanocafeeg@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-coffee-700 pt-8 text-center">
            <p className="text-coffee-400">
              © {new Date().getFullYear()} Capitano Coffee & Café. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
