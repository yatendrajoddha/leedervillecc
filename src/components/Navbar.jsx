import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Trophy, Calendar, MapPin, Shield } from 'lucide-react';
import { clubInfo } from '../data/clubData';

export default function Navbar({ currentRoute, setCurrentRoute }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'committee', label: 'Committee' },
    { id: 'history', label: 'History' },
    { id: 'juniors', label: 'Juniors' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'statistics', label: 'Statistics' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setCurrentRoute(id);
    window.location.hash = id === 'home' ? '' : `#/${id}`;
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-leedy-navy-dark/95 backdrop-blur-md shadow-xl border-b border-leedy-gold/20 py-2.5' : 'bg-leedy-navy/90 backdrop-blur-sm border-b border-white/10 py-3.5'
    }`}>
      {/* Top micro banner */}
      <div className="hidden lg:block bg-gradient-to-r from-leedy-navy-dark via-leedy-navy to-leedy-navy-dark text-xs py-1 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-slate-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-leedy-gold font-medium">
              <Trophy className="w-3.5 h-3.5" />
              Celebrating 80 Years of Cricket (1946 - 2026)
            </span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-leedy-gold" />
              Britannia Reserve, Leederville WA
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={clubInfo.juniorsWebsite} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-leedy-gold transition-colors flex items-center gap-1"
            >
              Junior Kings Website <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-500">•</span>
            <a 
              href={clubInfo.playHqUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-leedy-gold hover:underline font-semibold flex items-center gap-1"
            >
              PlayHQ Portal <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative">
              <img 
                src={clubInfo.clubBadges.primary} 
                alt="Leederville CC Crest" 
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-leedy-gold object-cover shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 bg-leedy-gold text-leedy-navy-dark text-[9px] font-black px-1 rounded-sm uppercase tracking-tighter shadow">
                80y
              </span>
            </div>
            <div>
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white block leading-tight group-hover:text-leedy-gold transition-colors">
                LEEDERVILLE CC
              </span>
              <span className="text-[11px] font-semibold tracking-widest text-leedy-gold uppercase block">
                Est. 1946 • Britannia Reserve
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isActive 
                      ? 'text-leedy-gold bg-leedy-navy-light/80 shadow-inner' 
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-leedy-gold rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: PlayHQ CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={clubInfo.playHqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-leedy-gold to-amber-500 hover:from-amber-400 hover:to-leedy-gold text-leedy-navy-dark font-display font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-lg shadow-lg hover:shadow-leedy-gold/20 hover:scale-105 transition-all"
            >
              <span>Play HQ</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={clubInfo.playHqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-leedy-gold text-leedy-navy-dark font-bold px-2.5 py-1 rounded shadow"
            >
              PlayHQ
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-leedy-navy-dark/98 border-b border-leedy-gold/20 px-4 pt-3 pb-5 mt-2 space-y-1 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-leedy-gold px-3 py-1 mb-2">
            Navigation
          </div>
          {navLinks.map((link) => {
            const isActive = currentRoute === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-leedy-gold/15 text-leedy-gold border-l-4 border-leedy-gold'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-leedy-gold" />}
              </button>
            );
          })}
          
          <div className="pt-4 border-t border-white/10 mt-3 space-y-2">
            <a
              href={clubInfo.playHqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-leedy-gold to-amber-500 text-leedy-navy-dark font-extrabold text-sm py-2.5 rounded-lg shadow uppercase tracking-wider"
            >
              <span>Play HQ (Fixtures & Ladders)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={clubInfo.juniorsWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-slate-800 text-slate-200 font-semibold text-sm py-2.5 rounded-lg hover:bg-slate-700"
            >
              <span>Juniors Website (lmhjcc.com.au)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

