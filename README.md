# Ankit Kumar — Marathon Landing Page

A lightweight personal landing page built for GitHub Pages. Visitors arrive
by scanning a QR code on a marathon runner's vest.

**Live URL:** `https://ankitkr8540.github.io/hire-me`

---

## File structure

```
.
├── index.html          ← All page content and structure
├── styles.css          ← All styles (mobile-first, no build step)
├── assets/
│   └── favicon.svg     ← "AK" lettermark favicon
└── README.md           ← This file
```

No JavaScript, no build tools, no npm. Open `index.html` directly in a
browser to preview locally.

---

## Step 1 — Create the GitHub repository

1. Go to <https://github.com/new>
2. Name it **`ankitkr8540.github.io`** (exactly — this gives you the free
   `https://ankitkr8540.github.io` URL automatically).
   - If you already have a repo with that name, name it anything else, e.g.
     `marathon-page`. The URL will be
     `https://ankitkr8540.github.io/marathon-page/`.
3. Set visibility to **Public**.
4. Leave "Add a README" unchecked (you already have one).
5. Click **Create repository**.

---

## Step 2 — Push these files

```bash
# In the marathon-page/ folder on your machine:
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/ankitkr8540/ankitkr8540.github.io.git
git push -u origin main
```

---

## Step 3 — Enable GitHub Pages

1. In your repo, go to **Settings → Pages** (left sidebar).
2. Under **Source**, choose **Deploy from a branch**.
3. Branch: **main** · Folder: **/ (root)** → click **Save**.
4. Wait ~60 seconds. A banner will appear with your live URL.

> If you named the repo `ankitkr8540.github.io`, the URL is
> `https://ankitkr8540.github.io`.
> Any other repo name → `https://ankitkr8540.github.io/<repo-name>/`.

---

## Step 4 — Fill in the REPLACE_ME placeholders

Open `index.html` and replace every `REPLACE_ME_*` token:

| Token | Replace with |
|---|---|
| `REPLACE_ME_LINKEDIN_URL` | Your full LinkedIn profile URL, e.g. `https://www.linkedin.com/in/ankitkr8540` |
| `REPLACE_ME_PORTFOLIO_URL` | Your portfolio / personal website URL |
| `Kumar_Ankit_Resume.pdf` | URL of your résumé PDF (see Step 5) |
| `REPLACE_ME_EMAIL` | Your email address (used in `mailto:` links) |
| `https://ankitkr8540.github.io/hire-me` | The final live URL (from Step 3) |
| `REPLACE_ME_OG_IMAGE_URL` | URL of a 1200×630 px social preview image (optional but recommended) |

There are **3 occurrences** of `REPLACE_ME_LINKEDIN_URL` (hero, final CTA,
footer), **2 occurrences** of `Kumar_Ankit_Resume.pdf` and `REPLACE_ME_EMAIL`,
and **2 occurrences** of `https://ankitkr8540.github.io/hire-me` / `REPLACE_ME_OG_IMAGE_URL`.

Use your editor's **Find & Replace All** to update each token at once.

---

## Step 5 — Add your résumé PDF

**Option A — Host in this repo (simplest)**

1. Place your PDF in the `assets/` folder, e.g. `assets/ankit-kumar-resume.pdf`.
2. Set `Kumar_Ankit_Resume.pdf` to:
   `https://ankitkr8540.github.io/assets/ankit-kumar-resume.pdf`
3. Commit and push.

**Option B — Host on Google Drive**

1. Upload the PDF to Google Drive.
2. Right-click → **Share** → set to **Anyone with the link → Viewer**.
3. Copy the share URL. Change it from:
   `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
   to:
   `https://drive.google.com/file/d/FILE_ID/preview`
4. Use that as `Kumar_Ankit_Resume.pdf`.

---

## Step 6 — Update the canonical URL

Once your site is live at `https://ankitkr8540.github.io`:

1. Replace both `https://ankitkr8540.github.io/hire-me` occurrences in `index.html`.
2. Commit and push.

---

## Step 7 — (Optional) Add a social preview image

GitHub Pages link previews look much better with an OG image.

1. Create a 1200×630 px image (a screenshot of the page works fine).
2. Save it as `assets/og-image.png` and push.
3. Set `REPLACE_ME_OG_IMAGE_URL` to:
   `https://ankitkr8540.github.io/assets/og-image.png`

---

## Mobile testing checklist

- [ ] Open on an actual phone (not just browser DevTools)
- [ ] QR badge and LinkedIn button are visible without scrolling
- [ ] LinkedIn button tap area feels large and comfortable
- [ ] All four CTA buttons are tappable without zooming
- [ ] Text is readable in bright sunlight (test at maximum brightness)
- [ ] Résumé link opens the PDF correctly on iOS and Android
- [ ] Email button opens the native mail app
- [ ] Page loads in under 3 seconds on a 4G connection
- [ ] Test in portrait **and** landscape orientation

---

## Pre-print QR code checklist

Before printing the QR code for the marathon vest:

- [ ] The QR code points to the correct live URL
- [ ] Scanning with at least two different phone models works
- [ ] The live page loads all sections correctly
- [ ] LinkedIn, résumé, portfolio, and email links all open correctly
- [ ] The page renders correctly in both light and dark mode
- [ ] Canonical URL in `index.html` matches the live URL exactly
- [ ] No `REPLACE_ME_*` tokens remain in the published HTML (view page
      source in browser to confirm)
- [ ] Print the QR code at ≥ 3 cm × 3 cm for reliable scanning at distance
- [ ] Test scanning the printed QR code before attaching to the vest

---

*Built for one very committed marathon runner.*
