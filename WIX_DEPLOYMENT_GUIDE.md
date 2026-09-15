# Wix Deployment & Integration Guide for Leederville Cricket Club

This website is built with modern React 18, Vite, and Tailwind CSS. It is pre-configured with **relative asset paths** (`base: './'`) and **hash-based routing** (`/#/history`, `/#/juniors`, etc.), ensuring it can be deployed seamlessly to Wix without any URL routing or cross-origin breakdown.

Here are the **three easiest and most effective methods** to deploy this website on Wix:

---

## Method 1: Host Free on Vercel / Netlify and Embed into Wix (Recommended for 1-Click Launch)

This is the fastest and most popular way to run custom React apps inside Wix.

### Step 1: Deploy the React App to Vercel or Netlify (Free, 2 Minutes)
1. Push this repository to GitHub, or upload the `dist` folder created by `npm run build`.
2. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com) (both are free).
3. Connect your repository (or drag-and-drop the `dist` folder onto Netlify).
4. Vercel/Netlify will immediately give you a live production URL (for example: `https://leedervillecc.vercel.app`).

### Step 2: Embed into Your Wix Website
1. Log in to your **Wix Dashboard** and open the **Wix Editor** or **Wix Studio**.
2. Click **+ Add Elements** on the left panel.
3. Select **Embed Code** → **Embed HTML** (or **Embed a site**).
4. Choose **Website Address** and paste your deployed URL:
   ```
   https://leedervillecc.vercel.app
   ```
   *(Or choose "Code" and use the responsive auto-fit code provided in `wix-embed-code.html`)*.
5. In Wix, set the element width to **100%** (Full Width) and set the container height to stretch to the page or 100vh.
6. Click **Publish** in Wix. Done!

---

## Method 2: Direct HTML Embed with Custom Code in Wix

If you prefer to embed the built JavaScript and CSS bundles directly into Wix without an external iframe:

1. Run `npm run build` in your project terminal:
   ```bash
   npm run build
   ```
2. Look in the generated `dist/` directory. You will find:
   - `index.html`
   - `assets/index-[hash].js`
   - `assets/index-[hash].css`
3. Upload the JS and CSS files to your Wix Media Manager or any static CDN.
4. In Wix Editor, add an **HTML Element** and reference the script and stylesheet, or paste the content into a Wix **Custom Element**.

---

## Method 3: Wix Studio Custom Element / Developer Mode

If you are using **Wix Studio**:
1. Open your site in Wix Studio.
2. Enable **Dev Mode** (Velo).
3. Click **Add Elements** → **Custom Elements**.
4. Set the script source to your deployed bundle URL.
5. Define the tag name (e.g., `<leederville-cc-app></leederville-cc-app>`).

---

## Method 4: Point Your Domain Directly to the React App (Highest Performance)

If you own `leedervillecc.com` and want lightning-fast loading speeds (under 0.5s):
1. Deploy to Vercel or Netlify.
2. In your domain registrar (or Wix domain management), point your domain DNS (CNAME or A record) directly to Vercel/Netlify.
3. You will get automatic free SSL, global CDN caching, and 100/100 Lighthouse performance scores.

---

## Local Development & Testing Commands

- **Start local development server:**
  ```bash
  npm run dev
  ```
- **Build production bundle:**
  ```bash
  npm run build
  ```
- **Preview production build locally:**
  ```bash
  npm run preview
  ```

---

## Features Built Specifically for Wix Compatibility

- ✅ **Hash Routing (`/#/committee`, `/#/history`, etc.)**: Works flawlessly inside Wix iframes where standard HTML5 history (`pushState`) can sometimes be blocked by browser iframe sandboxes.
- ✅ **Relative Asset Paths (`./assets/...`)**: Allows the build to run inside any subdirectory or embedded frame.
- ✅ **Responsive Breakpoints**: Seamlessly scales from 320px mobile screens up to 4K ultra-wide monitors.
- ✅ **Zero Server Requirements**: 100% static client-side bundle.

