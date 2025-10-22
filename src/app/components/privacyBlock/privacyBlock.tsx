import Image from 'next/image';
import styles from './privacyBlock.module.css';

export default function PrivacyBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.firstCircle}>
        <div className={styles.topLeft}>
          <div className={styles.infoBlock}>
            <span className={styles.infoBlockTitle}>
              HIPAA-Aligned Encryption
            </span>
            <span className={styles.infoBlockSubtitle}>
              Your data is encrypted end-to-end using medical-grade security
              standards.
            </span>
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.infoBlock}>
            <span className={styles.infoBlockTitle}>GDPR Compliance</span>
            <span className={styles.infoBlockSubtitle}>
              Our platform adheres to GDPR regulations to protect user privacy.
            </span>
          </div>
        </div>
        <div className={styles.bottomLeft}>
          <div className={styles.infoBlock}>
            <span className={styles.infoBlockTitle}>
              Real-Time Data Analytics
            </span>
            <span className={styles.infoBlockSubtitle}>
              Leverage insights from data as it updates in real time for
              informed decision-making.
            </span>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.infoBlock}>
            <span className={styles.infoBlockTitle}>24/7 Customer Support</span>
            <span className={styles.infoBlockSubtitle}>
              Get assistance anytime with our dedicated support team available
              around the clock.
            </span>
          </div>
        </div>
        <div className={styles.shield}>
          <img src="/shield.png" alt="shield" />
        </div>
        <div className={styles.ring}>
          <img src="/ring.png" alt="ring" />
        </div>
        <Image
          width={720}
          height={720}
          src={'/elipse.svg'}
          alt={'elipse'}
          className={styles.background}
        />
        <div className={styles.secondCircle}>
          <div className={styles.thirdCircle}>
            <span className={styles.circleTitle}>Data Privacy & Trust</span>
            <span className={styles.circleSubtitle}>
              Your brain data is yours — always
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
