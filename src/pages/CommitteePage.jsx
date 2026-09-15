import React, { useState } from 'react';
import { Users, Phone, Mail, Check, Copy, Shield, Sparkles, ExternalLink } from 'lucide-react';
import { executiveCommittee, generalCommittee, committeePhoto } from '../data/clubData';
import PhotoModal from '../components/PhotoModal';

export default function CommitteePage() {
  const [copiedText, setCopiedText] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-leedy-gold/15 text-leedy-gold text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-leedy-gold/30 mb-3">
          <Users className="w-3.5 h-3.5" />
          <span>Club Administration</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          OUR COMMITTEE <span className="gold-gradient-text">2026/27</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
          The volunteers and leaders who drive Leederville Cricket Club forward—organising matches, managing grounds, supporting our juniors, and sustaining our 80-year culture.
        </p>
      </div>

      {/* Executive Officers Grid */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="w-5 h-5 text-leedy-gold" />
          <h2 className="font-display font-bold text-xl text-white uppercase tracking-wider">
            Executive Committee
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {executiveCommittee.map((officer) => (
            <div
              key={officer.role}
              className="glass-panel p-6 rounded-2xl border-white/10 hover:border-leedy-gold/50 card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider bg-leedy-gold/15 text-leedy-gold px-2.5 py-1 rounded border border-leedy-gold/30">
                    {officer.role}
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase">
                    2026/27 Season
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-white tracking-tight">
                  {officer.name}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-2.5 text-xs">
                {officer.phone && (
                  <div className="flex items-center justify-between bg-leedy-navy-dark/60 p-2.5 rounded-lg border border-white/5">
                    <a
                      href={`tel:${officer.phone.replace(/\s+/g, '')}`}
                      className="text-slate-300 hover:text-leedy-gold font-medium flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-leedy-gold" />
                      <span>{officer.phone}</span>
                    </a>
                    <button
                      onClick={() => handleCopy(officer.phone)}
                      className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                      title="Copy phone"
                    >
                      {copiedText === officer.phone ? (
                        <Check className="w-3.5 h-3.5 text-leedy-green-light" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}

                {officer.email && (
                  <div className="flex items-center justify-between bg-leedy-navy-dark/60 p-2.5 rounded-lg border border-white/5">
                    <a
                      href={`mailto:${officer.email}`}
                      className="text-slate-300 hover:text-leedy-gold font-medium flex items-center gap-2 truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-leedy-gold shrink-0" />
                      <span className="truncate">{officer.email}</span>
                    </a>
                    <button
                      onClick={() => handleCopy(officer.email)}
                      className="text-slate-400 hover:text-white p-1 rounded transition-colors shrink-0"
                      title="Copy email"
                    >
                      {copiedText === officer.email ? (
                        <Check className="w-3.5 h-3.5 text-leedy-green-light" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Committee Members */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-leedy-gold" />
          <h2 className="font-display font-bold text-xl text-white uppercase tracking-wider">
            General Committee Members
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {generalCommittee.map((member, idx) => (
            <div
              key={idx}
              className="bg-leedy-navy-card/80 p-4 rounded-xl border border-white/5 hover:border-leedy-gold/30 transition-all flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-leedy-navy-light text-leedy-gold font-display font-bold text-xs flex items-center justify-center shrink-0 border border-leedy-gold/20">
                {member.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm text-white truncate">{member}</div>
                <div className="text-[11px] text-slate-400">Committee Member</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Committee Group Photo */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border-leedy-gold/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md">
            <span className="text-xs font-bold text-leedy-gold uppercase tracking-wider">
              Club Leadership & Community
            </span>
            <h3 className="font-display font-black text-2xl text-white mt-1">
              DEDICATED TO OUR CLUB
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Serving the Leederville community and ensuring our players, juniors, and supporters have first-class facilities, competitive squads, and an inclusive culture.
            </p>
          </div>

          <div
            onClick={() => setSelectedPhoto({ url: committeePhoto, title: "2026/27 Leederville CC Committee" })}
            className="cursor-pointer relative rounded-2xl overflow-hidden border border-white/10 group shadow-xl max-w-lg w-full"
          >
            <img
              src={committeePhoto}
              alt="Leederville CC Committee 2026/27"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/20">
                Click to view full photo
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Lightbox */}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </div>
  );
}

