export default function SiteShell({ children, hero = false }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <nav className="flex gap-6 text-sm">
  <a href="/" className="hover:underline">Home</a>
  <a href="/#products" className="hover:underline">Catalog</a>
  <a
    href="https://www.linkedin.com/in/pushkarpawar314/"
    target="_blank"
    rel="noreferrer"
    className="hover:underline"
  >
    Contact
  </a>
</nav>
          <a href="/" className="font-bold tracking-widest">Pushkar Store</a>
          <div className="w-24" />
        </div>
      </header>

      {hero && (
        <section className="bg-emerald-500 text-white text-center py-14 px-6">
          <h2 className="text-4xl font-bold">🪔 Big Sale for Diwali! 🪔</h2>
          <a
            href="#products"
            className="inline-block mt-5 bg-white text-black font-semibold px-7 py-3 rounded hover:bg-gray-100"
          >
            Shop now
          </a>
        </section>
      )}

      <div className="flex-1">{children}</div>

      <footer className="bg-black text-gray-300 text-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-3">
          <p>© 2026 Pushkar Store. Built with Next.js and the Shopify Storefront API.</p>
          <p>
            <a href="https://github.com/Pushkar012345" className="underline">GitHub</a>
          </p>
        </div>
      </footer>
    </div>
  );
}