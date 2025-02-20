import NavBar from "@/app/ui/nav/navBar";

export default function Home() {
  return (
    
    <div className="bg-white font-montserrat">
      <NavBar />
        <header className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800">
          Welcome to Handcrafted Haven
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
    </div>
  );
}
