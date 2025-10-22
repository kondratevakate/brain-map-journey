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
          How it work
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
        <button className={styles.textBtn}>Login</button>
        <button
          className={styles.outlineBtn}
          onClick={() => scrollToElement('wait')}
        >
          Get My Brain Map
        </button>
      </div>
    </nav>
  );
}
