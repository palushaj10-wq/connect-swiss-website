"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cs-cookie-consent")) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("cs-cookie-consent", "accepted");
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
      <div className="glass container-x flex flex-col items-center gap-4 rounded-2xl p-5 shadow-lg sm:flex-row sm:justify-between">
        <p className="text-sm" style={{ color: "var(--fg-dim)" }}>
          Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Mehr in unserer{" "}
          <Link href="/datenschutz" className="font-semibold text-red hover:underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button onClick={accept} className="btn-outline !py-2.5 !px-5 text-sm">
            Ablehnen
          </button>
          <button onClick={accept} className="btn-red !py-2.5 !px-5 text-sm">
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
