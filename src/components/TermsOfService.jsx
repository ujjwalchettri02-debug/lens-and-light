import React from 'react';
import { X, FileText } from 'lucide-react';

const TermsOfService = ({ isOpen, onClose }) => {
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
              <FileText className="w-6 h-6 text-zinc-100" />
            </div>
            <h2 className="font-display text-2xl font-bold">Terms of Service</h2>
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
            Welcome to Lens & Light. By using our website and services, you agree to these terms. Please read them carefully.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">Use License</h3>
              <p className="text-sm text-zinc-400">
                You are granted a non-exclusive, non-transferable license to view and use content on this website for personal, non-commercial purposes only. You may not copy, modify, reproduce, or distribute any content without explicit written permission.
              </p>
            </div>

            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">Purchases & Payments</h3>
              <p className="text-sm text-zinc-400">
                All purchases are final unless otherwise stated. Prices are subject to change without notice. We reserve the right to cancel or reject any order. Payment must be completed through our secure payment gateway.
              </p>
            </div>

            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">Digital Content</h3>
              <p className="text-sm text-zinc-400">
                Digital downloads are for personal use only. You may not resell, republish, or distribute digital products. Unauthorized commercial use is strictly prohibited.
              </p>
            </div>

            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">Intellectual Property</h3>
              <p className="text-sm text-zinc-400">
                All photographs, designs, and content are the exclusive property of Lens & Light and protected by copyright law. Unauthorized use is prohibited.
              </p>
            </div>

            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">Limitation of Liability</h3>
              <p className="text-sm text-zinc-400">
                We are not liable for any indirect, incidental, or consequential damages. Our liability is limited to the amount paid for the product or service.
              </p>
            </div>

            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">Changes to Terms</h3>
              <p className="text-sm text-zinc-400">
                We reserve the right to modify these terms at any time. Changes are effective immediately upon posting. Your continued use constitutes acceptance.
              </p>
            </div>

            <div className="border-l-4 border-zinc-600 pl-6 py-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-2">Contact</h3>
              <p className="text-sm text-zinc-400">
                Questions about our terms?<br />
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

export default TermsOfService;
