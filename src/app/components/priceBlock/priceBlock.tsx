import Image from 'next/image';
import styles from './priceBlock.module.css';

export default function PriceBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <span className={styles.leftBlockTitle}>First-time user offer</span>
        <div className={styles.leftBlockText}>
          <span className={styles.leftBlockPrice}>$99</span>
          <span>
            Fully refundable within 7 days No questions asked. Change your mind?
            Get 100% back.
          </span>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.rightBlockTitle}>Includes</div>
        <div className={styles.customUl}>
          <div className={styles.customLi}>
            <Image
              width={16}
              height={16}
              src={'/checkbox.svg'}
              alt={'checkbox'}
            />
            <span>Interactive 3D brain visualization</span>
          </div>
          <div className={styles.customLi}>
            <Image
              width={16}
              height={16}
              src={'/checkbox.svg'}
              alt={'checkbox'}
            />
            <span>Brain-age estimation report</span>
          </div>
          <div className={styles.customLi}>
            <Image
              width={16}
              height={16}
              src={'/checkbox.svg'}
              alt={'checkbox'}
            />
            <span>Personalized longevity insights</span>
          </div>
          <div className={styles.customLi}>
            <Image
              width={16}
              height={16}
              src={'/checkbox.svg'}
              alt={'checkbox'}
            />
            <span>Board-certified radiologist review</span>
          </div>
          <div className={styles.customLi}>
            <Image
              width={16}
              height={16}
              src={'/checkbox.svg'}
              alt={'checkbox'}
            />
            <span>Secure HIPAA-compliant storage</span>
          </div>
          <div className={styles.customLi}>
            <Image
              width={16}
              height={16}
              src={'/checkbox.svg'}
              alt={'checkbox'}
            />
            <span>Optional braind NFT minting</span>
          </div>
        </div>
        <button className={styles.btn}>Join the waitlist</button>
      </div>
    </div>
  );
}
