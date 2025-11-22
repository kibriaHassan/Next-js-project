"use client";
import React, { useRef } from "react";

const Docs = () => {
  // refs for each section
  const introRef = useRef(null);
  const gettingStartedRef = useRef(null);
  const installationRef = useRef(null);
  const componentsRef = useRef(null);
  const apiRef = useRef(null);
  const examplesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-[#111] border-r border-gray-800 p-6 hidden md:block sticky top-0 h-screen">
        <h2 className="text-xl font-bold mb-6">Documentation</h2>

        <ul className="space-y-4 text-gray-300">
          <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(introRef)}>→ Introduction</li>
          <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(gettingStartedRef)}>→ Getting Started</li>
          <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(installationRef)}>→ Installation</li>
          <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(componentsRef)}>→ Components</li>
          <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(apiRef)}>→ API Reference</li>
          <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection(examplesRef)}>→ Examples</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-14 space-y-16">

        {/* Introduction */}
        <section ref={introRef} className="scroll-mt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Introduction</h1>
          <p className="text-gray-400 leading-relaxed text-lg max-w-3xl mb-8">
            Welcome to the official documentation. Here you will find everything you need to
            start building amazing projects. Explore the guides, learn how to integrate 
            components, and follow best practices to get the most out of our system.
          </p>
        </section>

        {/* Getting Started */}
        <section ref={gettingStartedRef} className="scroll-mt-20">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg">
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
        </section>

        {/* Installation */}
        <section ref={installationRef} className="scroll-mt-20">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">💾 Installation</h2>
            <p className="text-gray-400 mb-4">
              Steps to install and integrate the library into your project.
            </p>
          </div>
        </section>

        {/* Components */}
        <section ref={componentsRef} className="scroll-mt-20">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">🧩 Components</h2>
            <p className="text-gray-400 mb-4">
              Explore the UI components you can use in your projects.
            </p>
          </div>
        </section>

        {/* API Reference */}
        <section ref={apiRef} className="scroll-mt-20">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">📚 API Reference</h2>
            <p className="text-gray-400 mb-4">
              Detailed API documentation for all components and functions.
            </p>
          </div>
        </section>

        {/* Examples */}
        <section ref={examplesRef} className="scroll-mt-20">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">💡 Examples</h2>
            <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto text-gray-300 border border-gray-700">
{`import { Button } from "your-lib";

export default function App() {
  return <Button label="Click Me" />;
}`}
            </pre>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Docs;
