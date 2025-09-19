export default function ContactPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Contact our restaurant</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2 text-coffee-800">
          <p>
            <strong>Phone:</strong> 123-456-7890
          </p>
          <p>
            <strong>Email:</strong> hello@example.com
          </p>
          <p>
            <strong>Address:</strong> 123 Main St, City
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Your message</label>
            <textarea
              className="w-full rounded-md border border-coffee-300 bg-white px-3 py-2"
              rows={6}
              placeholder="Write to us&hellip;"
            />
          </div>
          <button
            className="px-5 py-2 rounded-md bg-coffee-700 text-white hover:bg-coffee-800"
            type="button"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
