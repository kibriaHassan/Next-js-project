import React from 'react'

const Jook = () => {
  return (
    <>
       <nav className="flex items-center border mx-4 max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm relative"> 
          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Contact
          </button>
          <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition">
            Get Started
          </button>
    </nav>
    </>
  )
}

export default Jook
