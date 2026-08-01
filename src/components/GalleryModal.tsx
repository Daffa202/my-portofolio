"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryModalProps {
  photos: string[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSetIndex: (i: number) => void;
}

export function GalleryModal({ photos, activeIndex, onClose, onPrev, onNext, onSetIndex }: GalleryModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative w-full max-w-4xl rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-4 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-10 p-2 rounded-full border border-[var(--border)] bg-[var(--panel-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Tutup galeri"
          >
            <X className="w-4 h-4" />
          </button>

          <p className="text-center text-xs font-[var(--font-jetbrains-mono)] text-[var(--text-muted)] mb-3">
            {activeIndex + 1} / {photos.length}
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onPrev}
              className="p-2 rounded-full border border-[var(--border)] bg-[var(--panel-elevated)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors shrink-0"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 overflow-hidden rounded-xl bg-black flex items-center justify-center min-h-[300px]">
              <img
                src={photos[activeIndex]}
                alt={`Dokumentasi ${activeIndex + 1}`}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            <button
              onClick={onNext}
              className="p-2 rounded-full border border-[var(--border)] bg-[var(--panel-elevated)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors shrink-0"
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {photos.map((photo, index) => (
              <button
                key={`${photo}-${index}`}
                onClick={() => onSetIndex(index)}
                className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                  index === activeIndex
                    ? "border-[var(--accent)] opacity-100"
                    : "border-[var(--border)] opacity-50 hover:opacity-75"
                }`}
              >
                <img src={photo} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
