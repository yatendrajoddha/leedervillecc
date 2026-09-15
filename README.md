# Leederville Cricket Club Website (80th Anniversary Edition)

Modern, high-performance React website built for **Leederville Cricket Club** (established 1946, celebrating its 80th Anniversary at Britannia Reserve, Western Australia).

This project replaces the legacy site with modern sports website aesthetics (Midnight Navy & Cricket Gold palette, glassmorphism cards, interactive tables, searchable rosters, and smooth animations) while preserving **100% data parity and all 7 core pages** from the original [leedervillecc.com](https://www.leedervillecc.com) website.

---

## 🏏 Pages & Features

1. **Home (`#/` or `#/home`)**
   - Hero banner with **80th Anniversary (1946–2026)** interactive cheer badge.
   - Britannia Reserve showcase and live status strip (training days, NSCCA competition).
   - Club stats counters: 80 Years of History, 74 Life Members, 300+ Juniors, 10 Partners.
   - Welcome narrative and community roots.
   - Infinite auto-scrolling **Sponsor Marquee** with all 10 verified partners.
   - Quick feature hub cards linking to all club sections.

2. **Committee (`#/committee`)**
   - 2026/27 Committee roster with Executive Officers (President, VP, Secretary, Treasurer, Junior Liaison).
   - One-tap phone & email direct buttons with copy-to-clipboard functionality.
   - General Committee directory.
   - Committee group photo with modal lightbox.

3. **History & Legends (`#/history`)**
   - **Leo Ellefsen Club Champion Award ("The Leo")** showcase with Alan Watling (9-time winner) and John Nykyforak (all-time points leader).
   - Interactive searchable roll of honour for Leo Ellefsen Award winners (1978–2026).
   - Interactive searchable & decade-filtered directory of all **74 Life Members** (1956–2026).
   - Founding story narrative: *"From Little Things, Big Things Grow"* by Cliff Wemm Snr (recorded 2008).
   - Association History timeline table (1946/47 to 2020/21 NSCCA).
   - Historic team and match photo archive with interactive lightbox viewer.

4. **Juniors (`#/juniors`)**
   - Leederville Mount Hawthorn Junior Cricket Club (**LMHJCC "The Kings"**, founded 2007, celebrating 20th Anniversary).
   - Len Pavy Award (WA Junior Club of the Year inaugural winner) recognition.
   - Junior player numbers growth record table across all 20 seasons (2007–2026).
   - Junior Premierships roll of honour archive.
   - Links to `www.lmhjcc.com.au` and junior management contacts.
   - Junior photo gallery with lightbox viewer.

5. **Sponsors (`#/sponsors`)**
   - Comprehensive showcase of all 10 club partners:
     - Baker Refrigeration (AJ Baker & Sons)
     - The Paddington (The Paddo)
     - Recovery Haus
     - Ashley Day Podiatry
     - Revo Cricket
     - Nexus Homes Group
     - Osborne Park Nissan
     - Il Falco
     - Hello Harry
     - deVine Cellars
   - Interactive category filtering (Dining & Hospitality, Health & Fitness, Trade & Commercial, Automotive & Retail).
   - Download link for the official **Club Sponsorship Packages Brochure PDF**.

6. **Statistics (`#/statistics`)**
   - Overview of all record categories in club archives (batting averages, bowling hauls, centuries, hat-tricks, family milestones).
   - Direct download button for the complete **Official Club Statistics PDF**.
   - Feature celebration photo ("All Stars Gav") with lightbox viewer.

7. **Contact Us (`#/contact`)**
   - Ground venue location: **Britannia Reserve**, 41 Britannia Road, Leederville WA 6007.
   - Embedded interactive Google Map and directions link.
   - Direct phone and email directory for executive officers with copy buttons.
   - Interactive enquiry contact form with validation and mailto fallback.

8. **Play HQ Portal**
   - Direct sticky and navigation links to the official PlayHQ portal for fixtures, ladders, and registrations.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
```bash
# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
The optimized static build will be output to the `dist/` directory.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deploying to WIX

This project is built specifically with **relative asset paths** and **hash-based routing** so it can be deployed to Wix seamlessly without iframe routing errors or path mismatch.

See [WIX_DEPLOYMENT_GUIDE.md](file:///d:/Repositories/leedervillecc/WIX_DEPLOYMENT_GUIDE.md) for full instructions:
1. **Host free on Vercel or Netlify** (drag-and-drop the `dist` folder or connect your repo).
2. **Embed in Wix** using the **Embed HTML** or **Custom Element** widget with the snippet in `wix-embed-code.html`.
3. (Optional) Point `leedervillecc.com` DNS directly to the build for ultra-fast CDN delivery.
