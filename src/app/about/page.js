"use client";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white px-6 md:px-20 py-16">

      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We are a modern tech-driven team focused on building beautiful, scalable and high-quality digital products.
        </p>
      </div>

      {/* 2 Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-20">

        {/* Left Text Box */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Our mission is to deliver top-notch solutions using cutting-edge technologies.
            With a strong focus on user experience, performance, and innovation,
            we help brands transform their digital presence.
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed text-lg">
            Over the years, we have worked with startups, global businesses, 
            and individuals to create world-class apps, websites and digital products.
          </p>
        </div>

        {/* Right Box */}
        <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            To empower businesses with modern, powerful and scalable tech solutions  
            — delivering quality products that make an impact.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Our Vision</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            To be a global leader in technology-driven digital transformation.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-4xl font-bold text-indigo-400">7+</h2>
          <p className="text-gray-400 mt-2">Years Experience</p>
        </div>
        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-4xl font-bold text-indigo-400">95+</h2>
          <p className="text-gray-400 mt-2">Projects Completed</p>
        </div>
        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-4xl font-bold text-indigo-400">30+</h2>
          <p className="text-gray-400 mt-2">Clients</p>
        </div>
        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-4xl font-bold text-indigo-400">10+</h2>
          <p className="text-gray-400 mt-2">Awards Won</p>
        </div>
      </div>

    </div>
  );
};

export default About;
