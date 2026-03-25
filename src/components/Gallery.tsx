import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const images = [
  "WhatsApp Image 2026-03-18 at 3.38.04 PM (1).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.04 PM (2).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.04 PM (3).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.04 PM (4).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.04 PM (5).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.04 PM.jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (1).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (2).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (3).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (4).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (5).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (6).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (7).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (8).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (9).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (10).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (11).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (12).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (13).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (14).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (15).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (16).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (17).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (18).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (19).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (20).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (21).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (22).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (23).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (24).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (25).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (26).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (27).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM (28).jpeg",
  "WhatsApp Image 2026-03-18 at 3.38.05 PM.jpeg"
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">Impressionen</h2>
          <p className="text-xl font-light text-brand-text/80 max-w-3xl mx-auto">
            Einblicke in den Ort und die Atmosphäre.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 10) * 0.1 }}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={`/${encodeURIComponent(img)}`}
                alt={`Impression ${i + 1}`}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={`/${encodeURIComponent(selectedImage)}`}
              alt="Enlarged impression"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
