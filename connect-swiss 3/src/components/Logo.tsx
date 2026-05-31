export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 shrink-0 overflow-visible">
        <path
          d="M24 6a18 18 0 100 36 18 18 0 0011.5-4.2l-7-7a8 8 0 110-9.6l7-7A18 18 0 0024 6z"
          fill="#e2001a"
        />
        <path d="M19 13h4v5h5v4h-5v5h-4v-5h-5v-4h5z" fill="#fff" />
        <path d="M30 19a7 7 0 010 10" stroke="#e2001a" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-wave-pulse" />
        <path d="M34 16a12 12 0 010 16" stroke="#e2001a" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-wave-pulse [animation-delay:0.3s]" />
        <path d="M38 13a17 17 0 010 22" stroke="#e2001a" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-wave-pulse [animation-delay:0.6s]" />
      </svg>
      {showText && (
        <span className="font-display text-xl font-extrabold tracking-tight text-ink dark:text-white">
          connect<span className="text-red">.swiss</span>
        </span>
      )}
    </span>
  );
}
