import React, { useState } from 'react';
import { 
  Users, 
  ExternalLink, 
  Trophy, 
  Mail, 
  Heart, 
  Award, 
  Calendar, 
  Star, 
  Shield, 
  Sparkles,
  CheckCircle2,
  Image as ImageIcon 
} from 'lucide-react';
import { 
  clubInfo, 
  juniorGrowthData, 
  juniorPremierships, 
  juniorPhotos 
} from '../data/clubData';
import PhotoModal from '../components/PhotoModal';

export default function JuniorsPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-leedy-green/15 text-leedy-green-light text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-leedy-green/30 mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>LMHJCC "The Kings" • Est. 2007 (20th Anniversary)</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          LEEDERVILLE MT HAWTHORN <br />
          <span className="gold-gradient-text">JUNIOR CRICKET CLUB</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
          Families • Fitness • Fun. Over 300 energetic young cricketers enjoying active sports participation, introductory programs, junior leagues, and direct pathways to senior cricket.
        </p>

        {/* Action Link to LMHJCC Website */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={clubInfo.juniorsWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-leedy-gold to-amber-500 hover:from-amber-400 hover:to-leedy-gold text-leedy-navy-dark font-display font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            <span>Visit Junior Kings Website (lmhjcc.com.au)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={`mailto:${clubInfo.juniorsEmail}`}
            className="inline-flex items-center gap-2 bg-leedy-navy-light text-white font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl border border-white/10 hover:border-leedy-gold/40 transition-all"
          >
            <Mail className="w-4 h-4 text-leedy-gold" />
            <span>Email Junior Managers</span>
          </a>
        </div>
      </div>

      {/* CORE HIGHLIGHT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border-leedy-green/20">
          <div className="w-10 h-10 rounded-xl bg-leedy-green/15 text-leedy-green-light flex items-center justify-center mb-4">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-lg text-white">Families • Fitness • Fun</h3>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            A welcoming family-friendly club atmosphere where balmy summer Thursday afternoons see over 200 local mums and dads relaxing on the Britannia verandah watching their kids learn cricket.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-leedy-gold/20">
          <div className="w-10 h-10 rounded-xl bg-leedy-gold/15 text-leedy-gold flex items-center justify-center mb-4">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-lg text-white">WA Junior Club of the Year</h3>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Proud winners of the 2007/08 Len Pavy Award as the Western Australian Junior Club of the Year—the only club in history to win this honour in their inaugural season!
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-amber-500/20">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-lg text-white">Senior & District Pathways</h3>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Over 90 junior cricketers have progressed into senior Leederville CC premiership teams since 2012, alongside district cricket pathways through WACA affiliate Mt Lawley DCC.
          </p>
        </div>
      </div>

      {/* DETAILED NARRATIVE & HOW IT STARTED */}
      <section className="glass-panel p-6 sm:p-10 rounded-3xl border-white/10 space-y-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-leedy-gold" />
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            HOW IT ALL STARTED (2007 - 2026)
          </h2>
        </div>

        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            In the winter of 2007, a few of our senior cricketers with young sons had a chat about introducing them to cricket and where would be the best place. As our beloved senior Club player demographic was ageing rather quickly, we thought it might be a good idea to start a junior club of our own.
          </p>
          <p>
            Primarily, it would be a great source of joy to coach our own children and the children of the area we live in and love. The senior Club paid for 16 volunteers to attend a WACA junior coaching seminar and that formed the original "batch" of coaches for those formative years.
          </p>
          <p>
            We letterbox-dropped 10,000 flyers throughout the surrounding suburbs and had our first registration day in August 2007. We were happily surprised at the response—with 150 participants right from day one!
          </p>
          <p className="bg-leedy-navy-dark/60 p-4 rounded-xl border border-leedy-gold/20 text-xs sm:text-sm text-slate-200">
            <strong>20th Anniversary Gratitude:</strong> Special mention and gratitude go to Brad Ogden, Mal Adamson, Ash and Melanie Day, Mitch and Trish Hardy, Michelle Evans, Nathan Daniell, Cat O'Loughlin, Lauren and Teresa Fisher, Alex Timke, Dave Hutchison, Jen Saliacus, Carl Young, and the many more who built "The Kings" into the club we are today!
          </p>
        </div>
      </section>

      {/* JUNIOR PLAYER NUMBERS GROWTH (2007 - 2026) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-leedy-gold uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-leedy-gold" />
              <span>Two Decades of Community Growth</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              LMHJCC PLAYER NUMBERS (2007 - 2026)
            </h2>
          </div>
          <span className="text-xs text-slate-400">Total junior cricketers peaked at 332+</span>
        </div>

        <div className="glass-panel overflow-hidden rounded-2xl border-white/10 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-leedy-navy-dark/95 text-leedy-gold text-xs uppercase font-display font-bold tracking-wider border-b border-white/10">
                <tr>
                  <th className="px-5 py-3.5">Season</th>
                  <th className="px-5 py-3.5">Team No's</th>
                  <th className="px-5 py-3.5">Junior Players</th>
                  <th className="px-5 py-3.5">In2Cricket</th>
                  <th className="px-5 py-3.5">T20 Blast</th>
                  <th className="px-5 py-3.5 font-black text-white">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {juniorGrowthData.map((row) => (
                  <tr key={row.year} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-3 font-bold text-leedy-gold whitespace-nowrap">{row.year}</td>
                    <td className="px-5 py-3 text-slate-200">{row.teams}</td>
                    <td className="px-5 py-3 text-slate-200">{row.juniors}</td>
                    <td className="px-5 py-3 text-slate-200">{row.in2cricket}</td>
                    <td className="px-5 py-3 text-slate-200">{row.t20blast}</td>
                    <td className="px-5 py-3 font-bold text-white bg-white/5">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* JUNIOR PREMIERSHIPS ARCHIVE */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-leedy-gold" />
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
            JUNIOR PREMIERSHIPS ROLL OF HONOUR
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {juniorPremierships.map((p, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border-leedy-gold/20 hover:border-leedy-gold/50 transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-leedy-navy-dark bg-leedy-gold px-2.5 py-0.5 rounded shadow">
                  {p.year}
                </span>
                <span className="text-xs font-bold text-slate-300">
                  {p.competition}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed pt-1">
                {p.matchScore}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* JUNIOR PHOTO GALLERY */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-leedy-gold" />
            <h2 className="font-display font-bold text-xl text-white uppercase tracking-wider">
              Junior Kings Memories
            </h2>
          </div>
          <span className="text-xs text-slate-400">Click to enlarge</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {juniorPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-leedy-navy-card border border-white/10 hover:border-leedy-gold transition-all shadow-md aspect-video"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                <span className="text-[11px] font-semibold text-white leading-tight">
                  {photo.title}
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

