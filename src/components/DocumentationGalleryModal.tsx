"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface DocumentationGalleryModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}

export default function DocumentationGalleryModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onChangeIndex,
}: DocumentationGalleryModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        onChangeIndex((currentIndex - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        onChangeIndex((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentIndex, images.length, isOpen, onChangeIndex, onClose]);

  if (!isOpen || !images.length) return null;

  const activeImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full border border-slate-700 bg-slate-800 p-2 text-slate-300 hover:text-white"
          aria-label="Tutup galeri"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-between gap-3 pt-8">
          <button
            type="button"
            onClick={() => onChangeIndex((currentIndex - 1 + images.length) % images.length)}
            className="rounded-full border border-slate-700 bg-slate-800 p-2 text-slate-300 hover:text-white"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 overflow-hidden rounded-lg bg-slate-950">
            <img
              src={activeImage}
              alt={`Dokumentasi ${currentIndex + 1}`}
              className="max-h-[80vh] w-full object-contain"
            />
          </div>

          <button
            type="button"
            onClick={() => onChangeIndex((currentIndex + 1) % images.length)}
            className="rounded-full border border-slate-700 bg-slate-800 p-2 text-slate-300 hover:text-white"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {images.map((photo, index) => (
            <button
              key={`${photo}-${index}`}
              type="button"
              onClick={() => onChangeIndex(index)}
              className={`h-16 w-20 shrink-0 overflow-hidden rounded-md border ${
                index === currentIndex ? "border-blue-500 ring-1 ring-blue-500" : "border-slate-700"
              }`}
            >
              <img src={photo} alt={`Thumbnail dokumentasi ${index + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
