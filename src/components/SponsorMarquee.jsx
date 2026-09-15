import React from 'react';
import { ExternalLink, Handshake } from 'lucide-react';
import { sponsorsList, sponsorshipBrochurePdf } from '../data/clubData';

export default function SponsorMarquee({ onNavigateToSponsors }) {
  // Double list for infinite seamless scrolling
  const duplicatedSponsors = [...sponsorsList, ...sponsorsList];

  return (
    <section className="bg-leedy-navy-dark py-8 border-y border-leedy-navy-border overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Handshake className="w-5 h-5 text-leedy-gold" />
          <h3 className="font-display font-black text-sm sm:text-base uppercase tracking-wider text-white">
            Official Club Partners & Sponsors
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateToSponsors}
            className="text-xs text-leedy-gold hover:underline font-semibold flex items-center gap-1"
          >
            View All Partner Details & Offers →
          </button>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <a
            href={sponsorshipBrochurePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-leedy-navy-light/80 hover:bg-leedy-gold hover:text-leedy-navy-dark text-slate-200 font-semibold px-2.5 py-1 rounded transition-colors"
          >
            Become a Sponsor (PDF)
          </a>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
          {duplicatedSponsors.map((sponsor, index) => (
            <a
              key={`${sponsor.name}-${index}`}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-leedy-navy-card/90 hover:bg-leedy-navy-light px-5 py-3 rounded-xl border border-white/5 hover:border-leedy-gold/40 transition-all duration-200 shadow-md group shrink-0"
            >
              <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white group-hover:text-leedy-gold transition-colors flex items-center gap-1">
                  <span>{sponsor.name}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-[10px] text-slate-400 truncate max-w-[160px]">
                  {sponsor.category}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

