import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  ExternalLink, 
  MessageSquare,
  Shield,
  Sparkles 
} from 'lucide-react';
import { clubInfo, executiveCommittee } from '../data/clubData';
import PhotoModal from '../components/PhotoModal';

export default function ContactPage() {
  const [copiedText, setCopiedText] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    // Open user's default email client pre-filled as fallback
    const mailtoUrl = `mailto:president@leedervillecc.com?subject=${encodeURIComponent(formData.subject + " - " + formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const groundPhotos = [
    {
      url: "https://static.wixstatic.com/media/f41927_7a6e55df86ac4c468923d779f4e20083~mv2.jpg",
      title: "Britannia Reserve Pavilion & Grounds"
    },
    {
      url: "https://static.wixstatic.com/media/f41927_1fcdd460138444c7b6b8fde7b5535abd~mv2.jpg",
      title: "Matchday Setup at Britannia"
    }
  ];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-leedy-gold/15 text-leedy-gold text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-leedy-gold/30 mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>Here We Are • Britannia Reserve</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          GET IN TOUCH WITH <span className="gold-gradient-text">LEEDY</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
          Whether you want to sign up for senior cricket, register your child for junior cricket, sponsor the club, or just drop by for a Saturday game—we'd love to hear from you.
        </p>
      </div>

      {/* TWO COLUMN: EXECUTIVE CONTACTS & CONTACT FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Ground & Executive Directory */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Ground Location Card */}
          <div className="glass-panel p-6 rounded-3xl border-leedy-gold/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-leedy-gold uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Club Headquarters & Grounds</span>
              </span>
              <a
                href={clubInfo.ground.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-leedy-gold hover:underline font-semibold flex items-center gap-1"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <h3 className="font-display font-black text-2xl text-white">
              BRITANNIA RESERVE
            </h3>
            <p className="text-sm text-slate-300">
              {clubInfo.ground.address}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-leedy-green" />
                <span>Senior Training: Tuesdays & Thursdays from 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-leedy-gold" />
                <span>Junior Programs & Thursday Twilight Family Evenings</span>
              </div>
            </div>

            {/* Embedded Interactive Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-64 mt-3 bg-leedy-navy-dark">
              <iframe
                title="Britannia Reserve Location"
                src={clubInfo.ground.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Key Executive Contact Cards */}
          <div className="glass-panel p-6 rounded-3xl border-white/10 space-y-4">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
              Executive Officer Contacts
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {executiveCommittee.slice(0, 4).map((officer) => (
                <div
                  key={officer.role}
                  className="bg-leedy-navy-dark/70 p-4 rounded-xl border border-white/5 space-y-2"
                >
                  <div className="text-[10px] font-black uppercase tracking-wider text-leedy-gold">
                    {officer.role}
                  </div>
                  <div className="font-bold text-sm text-white">
                    {officer.name}
                  </div>

                  <div className="text-xs space-y-1.5 pt-1">
                    {officer.phone && (
                      <div className="flex items-center justify-between text-slate-300">
                        <a href={`tel:${officer.phone.replace(/\s+/g, '')}`} className="hover:text-leedy-gold flex items-center gap-1.5">
                          <Phone className="w-3 h-3 text-leedy-gold" />
                          <span>{officer.phone}</span>
                        </a>
                        <button
                          onClick={() => handleCopy(officer.phone)}
                          className="text-slate-400 hover:text-white p-0.5"
                          title="Copy phone"
                        >
                          {copiedText === officer.phone ? <Check className="w-3 h-3 text-leedy-green" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    )}

                    {officer.email && (
                      <div className="flex items-center justify-between text-slate-300">
                        <a href={`mailto:${officer.email}`} className="hover:text-leedy-gold flex items-center gap-1.5 truncate max-w-[170px]">
                          <Mail className="w-3 h-3 text-leedy-gold shrink-0" />
                          <span className="truncate">{officer.email}</span>
                        </a>
                        <button
                          onClick={() => handleCopy(officer.email)}
                          className="text-slate-400 hover:text-white p-0.5"
                          title="Copy email"
                        >
                          {copiedText === officer.email ? <Check className="w-3 h-3 text-leedy-green" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Interactive Message Form */}
        <div className="lg:col-span-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 space-y-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-leedy-gold" />
              <h2 className="font-display font-black text-2xl text-white tracking-tight">
                SEND US A MESSAGE
              </h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fill in your details below and your enquiry will be routed directly to the Leederville CC committee.
            </p>

            {isSubmitted ? (
              <div className="bg-leedy-green/10 border border-leedy-green/30 p-6 rounded-2xl text-center space-y-3 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-leedy-green/20 text-leedy-green-light flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-xl text-white">Message Prepared!</h3>
                <p className="text-xs text-slate-300">
                  Your email client has been opened with your enquiry pre-populated for <strong>president@leedervillecc.com</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-leedy-gold hover:underline font-bold mt-2 inline-block"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Brad Watling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-leedy-navy-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-leedy-gold text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-leedy-navy-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-leedy-gold text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-leedy-navy-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-leedy-gold text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                    Enquiry Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-leedy-navy-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-leedy-gold text-sm"
                  >
                    <option value="Senior Player Registration">Senior Player Registration (NSCCA)</option>
                    <option value="Junior Cricket Enquiry">Junior Cricket Enquiry (LMHJCC)</option>
                    <option value="Sponsorship & Partnership">Sponsorship & Partnership Opportunity</option>
                    <option value="Social & Events">Social Functions & Clubroom Booking</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you join, sponsor, or connect with Leedy?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-leedy-navy-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-leedy-gold text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-leedy-gold to-amber-500 hover:from-amber-400 hover:to-leedy-gold text-leedy-navy-dark font-display font-extrabold uppercase tracking-wider py-3.5 rounded-xl shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry to Committee</span>
                </button>
              </form>
            )}
          </div>

          {/* Ground Photos */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {groundPhotos.map((photo, i) => (
              <div
                key={i}
                onClick={() => setSelectedPhoto(photo)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-leedy-navy-card border border-white/10 hover:border-leedy-gold transition-all shadow aspect-video"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </div>
  );
}

