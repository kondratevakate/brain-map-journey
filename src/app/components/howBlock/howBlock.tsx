import Image from 'next/image';
import styles from './howBlock.module.css';

export default function HowBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>How It Works</span>
      </div>
      <div className={styles.stepBlock}>
        <div className={styles.firstStep}>
          <div className={styles.item}>
            <Image width={132} height={130} src={'/step1.svg'} alt={'step1'} />
            <div className={styles.circle}>1</div>
            <div className={styles.textBlock}>
              <span className={styles.textBlockTitle}>Reserve for $249</span>
              <span className={styles.textBlockSubtitle}>
                Refundable within 7 days — no questions asked.
              </span>
              <span className={styles.textBlockBody}>
                Secure your spot with our risk-free deposit. Change your mind?
                Full refund guaranteed.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.secondStep}>
          <div className={styles.item}>
            <Image width={132} height={125} src={'/step2.svg'} alt={'step2'} />
            <div className={styles.circle}>2</div>
            <div className={styles.textBlock}>
              <span className={styles.textBlockTitle}>Get scanned</span>
              <span className={styles.textBlockSubtitle}>
                20-minute MRI using clinical-grade equipment in off-peak hours.
              </span>
              <span className={styles.textBlockBody}>
                Comfortable, quiet, and conducted at certified imaging centers
                near you.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.thirdStep}>
          <div className={styles.item}>
            <Image width={132} height={132} src={'/step3.svg'} alt={'step3'} />
            <div className={styles.circle}>3</div>
            <div className={styles.textBlock}>
              <span className={styles.textBlockTitle}>
                Receive your 3D brain
              </span>
              <span className={styles.textBlockSubtitle}>
                Delivered within 72 hours with insights and optional NFT.
              </span>
              <span className={styles.textBlockBody}>
                Interactive visualization with personalized brain-age estimation
                and longevity metrics.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
