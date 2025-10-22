import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.divider}></div>
      <div className={styles.menu}>
        <div className={styles.titleBlock}>
          <Image
            width={44}
            height={45}
            src={'/purple-brain.svg'}
            alt={'logo'}
          />
          <span>Your brain, beautifully mapped.</span>
        </div>
        <div className={styles.linkBlock}>
          <div className={styles.linkColumn}>
            <span className={styles.linkTitle}>Resources</span>
            <div className={styles.links}>
              <div className={styles.link}>How It Works</div>
              <div className={styles.link}>Sample Report</div>
              <div className={styles.link}>Research</div>
            </div>
          </div>
          <div className={styles.linkColumn}>
            <span className={styles.linkTitle}>Connect</span>
            <div className={styles.links}>
              <div className={styles.link}>About</div>
              <div className={styles.link}>FAQ</div>
              <div className={styles.link}>Contact</div>
              <div className={styles.link}>Twitter</div>
              <div className={styles.link}>Instagram</div>
              <div className={styles.link}>Linkedin </div>
            </div>
          </div>
          <div className={styles.linkColumn}>
            <span className={styles.linkTitle}>Legal</span>
            <div className={styles.links}>
              <div className={styles.link}>Terms of Service</div>
              <div className={styles.link}>Privacy Policy</div>
              <div className={styles.link}>HIPAA Notice</div>
            </div>
          </div>
        </div>
        <span className={styles.copyright}>
          © 2025 HelloMRI Inc. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
