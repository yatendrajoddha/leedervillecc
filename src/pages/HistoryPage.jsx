import React, { useState, useMemo } from 'react';
import { 
  Trophy, 
  Search, 
  Clock, 
  BookOpen, 
  Medal, 
  Sparkles, 
  Star, 
  Calendar, 
  Image as ImageIcon,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { 
  lifeMembers, 
  leoEllefsenWinners, 
  associationHistory, 
  historyGallery, 
  historicalNarrative 
} from '../data/clubData';
import PhotoModal from '../components/PhotoModal';

export default function HistoryPage() {
  const [lifeMemberSearch, setLifeMemberSearch] = useState('');
  const [selectedDecade, setSelectedDecade] = useState('all');
  const [leoSearch, setLeoSearch] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);

  // Life Members Filter
  const filteredLifeMembers = useMemo(() => {
    return lifeMembers.filter((m) => {
      const matchesSearch = m.name.toLowerCase().includes(lifeMemberSearch.toLowerCase()) || 
                            m.year.toString().includes(lifeMemberSearch);
      if (!matchesSearch) return false;

      if (selectedDecade === 'all') return true;
      const dec = parseInt(selectedDecade, 10);
      return m.year >= dec && m.year < dec + 10;
    });
  }, [lifeMemberSearch, selectedDecade]);

  // Leo Ellefsen Winners Filter
  const filteredLeoWinners = useMemo(() => {
    return leoEllefsenWinners.filter((w) => {
      return w.player.toLowerCase().includes(leoSearch.toLowerCase()) || 
             w.season.toLowerCase().includes(leoSearch.toLowerCase());
    });
  }, [leoSearch]);

  // Top Leo Winners Counts
  const winnerCounts = useMemo(() => {
    const counts = {};
    leoEllefsenWinners.forEach(w => {
      counts[w.player] = (counts[w.player] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, []);

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-leedy-gold/15 text-leedy-gold text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-leedy-gold/30 mb-3">
          <Clock className="w-3.5 h-3.5" />
          <span>80 Years of Heritage • 1946 - 2026</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          OUR HISTORY & <span className="gold-gradient-text">LEGENDS</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
          "The people who fill the spaces between them." Celebrating the dedicated players, life members, and administrators whose passion built Leederville Cricket Club from a one-pound pension note in 1946 to the community champion of today.
        </p>
      </div>

      {/* LEO ELLEFSEN CLUB CHAMPION AWARD HIGHLIGHT */}
      <section className="glass-panel p-6 sm:p-10 rounded-3xl border-leedy-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-leedy-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-leedy-gold uppercase tracking-wider mb-2">
            <Trophy className="w-4 h-4 text-leedy-gold" />
            <span>Highest Individual Honour</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
            LEO ELLEFSEN CLUB CHAMPION AWARD
          </h2>

          <p className="text-sm text-slate-300 mt-4 leading-relaxed">
            Leo Ellefsen has been and always will be our Club's spiritual leader. Leederville born and bred, he was as tough as nails and expected nothing less from any player who represented the Club—irrespective of their level of ability. Awarded to our best player each season, <strong className="text-leedy-gold">"The Leo"</strong> is the highest individual honour a player can aspire to win.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-leedy-navy-dark/80 p-4 rounded-xl border border-leedy-gold/20">
              <div className="flex items-center gap-2 text-leedy-gold font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>The 9-Time Champion</span>
              </div>
              <div className="font-display font-black text-xl text-white mt-1">Alan Watling</div>
              <p className="text-xs text-slate-400 mt-1">
                Dominated like no other—winning the prestigious trophy on no less than 9 occasions ('78 through '01). Enough said!
              </p>
            </div>

            <div className="bg-leedy-navy-dark/80 p-4 rounded-xl border border-leedy-gold/20">
              <div className="flex items-center gap-2 text-leedy-gold font-bold text-sm">
                <Medal className="w-4 h-4" />
                <span>All-Time Record Holder</span>
              </div>
              <div className="font-display font-black text-xl text-white mt-1">John Nykyforak</div>
              <p className="text-xs text-slate-400 mt-1">
                Amassed 8,848 runs, snared 624 wickets and snaffled 415 catches with gloves & bare hands alike. Most Leo points in history!
              </p>
            </div>
          </div>
        </div>

        {/* Leo Ellefsen Roll of Honour Search & Table */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Roll of Honour: Leo Ellefsen Award Winners (1978 - 2026)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Showing {filteredLeoWinners.length} of {leoEllefsenWinners.length} seasons
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search player or season..."
                value={leoSearch}
                onChange={(e) => setLeoSearch(e.target.value)}
                className="w-full bg-leedy-navy-dark border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-leedy-gold"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 max-h-96 overflow-y-auto pr-1">
            {filteredLeoWinners.map((w, idx) => {
              const isWatling = w.player.includes("Watling");
              return (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    isWatling 
                      ? 'bg-leedy-gold/10 border-leedy-gold/40' 
                      : 'bg-leedy-navy-dark/60 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="text-[11px] font-bold text-leedy-gold tracking-wider">{w.season}</div>
                  <div className="font-semibold text-xs text-white mt-0.5 truncate">{w.player}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIFE MEMBERS DIRECTORY */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-leedy-gold uppercase tracking-wider">
              <Medal className="w-4 h-4 text-leedy-gold" />
              <span>Honorary Roll</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              OUR LIFE MEMBERS (1 - 74)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Without these dedicated members, simply, our Club wouldn't exist now. We can't thank you enough.
            </p>
          </div>

          {/* Search & Decade Filters */}
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial sm:w-56">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search life member..."
                value={lifeMemberSearch}
                onChange={(e) => setLifeMemberSearch(e.target.value)}
                className="w-full bg-leedy-navy-card border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-leedy-gold"
              />
            </div>

            <select
              value={selectedDecade}
              onChange={(e) => setSelectedDecade(e.target.value)}
              className="bg-leedy-navy-card border border-white/10 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-leedy-gold"
            >
              <option value="all">All Decades</option>
              <option value="1950">1950s</option>
              <option value="1960">1960s</option>
              <option value="1970">1970s</option>
              <option value="1980">1980s</option>
              <option value="1990">1990s</option>
              <option value="2000">2000s</option>
              <option value="2010">2010s</option>
              <option value="2020">2020s</option>
            </select>
          </div>
        </div>

        {/* Life Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filteredLifeMembers.map((m) => (
            <div
              key={m.number}
              className="glass-panel-subtle p-3.5 rounded-xl border border-white/5 hover:border-leedy-gold/40 transition-all flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-leedy-navy-light text-leedy-gold font-display font-black text-xs flex items-center justify-center shrink-0 border border-leedy-gold/20 group-hover:scale-105 transition-transform">
                  #{m.number}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-white truncate flex items-center gap-1">
                    <span>{m.name}</span>
                    {m.deceased && <span className="text-leedy-gold text-xs" title="In Fond Remembrance">*</span>}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Inducted {m.year}
                  </div>
                </div>
              </div>

              <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded shrink-0">
                {m.year}
              </span>
            </div>
          ))}
        </div>

        <div className="text-xs text-slate-500 italic text-right">
          * Marked in fond memory of Life Members who have passed on.
        </div>
      </section>

      {/* CLIFF WEMM SNR: NARRATIVE & STORY */}
      <section className="glass-panel p-6 sm:p-10 rounded-3xl border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-leedy-gold uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4 text-leedy-gold" />
              <span>Founding Story • Recorded 2008</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              FROM LITTLE THINGS, BIG THINGS GROW
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              The formation & early years of the Leederville Cricket Club by Cliff Wemm Snr
            </p>
          </div>

          <button
            onClick={() => setIsStoryExpanded(!isStoryExpanded)}
            className="inline-flex items-center gap-1.5 bg-leedy-navy-light hover:bg-leedy-gold hover:text-leedy-navy-dark text-slate-200 font-semibold text-xs px-4 py-2 rounded-xl transition-all"
          >
            <span>{isStoryExpanded ? 'Compact View' : 'Read Full Narrative'}</span>
            {isStoryExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p className="italic text-slate-200 bg-leedy-navy-dark/60 p-4 rounded-xl border-l-4 border-leedy-gold">
            "{historicalNarrative.intro}"
          </p>

          <p>{historicalNarrative.paragraphs[0]}</p>
          <p>{historicalNarrative.paragraphs[1]}</p>

          {isStoryExpanded && (
            <div className="space-y-4 animate-in fade-in duration-300 pt-2">
              {historicalNarrative.paragraphs.slice(2).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ASSOCIATION HISTORY TIMELINE */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-leedy-gold" />
          <h2 className="font-display font-bold text-xl text-white uppercase tracking-wider">
            Cricket Association Timeline (1946 - Present)
          </h2>
        </div>

        <div className="glass-panel overflow-hidden rounded-2xl border-white/10 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-leedy-navy-dark/90 text-leedy-gold text-xs uppercase font-display font-bold tracking-wider border-b border-white/10">
                <tr>
                  <th className="px-5 py-3.5">Season / Year</th>
                  <th className="px-5 py-3.5">Club Name</th>
                  <th className="px-5 py-3.5">Competition / Association</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {associationHistory.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-3.5 font-bold text-leedy-gold whitespace-nowrap">{row.year}</td>
                    <td className="px-5 py-3.5 font-semibold text-white">{row.clubName}</td>
                    <td className="px-5 py-3.5 text-slate-300">{row.association}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HISTORICAL PHOTO ARCHIVE */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-leedy-gold" />
            <h2 className="font-display font-bold text-xl text-white uppercase tracking-wider">
              Historical Photo Archive
            </h2>
          </div>
          <span className="text-xs text-slate-400">Click any photo to enlarge</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {historyGallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-leedy-navy-card border border-white/10 hover:border-leedy-gold transition-all shadow-md aspect-video"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                <span className="text-[11px] font-semibold text-white leading-tight">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </div>
  );
}

