"use client";
import React from "react";

const Pricing = () => {
  return (
    <section className="min-h-screen bg-[#0B0B0B] text-white py-20 px-6">

      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h1>
        <p className="text-gray-400 text-lg">
          Choose a plan that fits your needs. No hidden charges, no surprises.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Free Plan */}
        <div className="bg-[#111] border border-gray-700 hover:border-gray-500 rounded-2xl p-8 transition hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-2">Starter</h2>
          <p className="text-gray-400 mb-6">Perfect for beginners</p>

          <h3 className="text-4xl font-bold mb-4">$0</h3>
          <p className="text-gray-500 mb-6">Free forever</p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>✔ Basic Features</li>
            <li>✔ Limited Access</li>
            <li>✔ Community Support</li>
          </ul>

          <button className="w-full bg-white text-black py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#181818] border border-indigo-500 shadow-[0_0_40px_5px_rgba(99,102,241,0.3)] rounded-2xl p-8 transition hover:-translate-y-1 scale-105">
          <h2 className="text-xl font-semibold mb-2">Pro</h2>
          <p className="text-gray-400 mb-6">Best for professionals</p>

          <h3 className="text-4xl font-bold mb-4">$29</h3>
          <p className="text-gray-500 mb-6">per month</p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>✔ All Starter Features</li>
            <li>✔ Full Access</li>
            <li>✔ Priority Support</li>
            <li>✔ Free Updates</li>
          </ul>

          <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-2 rounded-full font-medium transition">
            Choose Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-[#111] border border-gray-700 hover:border-gray-500 rounded-2xl p-8 transition hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p className="text-gray-400 mb-6">For large teams and companies</p>

          <h3 className="text-4xl font-bold mb-4">$99</h3>
          <p className="text-gray-500 mb-6">per month</p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>✔ All Pro Features</li>
            <li>✔ Unlimited Access</li>
            <li>✔ 24/7 Dedicated Support</li>
            <li>✔ Custom Solutions</li>
          </ul>

          <button className="w-full bg-white text-black py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Contact Sales
          </button>
        </div>

      </div>

    </section>
  );
};

export default Pricing;
