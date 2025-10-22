import Image from 'next/image';
import styles from './featureBlock.module.css';

export default function FeatureBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <Image width={78} height={80} src={'/feature1.svg'} alt={'circle'} />
        <div className={styles.info}>
          <span className={styles.title}>Isights you can act on</span>
          <span className={styles.text}>
            See how habits, rest and learning affect your brain. Use this
            knowledge to perform better at work, in sport and in creative life.
          </span>
        </div>
      </div>
      <div className={styles.block}>
        <Image width={78} height={80} src={'/feature2.svg'} alt={'brain'} />
        <div className={styles.info}>
          <span className={styles.title}>AI meets neuroscience</span>
          <span className={styles.text}>
            Our technology analyzes your scans with models trained on thousands
            of medical datasets. It helps detect subtle brain changes connected
            to focus, balance and stress resilience.
          </span>
        </div>
      </div>
      <div className={styles.block}>
        <Image width={78} height={80} src={'/feature3.svg'} alt={'line'} />
        <div className={styles.info}>
          <span className={styles.title}>Clarity that compounds</span>
          <span className={styles.text}>
            Each scan adds to your personal Neuro-Span™, your timeline of mental
            energy, resilience and growth.
          </span>
        </div>
      </div>
    </div>
  );
}
