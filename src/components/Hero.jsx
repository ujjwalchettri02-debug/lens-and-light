import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-950 via-blue-950/20 to-zinc-950 mt-16">
      
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Background Image with Improved Visibility */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/1920/1080"
          alt="Hero background"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
          Capturing{' '}
          <span className="italic">
            Moments
          </span>
        </h1>

        <p className="font-sans text-lg sm:text-xl text-zinc-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Explore a curated collection of fine art photography. Each photograph tells a story,
          captured through the lens of passion and precision.
        </p>

        <a
          href="#gallery"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-500 text-white font-sans font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 transform hover:scale-105"
        >
          Explore Gallery
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-blue-400" />
      </div>

    </section>
  );
};

export default Hero;