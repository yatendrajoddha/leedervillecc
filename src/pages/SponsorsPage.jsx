import React, { useState, useMemo } from 'react';
import { 
  Handshake, 
  ExternalLink, 
  Download, 
  Filter, 
  CheckCircle, 
  Star, 
  ShieldCheck,
  Building,
  Utensils,
  Activity,
  Car,
  ShoppingBag
} from 'lucide-react';
import { sponsorsList, sponsorshipBrochurePdf } from '../data/clubData';

export default function SponsorsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Dining & Hospitality', 'Health & Fitness', 'Trade & Commercial', 'Automotive & Retail'];

  const getCategoryGroup = (cat) => {
    if (cat.includes('Dining') || cat.includes('Pub') || cat.includes('Pizza') || cat.includes('Burgers')) return 'Dining & Hospitality';
    if (cat.includes('Wellness') || cat.includes('Podiatry') || cat.includes('Recovery')) return 'Health & Fitness';
    if (cat.includes('Refrigeration') || cat.includes('Building') || cat.includes('Home')) return 'Trade & Commercial';
    return 'Automotive & Retail';
  };

  const filteredSponsors = useMemo(() => {
    if (selectedCategory === 'All') return sponsorsList;
    return sponsorsList.filter(s => getCategoryGroup(s.category) === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-leedy-gold/15 text-leedy-gold text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-leedy-gold/30 mb-3">
          <Handshake className="w-3.5 h-3.5" />
          <span>Club Partners & Sponsors</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          OUR VALUED <span className="gold-gradient-text">SPONSORS</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed italic">
          "Without your commitment and support, our Club's work is that much harder... Thank you for investing in grassroots cricket and our Vincent community!"
        </p>

        {/* Action: Download Sponsorship Proposal */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={sponsorshipBrochurePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-leedy-gold to-amber-500 hover:from-amber-400 hover:to-leedy-gold text-leedy-navy-dark font-display font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Sponsorship Packages (PDF)</span>
          </a>
        </div>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === cat
                ? 'bg-leedy-gold text-leedy-navy-dark shadow-md scale-105'
                : 'bg-leedy-navy-card text-slate-300 hover:bg-leedy-navy-light hover:text-white border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SPONSOR CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredSponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="glass-panel rounded-3xl border-white/10 hover:border-leedy-gold/40 card-hover-effect overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Card Header with Logo */}
              <div className="p-6 sm:p-8 bg-leedy-navy-dark/70 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl p-2 flex items-center justify-center shrink-0 shadow-lg">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-leedy-gold bg-leedy-gold/10 px-2.5 py-0.5 rounded border border-leedy-gold/20">
                      {sponsor.category}
                    </span>
                    <h3 className="font-display font-black text-2xl text-white mt-1">
                      {sponsor.name}
                    </h3>
                  </div>
                </div>

                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-leedy-navy-light hover:bg-leedy-gold hover:text-leedy-navy-dark text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 transition-colors shrink-0 w-max"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Sponsor Media Image if available */}
              {sponsor.image && (
                <div className="h-48 overflow-hidden bg-black/40 border-b border-white/5">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sponsor.description}
                </p>

                {sponsor.distributor && (
                  <div className="bg-leedy-navy-dark/60 p-3 rounded-xl border border-white/5 text-xs text-slate-400">
                    <strong className="text-slate-200">Brands & Distribution:</strong> {sponsor.distributor}
                  </div>
                )}

                {sponsor.highlight && (
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-leedy-gold shrink-0 mt-0.5" />
                    <span>{sponsor.highlight}</span>
                  </div>
                )}

                {sponsor.hours && (
                  <div className="bg-leedy-navy-dark/60 p-3 rounded-xl border border-white/5 text-xs text-slate-300">
                    <strong className="text-leedy-gold">Opening Hours:</strong> {sponsor.hours}
                  </div>
                )}

                {sponsor.contact && (
                  <div className="text-xs text-leedy-gold font-bold">
                    {sponsor.contact}
                  </div>
                )}

                {sponsor.tagline && (
                  <div className="text-xs italic text-slate-400">
                    "{sponsor.tagline}"
                  </div>
                )}
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 py-4 bg-leedy-navy-dark/80 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-leedy-gold font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Verified Club Partner
              </span>
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1 underline"
              >
                <span>{sponsor.website.replace('https://', '').replace('http://', '').replace(/\/$/, '')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CALL TO ACTION: SPONSORSHIP ENQUIRY */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl border-leedy-gold/30 text-center max-w-3xl mx-auto space-y-4">
        <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
          PARTNER WITH LEEDERVILLE CRICKET CLUB
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Gain direct exposure to hundreds of local families, seniors, and active sports enthusiasts in the Vincent area while directly supporting youth sports equipment, pitch hire, and community tournaments.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={sponsorshipBrochurePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-leedy-gold text-leedy-navy-dark font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow hover:scale-105 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Sponsorship Kit</span>
          </a>
          <a
            href="mailto:president@leedervillecc.com?subject=Sponsorship%20Enquiry%20-%20Leederville%20CC"
            className="bg-leedy-navy-light text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl border border-white/10 hover:border-leedy-gold/40 transition-all"
          >
            Contact President
          </a>
        </div>
      </section>

    </div>
  );
}

