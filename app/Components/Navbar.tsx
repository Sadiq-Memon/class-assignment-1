import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-400">
    <nav className="h-8 flex items-center justify-between px-10">
        <div className="text-black font-bold shadow-lg">Sadiq Raza</div>
        <div className="flex space-x-8">
            <Link href="/" className=" m-1 text-black hover:text-gray-200 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">Home</Link>
            <Link href="/About" className="m-1 text-black hover:text-gray-200 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">About</Link>
            <Link href="/Contact" className="m-1 text-black hover:text-gray-200 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">Contact</Link>
            <Link href="/Project" className="m-1 text-black hover:text-gray-200 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">Project</Link>
            <Link href="/Skills" className="m-1 text-black hover:text-gray-200 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">Skills</Link>
        </div>
    </nav>
</div>

 
  )
}

export default Navbar
