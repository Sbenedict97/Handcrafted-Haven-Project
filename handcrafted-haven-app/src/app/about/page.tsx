import NavBar from "../ui/nav/navBar";

export default function Page() {
  return (
    <body className="bg-white font-montserrat">
      <NavBar />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
        <p>
          Welcome to our project! This website is part of the BYUI WDD430 course
          and was created by:
        </p>
        <ul className="list-disc list-inside my-4">
          <li>Skyler Benedict</li>
          <li>Erik Burton</li>
          <li>Patrick Armani</li>
          <li>Luis Chavez</li>
          <li>Victory Chibueze</li>
        </ul>
        <p>
          Our mission is to provide a platform where users can explore and
          purchase unique products. We’re continuously working to improve your
          experience.
        </p>
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
