export default function HomePage() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h1 className="font-serif text-4xl lg:text-6xl font-bold text-ink mb-6">
          Sahlok Eco Products LLP
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Paper Dona & Paper Plates — Factory-direct wholesale from Mirzapur, Uttar Pradesh.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="inline-flex items-center justify-center px-6 py-3 bg-brick text-white text-xs font-bold tracking-widest uppercase rounded transition-colors hover:bg-brick/90"
            href="/wholesale"
          >
            Get Bulk Pricing
          </a>
          <a
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white text-xs font-bold tracking-widest uppercase rounded transition-colors hover:bg-emerald-800"
            href="https://wa.me/918787201971?text=Hello%20Sahlok%20Eco%20Products%2C%20I%20am%20interested%20in%20bulk%20wholesale%20pricing%20for%20paper%20dona%20and%20plates."
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.115-.527-1.745-.724-2.883-2.493-2.971-2.607-.088-.114-.707-.942-.707-1.796 0-.854.444-1.275.602-1.448.158-.173.346-.217.461-.217.115 0 .23.002.331.007.107.006.251-.041.393.299.144.347.49 1.199.533 1.286.044.087.073.188.015.304-.058.115-.087.188-.173.289-.087.101-.184.226-.263.304-.088.087-.18.182-.077.359.102.177.456.751.98 1.218.674.6 1.242.787 1.419.874.177.087.28.073.385-.044.105-.116.447-.521.567-.7.12-.178.239-.148.403-.088.164.06 1.042.492 1.22.58.178.089.297.132.34.204.044.073.044.421-.1 1.826z" />
            </svg>
            CHAT ON WHATSAPP
          </a>
        </div>
      </div>
    </main>
  );
}