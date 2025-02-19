import Link from "next/link";

export default function Home() {
  return (
    <body className="bg-white font-montserrat">
      <nav className="bg-gray-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">WDD430 Team</h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-orange-400">
                Sellers
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-orange-400">
                Products
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-orange-400">
                Login
              </Link>
            </li>
            <li>
              <a href="cart.html" className="hover:text-orange-400">
                Shopping Cart
              </a>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <header className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800">
          Welcome to Our Marketplace
        </h2>
        <p className="text-gray-600 mt-2">
          Find the best products at great prices.
        </p>
        <a
          href="/products"
          className="mt-4 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600"
        >
          Shop Now
        </a>
      </header>

      <section className="container mx-auto p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Featured Products
        </h3>
        <div
          id="product-list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        ></div>
      </section>

      <footer className="bg-gray-700 text-white p-4 mt-10">
        <div className="container mx-auto flex justify-between">
          <p>&copy; 2025 WDD430 Team Project</p>
          <a href="customer-service.html" className="hover:text-orange-400">
            Customer Service
          </a>
        </div>
      </footer>
    </body>
  );
}
