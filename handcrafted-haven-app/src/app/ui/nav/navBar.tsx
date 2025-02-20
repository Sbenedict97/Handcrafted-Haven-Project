import Link from "next/link";
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="bg-gray-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
      <a href="/" className="flex items-center"> 
          <Image
            src="/logo_handcrafted_haven.png" 
            alt="WDD430 Team Logo"
            width={100}
            height={100}
           />
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
            <Link href="/sellers" className="hover:text-orange-400">
              Sellers
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-orange-400">
              Login
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-orange-400">
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
