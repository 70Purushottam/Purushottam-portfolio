# Purushottam Kumar — Developer Portfolio

A production-ready, responsive personal portfolio built with React, Vite, and Tailwind CSS.

## 1. Overview

Single-page portfolio for Purushottam Kumar (B.Tech ECE, NIT Patna) focused on systems
programming, backend engineering, full-stack development, and DSA. Dark-first UI with a
terminal/code-inspired visual identity, a light mode toggle, and sections for About, Skills,
Projects, Achievements, Competitive Programming, Certifications, Education, and Contact.

## 2. Technologies Used

- React 19
- Vite
- Tailwind CSS
- lucide-react (icons)
- Plain JavaScript (JSX), no TypeScript

## 3. Installation

```bash
npm install
```

## 4. Development

```bash
npm run dev
```

Starts a local dev server (default: http://localhost:5173).

## 5. Production Build

```bash
npm run build
```

Outputs the static production build to `dist/`.

```bash
npm run preview
```

Serves the production build locally to sanity-check it before deploying.

## 6. Deployment

The `dist/` folder is a static site and can be deployed as-is to:

- **Vercel** — import the repo, framework preset "Vite", build command `npm run build`, output
  directory `dist`.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — build with `npm run build`, then publish the contents of `dist/` to the
  `gh-pages` branch (e.g. via the `gh-pages` npm package or a GitHub Action).

No environment variables are required.

## 7. Where to Add `resume.pdf`

The navbar, hero, and contact section all link to `/resume.pdf`. Place your resume at:

```
public/resume.pdf
```

A resume is already included at that path — replace it with an updated version any time.

## 8. Where to Update Social Links

All profile/contact links are centralized in one file:

```
src/data/socialLinks.js
```

Update `SOCIAL_LINKS.github`, `.linkedin`, `.leetcode`, `.codechef`, `.codeforces`, and the
`CONTACT` object (email/college email/phone) there — every component reads from this single
source.

## 8a. Connecting the Contact Form (Web3Forms)

The Contact section includes a real message form (name, email, message) that delivers straight
to your inbox — no backend required. It uses [Web3Forms](https://web3forms.com), a free service.

1. Go to https://web3forms.com and enter the email address you want submissions sent to.
2. You'll instantly get an **Access Key** by email — no account/login needed.
3. Open `src/data/socialLinks.js` and replace:
   ```js
   export const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
   ```
   with your real key.
4. Rebuild (`npm run build`) or restart the dev server. The form will now send real emails.

Until a real key is set, the form shows a small notice and stays disabled — visitors can still
reach you via the Email Me / LinkedIn / GitHub buttons above it.

## 9. Where to Add New Projects

Project data lives in:

```
src/data/projects.js
```

Add a new object to the `PROJECTS` array (see existing entries for the shape: `name`,
`shortDescription`, `stack`, `tags`, `highlights`, `githubUrl`, `liveUrl`). If it uses a new tag,
add that tag to `PROJECT_TAGS` so it shows up in the filter bar. No component changes needed.

Certifications and achievements work the same way — edit `src/data/achievements.js`. Certificate
PDFs go in `public/certificates/` and are referenced by relative path (`certUrl`) in that file.

## 10. Project Structure

```
src/
├── components/       Navbar, Hero, About, Skills, Projects, ProjectCard,
│                     Achievements, CompetitiveProgramming, Certifications,
│                     Education, Contact, Footer, Reveal, SectionHeading
├── data/             projects.js, skills.js, achievements.js, socialLinks.js
├── hooks/            useTheme.js (dark/light mode + localStorage)
├── App.jsx
└── main.jsx

public/
├── resume.pdf
└── certificates/
    ├── NPTEL-Joy-of-Computing-Python.pdf
    └── VLSI-SoC-Design-Verilog-HDL-MavenSilicon.pdf
```

## 11. Notes

- Dark mode is the default; the toggle persists the choice in `localStorage`.
- No backend or contact-form service is wired up — the Contact section uses `mailto:` and direct
  profile links only, matching what the brief specified.
- All social/profile/certificate URLs used are real (not placeholders), since they were already
  known when this was built.
"# Portfolio" 
