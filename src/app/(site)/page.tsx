export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-xl">
        <div className="bg-coffee-900 text-white rounded-xl p-10 md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Enjoy your morning coffee shot
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Warm ambiance, crafted dishes, and a menu that changes with the
            seasons.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              className="px-5 py-2 rounded-md bg-white text-coffee-900 hover:bg-coffee-100"
              href="/book-table"
            >
              Book a table
            </a>
            <a
              className="px-5 py-2 rounded-md border border-white/30 hover:bg-white/10"
              href="/menu"
            >
              View our menu
            </a>
          </div>
        </div>
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
        <div className="rounded-2xl bg-coffee-800 text-white p-10">
          <h3 className="text-2xl font-semibold">
            Ready to experience our restaurant?
          </h3>
          <p className="mt-2 text-white/80">Reserve a table in seconds.</p>
          <a
            href="/book-table"
            className="inline-block mt-5 px-5 py-2 rounded-md bg-white text-coffee-900 hover:bg-coffee-100"
          >
            Book now
          </a>
        </div>
      </section>
    </div>
  );
}
