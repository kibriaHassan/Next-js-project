"use client";
import React from "react";

const Examples = () => {
  return (
    <section className="scroll-mt-20">
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
  );
};

export default Examples;
