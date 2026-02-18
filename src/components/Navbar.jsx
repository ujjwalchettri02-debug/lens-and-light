import React from 'react';
import { Aperture } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-glass border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative p-2 bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-500 rounded-lg group-hover:shadow-2xl group-hover:shadow-blue-400/50 transition-all duration-300 transform group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-blue-300 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
              <Aperture className="w-6 h-6 text-white relative z-10" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold tracking-tight bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Lens & Light
              </h1>
              <p className="text-xs text-zinc-400 font-sans">
                Fine Art Photography
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#gallery" className="text-sm font-medium text-zinc-300 hover:text-zinc-100">
              Gallery
            </a>
            <a href="#about" className="text-sm font-medium text-zinc-300 hover:text-zinc-100">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-zinc-300 hover:text-zinc-100">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
