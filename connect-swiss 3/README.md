# connect.swiss — Swiss Telecom Solutions

Premium Next.js 15 + TypeScript + Tailwind CSS + Framer Motion website.

## Features
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS, Swiss corporate design (rot/weiss/schwarz)
- Framer Motion animations (scroll reveals, counters, page transitions)
- Dark & Light Mode (next-themes)
- Fully responsive + mobile menu
- SEO metadata (Open Graph, Twitter)
- Cookie banner, Impressum & Datenschutz
- Pages: Home, Services, About, Projects (with filtering), Contact

---

## 🚀 Lokal starten (auf dem Computer)

Voraussetzung: **Node.js 18.18+** installiert (https://nodejs.org).

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Entwicklungsserver starten
npm run dev
```

Dann im Browser öffnen: **http://localhost:3000**

---

## 🌐 Online veröffentlichen (Vercel — kostenlos, empfohlen)

1. Konto erstellen auf **https://vercel.com** (mit GitHub anmelden)
2. Dieses Projekt auf GitHub hochladen ODER den Projektordner per Vercel CLI deployen:
   ```bash
   npm i -g vercel
   vercel
   ```
3. Vercel erkennt Next.js automatisch → "Deploy" klicken
4. Fertig — Sie erhalten eine Live-URL (z.B. connect-swiss.vercel.app)
5. Eigene Domain (connect.swiss) in den Vercel-Projekteinstellungen verbinden

### Alternativ: Production-Build lokal testen
```bash
npm run build
npm start
```

---

## ✏️ Inhalte bearbeiten

Fast alle Texte, Dienstleistungen, Projekte und Kontaktdaten sind zentral in **einer Datei**:

```
src/lib/data.ts
```

Dort können Sie ändern: Firmenname, E-Mail, Telefon, Adresse, Dienstleistungen,
Prozess-Schritte, "Warum uns"-Punkte und die Projektliste.

## 📁 Projektstruktur
```
src/
  app/              # Seiten (App Router)
    page.tsx        # Home
    services/       # Dienstleistungen
    about/          # Über uns
    projects/       # Projekte (mit Filter)
    contact/        # Kontakt
    impressum/      # Impressum
    datenschutz/    # Datenschutz
    layout.tsx      # Layout + SEO + Navbar/Footer
    globals.css     # Styles + Theme-Variablen
  components/        # Wiederverwendbare Komponenten
  lib/data.ts        # ⭐ ZENTRALE INHALTE
```

## 📌 Hinweise
- **Kontaktformular**: aktuell als Demo (zeigt Bestätigung). Für echten Versand
  einen Dienst wie Formspree/Resend oder eine `/app/api/contact/route.ts` anbinden.
- **Projektbilder**: aktuell Platzhalter von Unsplash. In `src/lib/data.ts` durch
  eigene Bilder ersetzen (URL oder Dateien in `/public` legen und `/bild.jpg` referenzieren).
- **Logo**: als SVG-Komponente in `src/components/Logo.tsx` (kein Bild nötig).
