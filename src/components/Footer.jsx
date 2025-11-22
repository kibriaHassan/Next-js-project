"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand / Logo */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">MyBrand</h2>
          <p className="text-gray-400 max-w-xs">
            Build modern and responsive web apps effortlessly.
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Company</h3>
          <Link href="/" className="block text-gray-400 hover:text-indigo-500">Home</Link>
          <Link href="/about" className="block text-gray-400 hover:text-indigo-500">About</Link>
          <Link href="/pricing" className="block text-gray-400 hover:text-indigo-500">Pricing</Link>
          <Link href="/docs" className="block text-gray-400 hover:text-indigo-500">Docs</Link>
        </div>

        {/* Resources */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Resources</h3>
          <Link href="#" className="block text-gray-400 hover:text-indigo-500">Blog</Link>
          <Link href="#" className="block text-gray-400 hover:text-indigo-500">Tutorials</Link>
          <Link href="#" className="block text-gray-400 hover:text-indigo-500">Help Center</Link>
          <Link href="#" className="block text-gray-400 hover:text-indigo-500">Support</Link>
        </div>

        {/* Contact / Social */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="hover:text-indigo-500">🐦</Link>
            <Link href="#" className="hover:text-indigo-500">📘</Link>
            <Link href="#" className="hover:text-indigo-500">📸</Link>
            <Link href="#" className="hover:text-indigo-500">💼</Link>
          </div>
          <p className="text-gray-400 mt-4 text-sm">&copy; 2025 MyBrand. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
