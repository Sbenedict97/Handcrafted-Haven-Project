import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="index.html" className="text-2xl font-bold">
          WDD430 Team
        </a>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-orange-400">
              Home
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
            <Link href="cart.html" className="hover:text-orange-400">
              Shopping Cart
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-orange-400">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
