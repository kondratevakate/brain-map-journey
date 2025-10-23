'use client';

import styles from './menu.module.css';
import Image from 'next/image';

export default function Menu() {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.menu}>
      <div className={`${styles.btnGroup} ${styles.mgleft}`}>
        <button
          className={styles.textBtn}
          onClick={() => scrollToElement('howit')}
        >
          How it works
        </button>
        <button
          className={styles.textBtn}
          onClick={() => scrollToElement('privacy')}
        >
          Privacy
        </button>
      </div>
      <div className={styles.title}>
        <Image width={28} height={28} src={'/logo.svg'} alt={'logo'} />
        <span>HelloMRI</span>
      </div>
      <div className={styles.btnGroup}>
        <button 
          className={styles.textBtn}
          onClick={() => scrollToElement('wait')}
        >
          Join waitlist
        </button>
        <button
          className={styles.outlineBtn}
          onClick={() => scrollToElement('wait')}
        >
          Sample report
        </button>
      </div>
    </nav>
  );
}
