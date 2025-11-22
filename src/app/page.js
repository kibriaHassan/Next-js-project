"use client";
import React from "react";
import Image from "next/image";
import pic from "../images/banner.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans">
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 md:py-32 gap-12">

        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Beautiful, Modern Web Apps <br className="hidden md:block"/> Effortlessly.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl">
            Create fast, responsive, and visually stunning web applications 
            using modern tools and frameworks. Save time and build smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-medium transition duration-300">
              Get Started
            </button>
            <button className="border border-gray-600 hover:bg-gray-800 px-6 py-3 rounded-full font-medium transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src={pic} // change to your image path
            alt="Hero Illustration"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>

      </section>

      <section className="px-6 md:px-20 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: "Fast Performance",
            desc: "Optimized for speed to provide the best user experience for your apps.",
            icon: "⚡",
          },
          {
            title: "Modern UI",
            desc: "Beautiful, responsive, and modern UI components ready to use.",
            icon: "🎨",
          },
          {
            title: "Fully Responsive",
            desc: "Your apps will look perfect on all devices, from mobile to desktop.",
            icon: "📱",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="bg-[#111] p-8 rounded-2xl border border-gray-800 shadow-lg text-center"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#111] py-20 px-6 md:px-20 rounded-t-3xl text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Join thousands of developers building amazing web applications with our platform.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-medium transition duration-300">
          Start Your Project
        </button>
      </section>

    </div>
  );
}
