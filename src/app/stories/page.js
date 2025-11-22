"use client";
import React from "react";

const Stories = () => {
  return (
    <section className="min-h-screen bg-[#0B0B0B] text-white py-20 px-6">
      
      {/* Page Title */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Inspiring Stories
        </h1>
        <p className="text-gray-400 text-lg">
          Read personal journeys, experiences, and success stories that motivate.
        </p>
      </div>

      {/* Story Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="bg-[#111] p-6 rounded-2xl border border-gray-700 hover:border-gray-500 hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold mb-2">Journey to Freelancing</h3>
          <p className="text-gray-400 mb-4">
            How I became a successful freelancer in 2 years.
          </p>
          <button className="text-indigo-400 hover:text-indigo-300">Read More →</button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#111] p-6 rounded-2xl border border-gray-700 hover:border-gray-500 hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold mb-2">From Zero to Developer</h3>
          <p className="text-gray-400 mb-4">
            A complete transformation story of becoming a developer.
          </p>
          <button className="text-indigo-400 hover:text-indigo-300">Read More →</button>
        </div>

        {/* Card 3 */}
        <div className="bg-[#111] p-6 rounded-2xl border border-gray-700 hover:border-gray-500 hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold mb-2">Startup Journey</h3>
          <p className="text-gray-400 mb-4">
            How a small idea turned into a successful startup.
          </p>
          <button className="text-indigo-400 hover:text-indigo-300">Read More →</button>
        </div>

      </div>
    </section>
  );
};

export default Stories;
