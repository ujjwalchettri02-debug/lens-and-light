import React from 'react';
import { X, Shield } from 'lucide-react';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-zinc-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-zinc-700/50 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-zinc-900 to-zinc-800 border-b border-zinc-700/50 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-800 rounded-lg">
              <Shield className="w-6 h-6 text-zinc-100" />
            </div>
            <h2 className="font-display text-2xl font-bold">Privacy Policy</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-all duration-200 transform hover:scale-110"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 font-sans text-zinc-300 animate-fade-in-delay">
          <p className="text-lg leading-relaxed text-zinc-200">
            At Lens & Light, your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">Data We Collect</h3>
              <p className="text-sm text-zinc-400">
                We collect information you provide directly (name, email, address) and automatically (IP address, browser type, pages visited) to process orders, respond to inquiries, and improve your experience.
              </p>
            </div>

            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">How We Use It</h3>
              <p className="text-sm text-zinc-400">
                Your information helps us fulfill orders, send updates, prevent fraud, and enhance our services. We never sell your data to third parties.
              </p>
            </div>

            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">Security</h3>
              <p className="text-sm text-zinc-400">
                We use industry-standard encryption and security measures to protect your information from unauthorized access.
              </p>
            </div>

            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">Your Rights</h3>
              <p className="text-sm text-zinc-400">
                You have the right to access, update, or delete your personal data at any time. Contact us at contact@lensandlight.com for any requests.
              </p>
            </div>

            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">Contact</h3>
              <p className="text-sm text-zinc-400">
                Questions about our privacy practices?<br />
                Email: <span className="text-zinc-200 font-medium">contact@lensandlight.com</span>
              </p>
            </div>
          </div>

          <div className="text-xs text-zinc-500 pt-6 border-t border-zinc-800">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
