import React from 'react';
import NavBar from '@/app/ui/nav/navBar';
import Link from 'next/link';

export default function CustomerServicePage() {
  return (
    <div className="bg-white font-montserrat min-h-screen">
      <NavBar />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Service</h2>
        <p>Welcome to our customer service page. We're here to help!</p>
        <p>If you have any questions or need assistance, please contact our support team:</p>
        <p className="mt-4"><strong>Email:</strong> support@wdd430team.com</p>
        <p className="mt-2"><strong>Phone:</strong> 1-800-123-4567</p>
         <Link href="/" className="mt-4 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600">
          Go Home
        </Link>
      </main>
      <footer className="bg-gray-700 text-white p-4 mt-10">
        <div className="container mx-auto flex justify-between">
          <p>&copy; 2025 WDD430 Team Project</p>
        </div>
      </footer>
    </div>
  );
}