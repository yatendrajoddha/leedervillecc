import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function PhotoModal({ photo, onClose }) {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative max-w-4xl w-full bg-leedy-navy-dark border border-leedy-gold/30 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full border border-white/20 hover:scale-110 transition-transform"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[75vh] overflow-hidden bg-black/50 flex items-center justify-center">
          <img
            src={photo.url}
            alt={photo.title || "Club Photo"}
            className="w-full h-auto max-h-[75vh] object-contain"
          />
        </div>

        <div className="p-4 sm:p-6 bg-leedy-navy-card border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h4 className="font-display font-bold text-white text-base sm:text-lg">
              {photo.title || "Leederville Cricket Club Archive"}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Historical Club Collection • Britannia Reserve, Western Australia
            </p>
          </div>

          <a
            href={photo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-leedy-navy-light hover:bg-leedy-gold hover:text-leedy-navy-dark text-slate-200 font-semibold px-3 py-1.5 rounded-lg border border-white/10 transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Open Original</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

