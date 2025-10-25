'use client';

import { useEffect, useState } from 'react';
import styles from './cookieBanner.module.css';

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
    <div role="dialog" aria-live="polite" className={styles.wrapper}>
      <div className={styles.banner}>
        <p className={styles.message}>
          We use cookies to enhance the website&apos;s performance.
        </p>
        <button
          onClick={accept}
          className={styles.button}
          aria-label="Accept cookies"
        >
          OK
        </button>
      </div>
    </div>
  );
}