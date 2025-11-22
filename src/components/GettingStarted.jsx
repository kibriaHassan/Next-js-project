"use client";
import React from "react";

const GettingStarted = () => {
  return (
    <section className="scroll-mt-20">
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
  );
};

export default GettingStarted;
