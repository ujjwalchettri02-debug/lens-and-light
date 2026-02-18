import React from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 via-blue-900/10 to-zinc-950 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="font-sans text-zinc-400 max-w-xl mx-auto text-lg">
            My passion for capturing beauty through the lens
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Bio Section */}
          <div className="bg-zinc-800/20 backdrop-blur-sm border border-zinc-700/30 rounded-2xl p-8 sm:p-10 hover:border-zinc-600/50 transition-all duration-300 hover:bg-zinc-800/30">
            <p className="font-sans text-zinc-200 leading-relaxed mb-5 text-lg">
              I'm a visual storyteller dedicated to capturing the world's most breathtaking moments. 
              Through my lens, I explore the intersection of light, emotion, and texture, transforming 
              ordinary scenes into extraordinary works of art.
            </p>
            <p className="font-sans text-zinc-300 leading-relaxed text-lg">
              Every photograph is a conversation between observer and subject—a chance to reveal beauty 
              in unexpected places and to celebrate the profound moments that define our lives.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-blue-900/20 to-zinc-800/20 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-8 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-900/30 hover:to-zinc-800/30 transition-all duration-300">
              <div className="p-3 bg-gradient-to-br from-sky-500/30 to-blue-500/30 rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-all duration-300">
                <Camera className="w-6 h-6 text-sky-300" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-zinc-100">Expertise</h3>
              <p className="font-sans text-sm text-zinc-350 leading-relaxed">
                Specializing in landscape, wildlife, and portrait photography with a keen eye for 
                composition and light.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-900/20 to-zinc-800/20 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-8 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-900/30 hover:to-zinc-800/30 transition-all duration-300">
              <div className="p-3 bg-gradient-to-br from-sky-500/30 to-blue-500/30 rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-all duration-300">
                <Eye className="w-6 h-6 text-sky-300" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-zinc-100">Vision</h3>
              <p className="font-sans text-sm text-zinc-350 leading-relaxed">
                Creating compelling imagery that tells stories, evokes emotions, and celebrates the 
                beauty in everyday life.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-900/20 to-zinc-800/20 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-8 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-900/30 hover:to-zinc-800/30 transition-all duration-300">
              <div className="p-3 bg-gradient-to-br from-sky-500/30 to-blue-500/30 rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-all duration-300">
                <Sparkles className="w-6 h-6 text-sky-300" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-zinc-100">Craft</h3>
              <p className="font-sans text-sm text-zinc-350 leading-relaxed">
                Combining technical mastery with artistic vision to deliver timeless pieces that 
                resonate with viewers.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pt-8">
            <p className="font-sans text-zinc-400 text-base">
              Explore my gallery to see how I capture the world's infinite beauty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
