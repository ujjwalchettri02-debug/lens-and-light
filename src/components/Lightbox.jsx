import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Camera, Download } from "lucide-react";

const Lightbox = ({ photo, onClose }) => {
  const backButtonRef = useRef(null);

  useEffect(() => {
    if (!photo) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [photo]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    backButtonRef.current?.focus();
  }, [photo]);

  if (!photo) return null;

  const handlePayment = async () => {
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: photo.price }),
      });

      const order = await response.json();

      if (!order.id) {
        alert("Failed to create order");
        return;
      }

      const options = {
        key: "rzp_test_SHWWBGPAGnHu3b", // Your Razorpay Test Key ID
        amount: order.amount,
        currency: "INR",
        name: "Lens & Light",
        description: photo.title,
        order_id: order.id,
        handler: function () {
          window.location.href = `/download/${photo.id}`;
        },
        theme: {
          color: "#22c55e",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-zinc-950/95 backdrop-blur-xl overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="min-h-screen flex items-start justify-center px-4 py-16">
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-5xl bg-gradient-to-br from-zinc-900 via-blue-900/30 to-zinc-900 rounded-2xl shadow-2xl border border-blue-700/30"
            initial={{ y: 80, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-blue-700/30 bg-gradient-to-b from-zinc-900/90 to-zinc-900/60">
              <button
                ref={backButtonRef}
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-400/50 transition-all hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 p-8">
              <div className="flex items-center justify-center lg:w-1/2">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full max-h-[50vh] lg:max-h-[65vh] object-contain rounded-xl shadow-2xl"
                  draggable={false}
                />
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-xs font-semibold text-sky-300 bg-sky-500/20 border border-sky-400/40 px-3 py-1.5 rounded-full uppercase">
                    {photo.category}
                  </span>

                  <h2 className="mt-3 text-3xl font-bold bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                    {photo.title}
                  </h2>

                  <p className="mt-2 text-zinc-300 text-sm">
                    {photo.description}
                  </p>
                </div>

                <div className="border-t border-blue-700/30 pt-4">
                  <p className="text-xs text-zinc-400 uppercase">Investment</p>
                  <p className="text-2xl font-bold text-white">
                    ₹{photo.price}
                  </p>

                  <button
                    onClick={handlePayment}
                    className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-lg hover:scale-[1.02]"
                  >
                    <Download className="w-4 h-4" />
                    Buy & Download
                  </button>

                  <p className="mt-2 text-xs text-zinc-500 text-center">
                    🔒 Secure checkout powered by Razorpay
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default Lightbox;
