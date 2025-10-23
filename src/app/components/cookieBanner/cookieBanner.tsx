'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie_consent_ok_v1';

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
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-2"
    >
      <div className="max-w-[900px] w-full sm:w-auto bg-[#cfc9e5]/60 backdrop-blur rounded-2xl sm:rounded-[18px] shadow-md px-4 sm:px-6 py-3 sm:py-3.5 flex items-center gap-3 sm:gap-4">
        <p className="text-sm sm:text-base text-black/80">
          We use cookies to enhance the website&apos;s performance.
        </p>
        <button
          onClick={accept}
          className="ml-auto shrink-0 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1.5 text-sm font-semibold bg-[#b4a6ff] hover:bg-[#a497ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          aria-label="Accept cookies"
        >
          OK
        </button>
      </div>
    </div>
  );
}
