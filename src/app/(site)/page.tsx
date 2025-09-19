export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-coffee-900">
            Savor every moment at our restaurant
          </h1>
          <p className="mt-4 text-coffee-700">
            Crafted dishes, warm ambiance, and memorable experiences—served
            daily.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              className="px-5 py-2 rounded-md bg-coffee-700 text-white hover:bg-coffee-800"
              href="/book-table"
            >
              Reserve a table
            </a>
            <a
              className="px-5 py-2 rounded-md border border-coffee-300 text-coffee-800 hover:bg-coffee-100"
              href="/menu"
            >
              View menu
            </a>
          </div>
        </div>
        <div className="rounded-xl bg-coffee-100 aspect-video" />
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {["Locally sourced", "Freshly prepared", "Cozy & welcoming"].map(
          (t) => (
            <div
              key={t}
              className="rounded-lg border border-coffee-200 p-6 bg-white"
            >
              <h3 className="font-semibold text-coffee-900">{t}</h3>
              <p className="mt-2 text-sm text-coffee-700">
                We care about quality in every detail.
              </p>
            </div>
          )
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold">What our guests say</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-coffee-200 p-6 bg-white"
            >
              <p className="text-sm text-coffee-800">
                “Amazing food and friendly staff. We'll be back!”
              </p>
              <p className="mt-3 text-xs text-coffee-600">– Happy customer</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <div className="rounded-2xl bg-coffee-700 text-white p-10">
          <h3 className="text-2xl font-semibold">Ready to join us?</h3>
          <p className="mt-2 text-white/80">Reserve a table in seconds.</p>
          <a
            href="/book-table"
            className="inline-block mt-5 px-5 py-2 rounded-md bg-white text-coffee-800 hover:bg-coffee-100"
          >
            Book now
          </a>
        </div>
      </section>
    </div>
  );
}
