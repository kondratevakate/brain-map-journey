import Image from 'next/image';
import styles from './doctorBlock.module.css';

export default function DoctorBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>
          Built by world-class leaders in longevity science and medicine
        </span>
        <span className={styles.subtitle}>
          Powered by leading physicians and researchers shaping the future of
          longevity.
        </span>
      </div>
      <div className={styles.doctorBlock}>
        <div className={styles.doctorContainer}>
          <div className={styles.imgContainer}>
            <Image width={71} height={71} src={'/doctor.jpg'} alt={'Doctor'} />
          </div>
          <div className={styles.doctorInfo}>
            <span className={styles.doctorTitle}>Dr. Kate Kondrateva</span>
            <span className={styles.doctorSubtitle}>
              Head of AI in Healthcare Atelic.ai, University of Maastricht
            </span>
          </div>
        </div>
        <div className={styles.doctorContainer}>
          <div className={styles.imgContainer}>
            <Image width={71} height={71} src={'/doctor2.png'} alt={'Doctor'} />
          </div>
          <div className={styles.doctorInfo}>
            <span className={styles.doctorTitle}>Dr. Florian Kofler</span>
            <span className={styles.doctorSubtitle}>
              Research group leader University of Tubingen, Hertie Institute for
              AI in Brain Health
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
