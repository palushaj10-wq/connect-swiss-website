// Centralized content for connect.swiss — edit here to update site-wide.

export const company = {
  name: "connect.swiss",
  tagline: "Swiss Telecom Solutions",
  email: "connect@connect.swiss",
  website: "https://connect.swiss",
  phone: "+41 76 463 61 60",
  phoneHref: "tel:+41764636160",
  whatsapp: "https://wa.me/41764636160",
  address: {
    street: "Täfernstrasse 26",
    city: "5405 Dättwil",
    region: "Kanton Aargau, Schweiz",
  },
};

export const heroStats = [
  { value: 100, suffix: "+", label: "Abgeschlossene Projekte" },
  { value: 100, suffix: "%", label: "Schweizweit tätig" },
  { value: 24, suffix: "/7", label: "Erreichbarkeit" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "ftth-fttb-planung",
    title: "FTTH & FTTB Planung",
    short: "Präzise Glasfaserplanung für Gebäude und Areale.",
    description:
      "Wir planen Fiber-to-the-Home- und Fiber-to-the-Building-Erschliessungen nach Schweizer Standards. Von der Grobplanung bis zum detaillierten Fiberdesign – effizient, normgerecht und vollständig dokumentiert.",
    features: ["Grobdesign & Vorstudien", "Detailplanung (Fiberdesign)", "GIS-Erfassung", "Normgerechte Dokumentation"],
    icon: "network",
  },
  {
    slug: "lwl-begehungen",
    title: "LWL-Begehungen",
    short: "Fachgerechte Begehungen und Aufnahmen vor Ort.",
    description:
      "Unsere Spezialisten führen Lichtwellenleiter-Begehungen durch, prüfen die Machbarkeit von Erschliessungen und nehmen den Ist-Zustand bestehender Infrastruktur auf – die Grundlage jeder erfolgreichen Planung.",
    features: ["Machbarkeitsprüfung", "Ist-Zustand-Aufnahme", "Trassenbeurteilung", "Fotodokumentation"],
    icon: "route",
  },
  {
    slug: "technische-dokumentation",
    title: "Technische Dokumentation",
    short: "Saubere, vollständige und nachvollziehbare Unterlagen.",
    description:
      "Wir erstellen technische Dokumentationen, Messprotokolle und Bestandespläne nach Ihren Vorgaben. Jedes Projekt wird sauber dokumentiert und gemäss Kundenrichtlinien ausgewertet.",
    features: ["Messprotokolle (OTDR)", "Bestandespläne", "As-Built-Dokumentation", "Kundengerechte Auswertung"],
    icon: "fileText",
  },
  {
    slug: "unterstuetzung-elektrofirmen",
    title: "Unterstützung für Elektrofirmen",
    short: "Flexible Ressourcen und Fachwissen für Ihr Team.",
    description:
      "Wir unterstützen Elektrofirmen mit qualifizierten Fachkräften und Spezial-Know-how im Glasfaserbereich – punktuell oder über die gesamte Projektdauer. Flexibel skalierbar nach Ihrem Bedarf.",
    features: ["Personalverstärkung", "Fachberatung LWL", "Inhouse-Installationen", "Flexible Einsätze"],
    icon: "users",
  },
  {
    slug: "projektmanagement",
    title: "Projektmanagement",
    short: "Koordination und Steuerung von A bis Z.",
    description:
      "Von der ersten Analyse bis zur Übergabe koordinieren wir alle Beteiligten – Behörden, Kunden und ausführende Firmen. Termingerecht, transparent und mit höchsten Qualitätsstandards.",
    features: ["Terminplanung", "Koordination aller Stellen", "Qualitätssicherung", "Übergabemanagement"],
    icon: "clipboard",
  },
];

export const processSteps = [
  { n: "01", title: "Analyse & Beratung", text: "Wir erfassen Ihre Anforderungen und beraten Sie kompetent zur optimalen Lösung." },
  { n: "02", title: "Begehung", text: "Vor-Ort-Aufnahme des Ist-Zustands und Prüfung der Machbarkeit." },
  { n: "03", title: "Planung", text: "Detaillierte technische Planung und Fiberdesign nach Norm." },
  { n: "04", title: "Koordination", text: "Abstimmung mit Behörden, Kunden und ausführenden Partnern." },
  { n: "05", title: "Ausführung", text: "Fachgerechte Umsetzung mit modernster Mess- und Spleisstechnik." },
  { n: "06", title: "Übergabe", text: "Vollständige Dokumentation und saubere Projektübergabe." },
];

export const whyUs = [
  { title: "FTTH Spezialisten", text: "Fundiertes Fachwissen in allen Bereichen des Glasfaserausbaus.", icon: "award" },
  { title: "Schweizweite Einsätze", text: "Wir sind in der ganzen Schweiz für Sie im Einsatz.", icon: "mapPin" },
  { title: "Hohe Qualitätsstandards", text: "Geprüfte, dokumentierte Arbeit nach höchsten Standards.", icon: "shieldCheck" },
  { title: "Zuverlässige Umsetzung", text: "Termingerecht, transparent und verlässlich – bei jedem Projekt.", icon: "clock" },
  { title: "Flexible Ressourcen", text: "Skalierbar nach Ihrem Bedarf – punktuell oder langfristig.", icon: "layers" },
];

export type Project = {
  title: string;
  category: "FTTH" | "Begehung" | "Planung" | "Dokumentation";
  location: string;
  year: string;
  image: string;
  description: string;
};

export const projectCategories = ["Alle", "FTTH", "Begehung", "Planung", "Dokumentation"] as const;

export const projects: Project[] = [
  {
    title: "FTTH Erschliessung Mehrfamilienhaus",
    category: "FTTH",
    location: "Baden, AG",
    year: "2025",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    description: "Vollständige Glasfasererschliessung eines Mehrfamilienhauses inkl. Inhouse-Verkabelung.",
  },
  {
    title: "LWL-Begehung Wohnüberbauung",
    category: "Begehung",
    location: "Zürich, ZH",
    year: "2025",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    description: "Begehung und Machbarkeitsprüfung für eine Wohnüberbauung mit 48 Einheiten.",
  },
  {
    title: "Fiberdesign Gewerbeareal",
    category: "Planung",
    location: "Aarau, AG",
    year: "2024",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    description: "Detaillierte Glasfaserplanung für ein Gewerbeareal mit mehreren Anschlusspunkten.",
  },
  {
    title: "Technische Dokumentation Quartiernetz",
    category: "Dokumentation",
    location: "Luzern, LU",
    year: "2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    description: "Erstellung der As-Built-Dokumentation und Messprotokolle für ein Quartiernetz.",
  },
  {
    title: "FTTB Anbindung Bürogebäude",
    category: "FTTH",
    location: "Wettingen, AG",
    year: "2024",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80",
    description: "Fiber-to-the-Building-Anbindung eines mehrstöckigen Bürogebäudes.",
  },
  {
    title: "Begehung Industrieareal",
    category: "Begehung",
    location: "Winterthur, ZH",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
    description: "Umfassende Begehung und Trassenbeurteilung eines Industrieareals.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Dienstleistungen" },
  { href: "/about", label: "Über uns" },
  { href: "/projects", label: "Projekte" },
  { href: "/contact", label: "Kontakt" },
];
