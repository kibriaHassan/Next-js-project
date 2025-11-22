"use client";
import React from "react";

const Docs = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-[#111] border-r border-gray-800 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Documentation</h2>

        <ul className="space-y-4 text-gray-300">
          <li className="hover:text-white cursor-pointer">→ Introduction</li>
          <li className="hover:text-white cursor-pointer">→ Getting Started</li>
          <li className="hover:text-white cursor-pointer">→ Installation</li>
          <li className="hover:text-white cursor-pointer">→ Components</li>
          <li className="hover:text-white cursor-pointer">→ API Reference</li>
          <li className="hover:text-white cursor-pointer">→ Examples</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-14">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">Introduction</h1>

        <p className="text-gray-400 leading-relaxed text-lg max-w-3xl mb-8">
          Welcome to the official documentation. Here you will find everything you need to
          start building amazing projects. Explore the guides, learn how to integrate 
          components, and follow best practices to get the most out of our system.
        </p>

        {/* Content Box */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">🚀 Getting Started</h2>
          <p className="text-gray-400 mb-4">
            Follow the instructions below to quickly set up your environment.
          </p>

          <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto text-gray-300 border border-gray-700">
{`npm install your-package-name

# or

yarn add your-package-name`}
          </pre>
        </div>

        {/* Example Section */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">📦 Example Component</h2>
          <p className="text-gray-400 mb-4">
            Here is a quick example of how to use one of our UI components.
          </p>

          <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto text-gray-300 border border-gray-700">
{`import { Button } from "your-lib";

export default function App() {
  return <Button label="Click Me" />;
}`}
          </pre>
        </div>

      </main>
    </div>
  );
};

export default Docs;
