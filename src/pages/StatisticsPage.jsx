import React, { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  Trophy, 
  Flame, 
  FileText, 
  CheckCircle2, 
  ExternalLink,
  Target,
  Users,
  Shield,
  Sparkles
} from 'lucide-react';
import { statisticsPdf, statisticsHighlights } from '../data/clubData';
import PhotoModal from '../components/PhotoModal';

export default function StatisticsPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const gavPhoto = {
    url: "https://static.wixstatic.com/media/f41927_c1deaef8b1fc42ea8834fd6a179ab547~mv2.jpg",
    title: "Leederville CC All-Stars Celebration"
  };

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-amber-500/15 text-amber-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-amber-500/30 mb-3">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>80 Seasons of Scorebooks & Records</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          LCC CLUB <span className="gold-gradient-text">STATISTICS</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
          From historic centuries and match-winning hat-tricks to career averages and multi-generational family milestones—explore the records that define Leederville Cricket Club.
        </p>

        {/* Primary Download Button */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={statisticsPdf}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-leedy-gold to-amber-500 hover:from-amber-400 hover:to-leedy-gold text-leedy-navy-dark font-display font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Complete Club Statistics (PDF)</span>
          </a>
        </div>
      </div>

      {/* PDF DOCUMENT SPOTLIGHT CARD */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border-leedy-gold/30 bg-gradient-to-r from-leedy-navy-card/90 via-leedy-navy-light/40 to-leedy-navy-card/90">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-leedy-gold uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>Official Statistical Archive</span>
            </span>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              WHAT’S INSIDE THE OFFICIAL CLUB STATS COMPENDIUM
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Curated and maintained across 8 decades of official scorecards, the master PDF contains exhaustive individual and team breakdowns for every cricketer to wear the Leedy cap.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {statisticsHighlights.slice(0, 8).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-leedy-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{item.title}:</strong> <span className="text-slate-400">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-leedy-navy-dark/90 rounded-2xl border border-white/10 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-leedy-gold/15 text-leedy-gold flex items-center justify-center">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-base">Full LCC Club Statistics</div>
              <div className="text-[11px] text-slate-400">PDF Document • High Resolution</div>
            </div>
            <a
              href={statisticsPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-leedy-gold hover:bg-amber-400 text-leedy-navy-dark font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

        </div>
      </div>

      {/* ALL STATISTICAL CATEGORIES BREAKDOWN */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-leedy-gold" />
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
            RECORD CATEGORIES INCLUDED
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {statisticsHighlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-subtle p-5 rounded-2xl border-white/5 hover:border-leedy-gold/40 transition-all card-hover-effect flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-leedy-navy-light text-leedy-gold font-display font-bold text-xs flex items-center justify-center shrink-0 border border-leedy-gold/20">
                #{idx + 1}
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ALL STARS GAV CELEBRATION PHOTO */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-leedy-gold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Club Legend & All-Stars</span>
          </div>
          <h3 className="font-display font-black text-2xl text-white">
            CENTURY MAKERS & RECORD BREAKERS
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Celebrating the milestones, victories, and unforgettable moments etched into Leederville Cricket Club scorebooks.
          </p>
          <a
            href={statisticsPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-leedy-gold font-bold hover:underline pt-2"
          >
            <span>Read all individual records in the PDF →</span>
          </a>
        </div>

        <div
          onClick={() => setSelectedPhoto(gavPhoto)}
          className="cursor-pointer relative rounded-2xl overflow-hidden border border-white/10 group shadow-xl max-w-md w-full aspect-video"
        >
          <img
            src={gavPhoto.url}
            alt="All Stars Gav"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
            <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/20">
              All Stars Gav • Click to enlarge
            </span>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </div>
  );
}

