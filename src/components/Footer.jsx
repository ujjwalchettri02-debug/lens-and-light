import React, { useState } from 'react';
import { Instagram, Mail, Aperture } from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const Footer = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-t from-zinc-950 via-blue-950/10 to-zinc-950 border-t border-zinc-800/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4 group cursor-pointer">
              <div className="relative p-2 bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-500 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-blue-300 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                <Aperture className="w-5 h-5 text-white relative z-10" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Lens & Light
                </h3>
                <p className="text-xs text-zinc-500">Fine Art Photography</p>
              </div>
            </div>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed">
              Capturing the world's beauty, one frame at a time. Each photograph is a
              unique piece of art.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-zinc-300 mb-4 uppercase tracking-wide text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a href="#gallery" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-sans font-semibold text-zinc-300 mb-4 uppercase tracking-wide text-sm">
              Connect
            </h4>

            <div className="flex gap-4 mb-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/snap.outofit_?igsh=MTRveTVrNTIydTJkYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-sky-500/30 to-blue-500/30 border border-blue-400/30 rounded-lg hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-sky-300" />
              </a>

              {/* Gmail Direct Open */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lensandlightpkg@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-sky-500/30 to-blue-500/30 border border-blue-400/30 rounded-lg hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-sky-300" />
              </a>
            </div>

            <p className="font-sans text-sm text-zinc-400">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lensandlightpkg@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-100 transition-colors duration-200"
              >
                lensandlightpkg@gmail.com
              </a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800/50 pt-12 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-sans text-sm text-zinc-500">
              © {currentYear} Lens & Light. All rights reserved.
            </p>
            <div className="flex gap-8 font-sans text-sm">
              <button
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="text-zinc-400 hover:text-sky-300 transition-colors duration-200 cursor-pointer font-medium"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsOfServiceOpen(true)}
                className="text-zinc-400 hover:text-sky-300 transition-colors duration-200 cursor-pointer font-medium"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      <PrivacyPolicy 
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
      <TermsOfService 
        isOpen={isTermsOfServiceOpen}
        onClose={() => setIsTermsOfServiceOpen(false)}
      />
    </footer>
  );
};

export default Footer;