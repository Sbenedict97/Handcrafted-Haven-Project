import NavBar from "../ui/nav/navBar";

export default function Page() {
  return (
    <body className="bg-white font-montserrat">
      <NavBar />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
        <form
          action="/login"
          method="POST"
          className="max-w-sm mx-auto bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded mb-4"
            required
          />

          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded mb-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
          >
            Login
          </button>
        </form>
      </main>

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
