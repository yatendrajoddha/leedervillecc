import React from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Users, 
  Award, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  ChevronRight 
} from 'lucide-react';
import { clubInfo, executiveCommittee, sponsorsList } from '../data/clubData';
import SponsorMarquee from '../components/SponsorMarquee';

export default function HomePage({ onNavigate }) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#FBBF24', '#0B132B', '#10B981', '#FFFFFF']
    });
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-leedy-navy-dark via-leedy-navy to-leedy-navy-card py-16 sm:py-24 border-b border-leedy-navy-border">
        {/* Decorative cricket field stitch & lighting effects */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-leedy-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-leedy-green/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Anniversay pill badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-leedy-gold/20 via-leedy-gold/10 to-transparent border border-leedy-gold/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-leedy-gold uppercase tracking-wider shadow-sm">
                <Trophy className="w-3.5 h-3.5 text-leedy-gold animate-bounce" />
                <span>1946 - 2026 • 80th Anniversary Milestone</span>
              </div>

              {/* Main Display Headline */}
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
                HARD & RESPECTFUL <br />
                <span className="gold-gradient-text">CRICKET</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Welcome to <span className="text-white font-semibold">Leederville Cricket Club</span>. For 80 years, we’ve stood for hard-fought cricket on Britannia Reserve and a warm, inclusive home for every cricketer, junior, and family off the field.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href={clubInfo.playHqUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-leedy-gold to-amber-500 hover:from-amber-400 hover:to-leedy-gold text-leedy-navy-dark font-display font-extrabold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:shadow-leedy-gold/25 hover:scale-105 transition-all"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Fixtures & Ladders on PlayHQ</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 bg-leedy-navy-light/90 hover:bg-leedy-navy-light text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/10 hover:border-leedy-gold/40 transition-all shadow-md"
                >
                  <Users className="w-4 h-4 text-leedy-gold" />
                  <span>Join The Club</span>
                </button>

                <button
                  onClick={() => onNavigate('history')}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-leedy-gold font-semibold transition-colors py-2 px-3"
                >
                  <span>Read our 80yr history</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Matchday / Training Status Strip */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/5">
                  <Clock className="w-3.5 h-3.5 text-leedy-green" />
                  Training: Tue & Thu 5:00 PM @ Britannia
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/5">
                  <ShieldCheck className="w-3.5 h-3.5 text-leedy-gold" />
                  NSCCA Senior & LMHJCC Junior Competitions
                </span>
              </div>
            </div>

            {/* Right Column: Interactive 80th Emblem Card & Ground Spotlight */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md bg-gradient-to-b from-leedy-navy-light/90 to-leedy-navy-card/95 p-6 sm:p-8 rounded-3xl border border-leedy-gold/30 shadow-2xl backdrop-blur-md text-center group">
                
                {/* 80th Anniversary Badge Clicker */}
                <div 
                  onClick={triggerConfetti} 
                  title="Click to celebrate 80 years!"
                  className="cursor-pointer relative inline-block mx-auto mb-6 transform group-hover:scale-105 transition-transform"
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-2 bg-gradient-to-tr from-leedy-gold via-amber-200 to-amber-600 shadow-xl flex items-center justify-center relative">
                    <img
                      src={clubInfo.clubBadges.anniversary80}
                      alt="80th Anniversary Leederville CC"
                      className="w-full h-full object-contain rounded-full bg-leedy-navy p-1"
                    />
                    <div className="absolute -bottom-2 bg-leedy-gold text-leedy-navy-dark text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-current" /> Tap to Cheer
                    </div>
                  </div>
                </div>

                <h3 className="font-display font-black text-2xl text-white tracking-tight">
                  80 YEARS STRONG
                </h3>
                <p className="text-xs text-leedy-gold font-bold tracking-widest uppercase mt-1">
                  1946 – 2026 • Vincent Community
                </p>

                <p className="text-xs text-slate-300 mt-4 leading-relaxed line-clamp-4 italic">
                  "{clubInfo.welcomeText}"
                </p>

                {/* Ground Location Quick Card */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-left">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-leedy-gold/15 flex items-center justify-center text-leedy-gold">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Britannia Reserve</div>
                      <div className="text-[11px] text-slate-400">Leederville WA 6007</div>
                    </div>
                  </div>
                  <a
                    href={clubInfo.ground.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-leedy-gold hover:underline font-semibold"
                  >
                    Directions →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK STATS COUNTERS */}
      <section className="bg-leedy-navy-dark py-8 border-b border-leedy-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="glass-panel p-5 rounded-2xl text-center border-leedy-gold/20">
              <div className="font-display font-black text-3xl sm:text-4xl text-leedy-gold">80</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Years of History</div>
              <div className="text-[11px] text-slate-500">Established in 1946</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl text-center border-leedy-gold/20">
              <div className="font-display font-black text-3xl sm:text-4xl text-white">74</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Life Members</div>
              <div className="text-[11px] text-slate-500">Dedicated Club Legends</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl text-center border-leedy-gold/20">
              <div className="font-display font-black text-3xl sm:text-4xl text-leedy-green-light">300+</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Junior Cricketers</div>
              <div className="text-[11px] text-slate-500">LMHJCC "The Kings"</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl text-center border-leedy-gold/20">
              <div className="font-display font-black text-3xl sm:text-4xl text-amber-400">10</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Community Partners</div>
              <div className="text-[11px] text-slate-500">Local Business Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSOR MARQUEE BANNER */}
      <SponsorMarquee onNavigateToSponsors={() => onNavigate('sponsors')} />

      {/* WELCOME & COMMUNITY SECTION */}
      <section className="py-16 sm:py-24 bg-leedy-navy max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-leedy-gold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-leedy-gold" />
              <span>Welcome to Leedy</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              A PROUD CRICKET TRADITION IN THE HEART OF VINCENT
            </h2>

            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                {clubInfo.welcomeText}
              </p>
              <p>
                From our humble beginnings at Loftus Park and Greenie Square in 1946 with a canvas bag of donated gear, to Britannia Reserve today fielding senior and junior sides across Western Australian community cricket, Leederville Cricket Club embodies community, camaraderie, and sporting spirit.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('committee')}
                className="inline-flex items-center gap-2 bg-leedy-navy-light text-white hover:bg-leedy-gold hover:text-leedy-navy-dark font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl border border-white/10 transition-all"
              >
                <span>Meet the 2026/27 Committee</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('juniors')}
                className="inline-flex items-center gap-2 bg-leedy-navy-light text-white hover:bg-leedy-gold hover:text-leedy-navy-dark font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl border border-white/10 transition-all"
              >
                <span>Junior Cricket (LMHJCC)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Ground & Club Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-leedy-gold/30 shadow-2xl group">
              <img
                src={clubInfo.heroImage}
                alt="Britannia Reserve Home Ground"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leedy-navy-dark via-leedy-navy-dark/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                <span className="bg-leedy-gold text-leedy-navy-dark text-xs font-black px-3 py-1 rounded uppercase tracking-wider w-max mb-2">
                  Our Home Ground
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  BRITANNIA RESERVE
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                  41 Britannia Road, Leederville. The beating heart of local summer cricket, junior family nights, and competitive weekend turf matches.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={clubInfo.ground.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-leedy-gold font-bold hover:underline"
                  >
                    <span>View Ground on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* EXPLORE THE CLUB: 4 FEATURE CARDS */}
      <section className="py-16 bg-leedy-navy-card/60 border-t border-leedy-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Explore Leederville CC
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Everything you need to know about our history, people, junior pathways, and records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Committee */}
            <div 
              onClick={() => onNavigate('committee')}
              className="glass-panel p-6 rounded-2xl cursor-pointer card-hover-effect group border-white/10 hover:border-leedy-gold"
            >
              <div className="w-12 h-12 rounded-xl bg-leedy-gold/15 flex items-center justify-center text-leedy-gold mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-leedy-gold transition-colors">
                2026/27 Committee
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Meet President Jayden Leach and our dedicated executive and general committee running club operations.
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-leedy-gold">
                <span>View Committee</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: History & The Leo */}
            <div 
              onClick={() => onNavigate('history')}
              className="glass-panel p-6 rounded-2xl cursor-pointer card-hover-effect group border-white/10 hover:border-leedy-gold"
            >
              <div className="w-12 h-12 rounded-xl bg-leedy-gold/15 flex items-center justify-center text-leedy-gold mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-leedy-gold transition-colors">
                80 Year History
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Life Members 1-74, Cliff Wemm Snr's founding story, and the legendary Leo Ellefsen Club Champion Award.
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-leedy-gold">
                <span>Explore History</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Juniors LMHJCC */}
            <div 
              onClick={() => onNavigate('juniors')}
              className="glass-panel p-6 rounded-2xl cursor-pointer card-hover-effect group border-white/10 hover:border-leedy-gold"
            >
              <div className="w-12 h-12 rounded-xl bg-leedy-green/15 flex items-center justify-center text-leedy-green-light mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-leedy-gold transition-colors">
                LMHJCC "The Kings"
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Over 300 junior players, In2Cricket & T20 Blast, girls' cricket, junior growth stats, and premiership archive.
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-leedy-gold">
                <span>Junior Hub</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Stats & PDF */}
            <div 
              onClick={() => onNavigate('statistics')}
              className="glass-panel p-6 rounded-2xl cursor-pointer card-hover-effect group border-white/10 hover:border-leedy-gold"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-leedy-gold transition-colors">
                Club Records & Stats
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Download the official Club Statistics PDF, see all-time centuries, bowling hauls, and highest team totals.
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-leedy-gold">
                <span>View Stats</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

