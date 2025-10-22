import Image from 'next/image';
import styles from './header.module.css';
import MiniProgressbar from '../mini-progressbar/mini-progressbar';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img className={styles.imgContainer} src="/girl.png" alt="girl" />
        <div className={styles.main}>
          <div className={styles.leftBlock}>
            <span className={styles.leftTitle}>
              Longevity starts in your brain.
            </span>
            <span className={styles.leftText}>
              Measure, understand, and elevate your mental performance with
              Neuro-Span™
            </span>
            <button className={styles.leftButton}>Get My Brain Map →</button>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.rightItem}>
              <div className={styles.rightItemGroup}>
                <span className={styles.rightItemTitle}>Cognitive Age</span>
                <div className={styles.cognitiveGroup}>
                  <span className={styles.cognitiveNumber}>-3</span>
                  <span className={styles.cognitiveYear}>YEARS</span>
                </div>
              </div>
            </div>
            <div className={styles.rightItem}>
              <div className={styles.rightItemGroup}>
                <span className={styles.rightItemTitle}>
                  Neuroplasticity Score
                </span>
                <MiniProgressbar
                  progress={84}
                  color={'#68DE95'}
                  text={'8.4/10'}
                />
              </div>
            </div>
            <div className={styles.rightItem}>
              <div className={styles.rightItemGroup}>
                <span className={styles.rightItemTitle}>Memory Index</span>
                <MiniProgressbar
                  progress={87}
                  color={'#68DEDB'}
                  text={'87/100'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
