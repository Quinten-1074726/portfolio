# Portfolio Quinten van der Vlies

Persoonlijke portfoliowebsite van **Quinten van der Vlies**, laatstejaars CMGT (Creative Media and Game Technologies) aan de Hogeschool Rotterdam, met de minor Digital Humans. Doel van de site: een **afstudeerstage** vinden in **front-end development** en/of **AI**.

De site moet **professioneel en clean** zijn, met een eigen sfeer (zie "Look & feel") en **subtiele, soepele interacties**. Het draait om **styling en vibe**, niet om spectaculaire animaties.

## Afspraken voor Claude Code

- Communiceer met Quinten in het **Nederlands**. De **inhoud van de site is Engels**, tenzij Quinten anders aangeeft.
- Werk in **kleine stappen**: één onderdeel per keer, daarna kort uitleggen wat er veranderd is en hoe Quinten het bekijkt (`npm run dev`).
- Quinten kent React, Tailwind, React Router, Framer Motion, Node/Express, MongoDB, Laravel en React Native. **Astro is nieuw voor hem**: leg Astro-concepten (islands, `client:*`-directives, content collections, `.astro`-componenten, routing, View Transitions) kort uit wanneer ze voor het eerst opduiken.
- **Verzin geen inhoud.** Ontbrekende teksten, data of afbeeldingen: duidelijke placeholders (`TODO:`) en het aan Quinten melden. Case-teksten schrijft Quinten zelf; Claude mag een eerste concept maken uit de README van een repo, gemarkeerd als concept.
- **Eenvoud boven spektakel.** Kies steeds de simpelste oplossing die er goed uitziet: eerst CSS/Tailwind, dan Motion, pas daarna iets zwaarders. Geen WebGL-scènes, 3D of complexe scroll-choreografie tenzij Quinten erom vraagt.
- Houd componenten **klein, leesbaar en herbruikbaar**; Quinten wil de code zelf begrijpen en uitbreiden.
- **Kopieer geen ontwerpen of code** van de referentiesites; gebruik ze als inspiratie.
- Nieuwe beslissingen (fonts, kleuren, lijst vs. carousel, enz.) **vastleggen in dit bestand** onder "Besluiten".
- Schrijf code in **JavaScript** (`.js`, `.jsx`), niet in TypeScript. Quinten heeft tot nu toe alleen met JavaScript gewerkt. Alleen bestanden die Astro als `.ts` verwacht (zoals `content.config.ts`) mogen `.ts` blijven, met zo min mogelijk TypeScript-syntax.

## Tech stack

| Onderdeel | Keuze | Opmerking |
|---|---|---|
| Framework | **Astro** | Statische pagina's; interactie via React-"islands" |
| Interactieve componenten | **React** (`.jsx`) | Navbar (mobiel menu), projectlijst/carousel, preloader, later AI-features |
| Statische componenten | **Astro** (`.astro`) | Layouts, footer, timeline, projectpagina's |
| Styling | **Tailwind CSS v4** | Design tokens in `src/styles/global.css` via `@theme` |
| Animatie | **CSS/Tailwind-transitions** + **Motion** (`motion/react`, de opvolger van Framer Motion) | Motion alleen binnen React-componenten |
| Pagina-overgangen | **Astro View Transitions** (`<ClientRouter />`) | Ingebouwd, zachte fade/slide |
| Content | **Content collections** (Markdown) | Geen database, geen CRUD |
| Hosting | **Vercel** | Auto-deploy bij push naar GitHub; later serverless functions voor AI |

Niet nodig om mee te beginnen: GSAP, Lenis, Three.js. Alleen toevoegen als een concreet effect er echt om vraagt, en eerst met Quinten overleggen.

### Opzetten (stap 1)

Project aanmaken in de huidige (gekloonde) repo-map, bijvoorbeeld:

```bash
npm create astro@latest .     # template: minimal, TypeScript: base, git: al aanwezig, javascript is wat ik nu weet als je mijn github ook checkt.
npx astro add react
npx astro add tailwind
npm install motion
npm run dev
```

Daarna de mappenstructuur (zie onder) aanmaken en de structuur aan Quinten uitleggen. Commit na elke afgeronde stap.

## Look & feel

**Vibe**: sci-fi, filmisch en ingetogen, stille donkere vlakken, koel licht, een vleugje stof/korrel, met strakke, technische details (mono-labels, dunne lijnen, nummering). Hoofdreferentie voor **styling en sfeer** is **rogierdeboeve.com** (niet voor het animatieniveau).

### Kleuren (Tailwind tokens)

Startwaarden; samen met Quinten bijstellen en het resultaat noteren onder "Besluiten".

```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  /* Achtergronden: bijna-zwart en donkergrijs, nooit puur zwart */
  --color-void: #0a0b0d;        /* pagina-achtergrond */
  --color-night: #121418;       /* secties, footer */
  --color-graphite: #1a1d22;    /* kaarten, vlakken (Rogier gebruikt #1a1a1a) */
  --color-steel: #2a2e35;       /* hover-vlakken, scheiding */

  /* Tekst */
  --color-bone: #ecebe7;        /* primaire tekst: gebroken wit */
  --color-ash: #9a9ea6;         /* secundaire tekst */
  --color-smoke: #62666e;       /* labels, meta, uitgeschakeld */

  /* Accent: koel blauw (Blade Runner-licht) — spaarzaam gebruiken */
  --color-signal: #6f9bff;
  --color-signal-dim: #3d5a99;

  /* Optioneel tweede accent: warm stof (Dune) — alleen heel beperkt */
  --color-dust: #c9a27e;

  /* Lijnen en glas */
  --color-line: rgb(255 255 255 / 0.08);
  --color-glass: rgb(255 255 255 / 0.06);

  /* Fonts */
  --font-sans: "Inter Tight", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}
```

Regels:
- Basis is zwart/donkergrijs met gebroken wit. **Blauw** is het enige echte accent: voor focus-states, kleine indicatoren (bijv. een "available"-bolletje), links bij hover en de gloed in de achtergrond.
- Contrast voldoet aan WCAG AA (vooral `ash` en `smoke` op donker controleren).

### Typografie

- Rogier gebruikt **Neue Haas Grotesk** (betaald) voor tekst en **JetBrains Mono** voor labels.
- Voorstel: **Inter Tight** (gratis) als grotesk voor koppen en tekst, **JetBrains Mono** voor meta (jaartallen, labels, sectienummers, tags). Alternatieven om te vergelijken: Geist, General Sans, PP Neue Montreal (gratis voor persoonlijk gebruik). Keuze met Quinten maken.
- Grote koppen met strakke letterafstand (licht negatieve tracking), dunne tot normale gewichten; kleine **mono-labels in hoofdletters** met ruime tracking.
- Veel witruimte; lange regels vermijden (max. ~70 tekens).
- Fonts zelf hosten via **Fontsource** (`@fontsource-variable/inter-tight`, `@fontsource-variable/jetbrains-mono`).

### Bewegende achtergrond (simpel)

Sfeer: een donkere, licht stoffige ruimte met een zachte, koel-blauwe gloed die heel langzaam beweegt. Geen 3D.

Aanpak, in deze volgorde:
1. **Pure CSS** (begin hiermee): een vaste laag achter de pagina met 1–2 grote, vervaagde radiale gradients (blauw/grijs, lage opaciteit) die met een trage `@keyframes`-animatie (30–60 s) verschuiven, plus een **korrel-overlay** (SVG `feTurbulence`-noise als achtergrondafbeelding, opaciteit ~0.04–0.08). Optioneel een vage vignette aan de randen.
2. Optioneel daarna: de gloed licht laten meebewegen met de muis (kleine React-island, `client:idle`).
3. Pas als Quinten meer wil: een lichte shader (bijv. via OGL). Niet zonder overleg.

Eisen: tekst altijd goed leesbaar; bij `prefers-reduced-motion` staat alles stil; geen merkbare impact op performance (alleen `transform`/`opacity` animeren).

### Glass-styling (navbar en knoppen)

Geïnspireerd op Apple's glass/"Liquid Glass"-look:
- Halftransparant vlak (`bg-white/5` à `bg-white/8`) met `backdrop-blur-xl` en iets extra `backdrop-saturate`.
- Dunne lichte rand (`border border-white/10`) en een subtiele **bovenste highlight** (bijv. `inset 0 1px 0 rgb(255 255 255 / 0.12)` als box-shadow), plus een zachte schaduw eronder.
- **Navbar**: zwevend boven de content, gecentreerd, **pill-vorm** (`rounded-full`), ronder dan die van nikolailehbr.ink. Actieve pagina subtiel gemarkeerd (lichter vlak of klein blauw puntje).
- **Knoppen**: zelfde glas, `rounded-full`; hover = iets lichter vlak + zachte gloed; actief = kleine `scale(0.98)`.
- Fallback zonder `backdrop-filter`: minder transparante achtergrond (`bg-graphite/90`).
- Glas alleen voor navbar, knoppen en kleine zwevende elementen, niet voor grote vlakken (blijft rustig en snel).

## Pagina's en layout

- **Home**: hero (naam, rol "Front-end developer", korte intro, "available for internship"-indicator), uitgelichte projecten, links naar Projects/About/Timeline, footer.
- **Projects** (`/projects`): alle projecten als **compacte, typografische index** (rijen). Eventueel later een lijst/grid-schakelaar of carousel; eerst de lijst.
- **Project detail** (`/projects/[slug]`): zie hieronder.
- **Timeline** (`/timeline`): opleiding en werk als stappenplan.
- **About** (`/about`): wie Quinten is, skills, contact, link naar cv (PDF).

Navigatie: Projects, Timeline, About, plus Contact (springt naar de footer of opent mail). Projecten zijn eventueel ook bereikbaar via een **dropdown** in de navbar (zoals Rogiers project-index), maar alleen als dat rustig blijft.

### Projectdetailpagina (layout naar Rogier)

Volgorde van boven naar beneden:
1. Link terug: **"← All projects"** (mono-label).
2. **Titel** groot.
3. **Hero-beeld** (cover), breed, eventueel met afgeronde hoeken en dunne rand.
4. **Korte beschrijving** (1–2 alinea's) naast of onder een **meta-blok** in dunne rijen: `Role`, `Year`, `Type` (school/team/persoonlijk), `Stack`.
5. Knoppen: **"View live"** en/of **"View code"** (glass-knoppen), alleen als `live`/`repo` bestaat.
6. De **case-tekst** (Markdown body) in een smalle, leesbare kolom.
7. **Galerij**: extra afbeeldingen en eventueel video's, groot onder elkaar.
8. **"Next project"**: groot, klikbaar blok naar het volgende project (op basis van `order`).

### Mappenstructuur

```
src/
  components/        # .astro en .jsx componenten
  layouts/           # BaseLayout.astro (head, achtergrond, navbar, footer, view transitions)
  pages/             # index, projects/index, projects/[slug], timeline, about
  content/
    projects/        # één .md per project (+ map met afbeeldingen)
    timeline/        # één .md per stap
  content.config.ts  # schema's voor de collections
  styles/global.css  # Tailwind import, @theme tokens, achtergrond, glass-utilities
public/              # favicon, cv.pdf, og-image
```

## Content

### Projecten

Elk project is een Markdown-bestand in `src/content/projects/`; het schema wordt gevalideerd:

```md
---
title: SonarPop
summary: One-line description for lists and cards.
year: 2026
role: Front-end developer
type: team            # school | team | personal
stack: [React, Tailwind, Framer Motion, Chart.js]
cover: ./sonarpop/cover.jpg
gallery: [./sonarpop/1.jpg, ./sonarpop/2.jpg]
featured: true
order: 1
repo: Quinten-1074726/TLE3-Frontend-SonarPop   # optioneel
live: https://...                                # optioneel
draft: false
---

Case-tekst: context/probleem, wat Quinten bouwde, keuzes, resultaat, wat hij leerde.
```

Een nieuw project toevoegen = nieuw `.md`-bestand + afbeeldingen, pushen; Vercel zet het online. Optioneel later: als `repo` is ingevuld, tijdens de build talen/laatste update ophalen via de GitHub-API (build mag niet falen als dat mislukt).

### Timeline

Eén Markdown-bestand per stap in `src/content/timeline/` met: `title`, `organisation`, `type` (education / work / minor / other), `start`, `end` (of "present"), `location`, korte omschrijving, optioneel `skills`. Bekend: CMGT aan de Hogeschool Rotterdam (laatste jaar) en de minor Digital Humans. Jaartallen, eerdere opleidingen en werk: **vragen aan Quinten**.

### Kandidaat-projecten

Alle repo's zijn openbaar op github.com/Quinten-1074726 en mogen gelezen worden voor details en een eerste concept.

1. **SonarPop** (TLE3, teamproject): React-dashboard voor het visualiseren van sonar-data; Tailwind, Framer Motion, Chart.js; communiceert met een backend-API en een AI-model. Repo: `TLE3-Frontend-SonarPop` (README bevat nog placeholders).
2. **CineMatch** (PRG08 Smart Technologies): AI-agent die helpt een film te kiezen, met document retrieval, tools en de OMDb-API (Azure OpenAI). Repo: `PRG08-Opdrachten` (agent-opdracht).
3. **CineFind**: React Native/Expo-app om bioscopen en theaters in Nederland te vinden: zoeken, filteren, favorieten (AsyncStorage), lijst/grid-schakelaar, kaart en afstand op basis van locatie; NativeWind. Repo: `CineFind`.
4. **ExpenseTracker**: full-stack. React + Vite + Tailwind met beveiligde routes; Express + MongoDB met REST, pagination en JWT-login. Repo's: `ExpenseTracker-Frontend`, `ExpenseTracker-Backend`.
5. **CineMap** (WAF): Laravel-webapp met filters, watchlist, adminomgeving en poster-upload; Tailwind en Alpine.js. Repo: `WAF-Praktijkopdracht-CineMap`.
6. **Detective-game met AI-chatbot** (PRG08): interactieve game met een taalmodel. Repo: `PRG08-Opdrachten`.

**Niet opnemen**: Digital Human (loopt nog; later toevoegen als belangrijk AI-project), PRG07-Opdrachten, FullStackWD-oefeningen, TLE1 Anti-AI Captcha, RAC-Security.

Rode draad voor de About: drie projecten draaien om film en bioscoop (CineFind, CineMap, CineMatch) — past ook bij de filmische look.

## Inspiratie per onderdeel

Links zijn ter referentie; veel sites laden hun inhoud met JavaScript/WebGL, dus via web-fetch zie je weinig. **Deze beschrijvingen zijn leidend.**

- **rogierdeboeve.com**: sfeer, kleuren, typografie (grotesk + mono), bewegende achtergrond als idee, projectindex, **projectdetail-layout**. Niet: het animatieniveau.
- **nikolailehbr.ink**: **glow/lichtval** op elementen in grijs en wit; zwevende **navbar** (bij Quinten ronder en glassy); **skills-sectie** gegroepeerd (Frontend, Backend, Design, Tools); content die bij laden **omhoog infadet**.
- **chihebnouri.live/timeline**: de **timeline als stappenplan** (structuur en inhoud, niet de stijl).
- **mats.zip** — **footer**: bijna-zwart, **twee kolommen** ("Contact" en "Navigation") met een grote, dunne kop; daaronder rijen: Contact = platform links, handle/waarde rechts in grijs; Navigation = paginanaam links, klein **pijltje** rechts.
- **dennissnellenberg.com**: projecten **onder elkaar in een lijst** met hover-afbeelding; bij Quinten **compacter**.
- **chriskalafatis.com**: **rolling text hover** (tekst rolt omhoog weg en komt van onderen terug), **sectienummers** zoals "01 // 04", preloader met oplopend percentage.
- **Apple**: de glass-look voor navbar en knoppen.

**Rode draad**: dunne rijen met links een titel en rechts meta-info (grijs of mono). Consequent gebruiken in projectlijst, timeline, skills, projectmeta en footer.

## Interacties (simpel houden)

Allemaal met CSS/Tailwind of Motion; korte duur (150–600 ms), zachte easing.

- **Fade-up bij laden**: content komt licht omhoog en vervaagt in, staggered (Motion of CSS-animatie).
- **Scroll-reveal**: elementen faden in zodra ze in beeld komen (Motion `whileInView` of `IntersectionObserver`).
- **Rolling text hover** op navigatie-items en knoppen (twee keer dezelfde tekst in een `overflow-hidden` span, `translateY` bij hover). Pure CSS.
- **Hover in de projectlijst**: rij licht op, pijltje schuift iets op; optioneel een kleine preview-afbeelding die verschijnt (alleen op apparaten met hover).
- **Pagina-overgangen**: Astro View Transitions met een zachte fade.
- **Preloader** (later, optioneel): korte percentage-teller (max. ~1 s), alleen bij het eerste bezoek per sessie; overslaan bij `prefers-reduced-motion`.

Bij `prefers-reduced-motion`: geen beweging, alleen directe weergave.

## Uitgangspunten

- Recruiters moeten **projects en contact binnen een paar seconden** vinden.
- **Snel**: weinig JavaScript buiten islands, afbeeldingen via Astro `<Image />`, fonts zelf gehost. Doel: Lighthouse 90+.
- **Toegankelijk**: semantische HTML, toetsenbordnavigatie, zichtbare focus-states (blauw), alt-teksten, voldoende contrast.
- **Responsive**: mobiel eerst testen; navbar werkt op mobiel (compact menu).
- **SEO/delen**: per pagina title en description, Open Graph-afbeelding.

## Bouwvolgorde

1. Astro-project opzetten met React, Tailwind en Motion; structuur uitleggen.
2. Design tokens en fonts in `global.css`; een simpele testpagina met kleuren, typografie en een glass-knop.
3. Achtergrond (CSS-gloed + korrel).
4. `BaseLayout` met glass-navbar, footer (stijl mats.zip) en View Transitions.
5. Content collections en schema's; projecten als concept invullen vanuit de repo's.
6. Projects-overzicht en projectdetailpagina.
7. Timeline en About (met skills).
8. Home met hero en uitgelichte projecten.
9. Interacties: fade-up, scroll-reveal, rolling text, hovers.
10. Optioneel: preloader, muis-reactieve gloed, lijst/grid-schakelaar.
11. Toegankelijkheid, performance en SEO nalopen; deployen naar Vercel.

## Besluiten

_(Hier noteren wat onderweg besloten wordt: gekozen fonts, definitieve kleuren, lijst vs. carousel, enz.)_
