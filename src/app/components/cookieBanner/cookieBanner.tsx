'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie_consent_ok_v2';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const ok = localStorage.getItem(STORAGE_KEY) === '1';
      if (!ok) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed left-4 bottom-4 sm:left-10 sm:bottom-10 z-50 max-w-[320px] sm:max-w-[360px]"
    >
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-black/10 bg-[#cfc9e5]/90 px-4 py-3 shadow-lg backdrop-blur-md sm:flex-nowrap">
        <p className="text-sm text-black/80">
          We use cookies to enhance the website&apos;s performance.
        </p>
        <button
          onClick={accept}
          className="ml-auto shrink-0 rounded-xl border border-black/20 bg-white/80 px-4 py-1.5 text-sm font-semibold text-black hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          aria-label="Accept cookies"
        >
          OK
        </button>
      </div>
    </div>
  );
}
