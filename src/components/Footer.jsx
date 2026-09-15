import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Heart, Shield, Trophy } from 'lucide-react';
import { clubInfo, executiveCommittee, sponsorsList } from '../data/clubData';

export default function Footer({ setCurrentRoute }) {
  const handleNav = (id) => {
    setCurrentRoute(id);
    window.location.hash = id === 'home' ? '' : `#/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-leedy-navy-dark border-t border-leedy-navy-border text-slate-300">
      {/* Sponsor quick bar */}
      <div className="bg-leedy-navy-card/80 border-b border-white/5 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-leedy-gold font-bold">
            <Shield className="w-4 h-4 text-leedy-gold" />
            Proudly Supported By Our Community Partners
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            {sponsorsList.map((s) => (
              <a 
                key={s.name} 
                href={s.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-leedy-gold transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Ground */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={clubInfo.clubBadges.primary} 
                alt="Leederville CC" 
                className="w-12 h-12 rounded-full border-2 border-leedy-gold object-cover"
              />
              <div>
                <span className="font-display font-black text-lg text-white block">
                  LEEDERVILLE CC
                </span>
                <span className="text-xs text-leedy-gold font-semibold uppercase tracking-wider">
                  Est. 1946 • 80th Anniversary
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Playing a hard and respectful brand of cricket on the field, and welcoming everyone off the field. A proud pillar of the Vincent community for 80 years.
            </p>

            <div className="pt-2 text-sm space-y-2">
              <a 
                href={clubInfo.ground.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-2.5 text-slate-300 hover:text-leedy-gold transition-colors group"
              >
                <MapPin className="w-4 h-4 text-leedy-gold shrink-0 mt-0.5" />
                <span className="group-hover:underline">
                  {clubInfo.ground.name}<br />
                  {clubInfo.ground.address}
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider border-b border-leedy-gold/30 pb-2">
              Club Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'committee', label: '2026/27 Committee' },
                { id: 'history', label: 'Club History & Life Members' },
                { id: 'juniors', label: 'Juniors (LMHJCC Kings)' },
                { id: 'sponsors', label: 'Sponsors & Partners' },
                { id: 'statistics', label: 'Full Club Statistics' },
                { id: 'contact', label: 'Contact Us & Location' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-slate-400 hover:text-leedy-gold transition-colors hover:translate-x-1 duration-150 inline-block text-left"
                  >
                    › {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Executive */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider border-b border-leedy-gold/30 pb-2">
              Key Contacts
            </h4>
            <div className="space-y-3 text-sm">
              {executiveCommittee.slice(0, 3).map((exec) => (
                <div key={exec.role} className="bg-leedy-navy-light/40 p-2.5 rounded-lg border border-white/5">
                  <div className="text-xs text-leedy-gold font-bold uppercase">{exec.role}</div>
                  <div className="font-semibold text-white text-sm">{exec.name}</div>
                  <div className="flex flex-col text-xs text-slate-300 mt-1 gap-0.5">
                    {exec.phone && (
                      <a href={`tel:${exec.phone.replace(/\s+/g, '')}`} className="hover:text-leedy-gold flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-leedy-gold" /> {exec.phone}
                      </a>
                    )}
                    <a href={`mailto:${exec.email}`} className="hover:text-leedy-gold flex items-center gap-1.5 truncate">
                      <Mail className="w-3 h-3 text-leedy-gold" /> {exec.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: External Portals & Community */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider border-b border-leedy-gold/30 pb-2">
              Portals & Affiliates
            </h4>
            
            <a
              href={clubInfo.playHqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg bg-gradient-to-r from-leedy-gold to-amber-500 text-leedy-navy-dark font-display font-extrabold text-sm uppercase tracking-wider text-center shadow-lg hover:brightness-110 transition-all"
            >
              <div className="flex items-center justify-center gap-1.5">
                <span>Play HQ Cricket Hub</span>
                <ExternalLink className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-semibold opacity-90 block mt-0.5">Fixtures • Ladders • Results</span>
            </a>

            <a
              href={clubInfo.juniorsWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg bg-leedy-navy-light/80 hover:bg-leedy-navy-light text-white font-medium text-sm text-center border border-white/10 transition-all group"
            >
              <div className="flex items-center justify-center gap-1.5 text-leedy-gold group-hover:underline">
                <span>Junior Club (LMHJCC)</span>
                <ExternalLink className="w-4 h-4" />
              </div>
              <span className="text-[11px] text-slate-400 block mt-0.5">www.lmhjcc.com.au</span>
            </a>

            <div className="text-xs text-slate-400 pt-2 border-t border-white/10">
              <span className="font-semibold text-slate-300">Affiliation:</span> North Suburban Community Cricket Association (NSCCA) & WACA.
            </div>
          </div>
        </div>

        {/* Acknowledgment of Country */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-slate-400 max-w-3xl mx-auto leading-relaxed">
          <p>
            Leederville Cricket Club respectfully acknowledges the Traditional Custodians of the land on which we train and compete, the Whadjuk people of the Noongar Nation. We pay our deepest respects to their Elders past, present, and emerging.
          </p>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 1946 - {currentYear} Leederville Cricket Club Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for Leedy with <Heart className="w-3.5 h-3.5 text-red-500 inline fill-current" /> • Ready for WIX deployment
          </p>
        </div>
      </div>
    </footer>
  );
}

