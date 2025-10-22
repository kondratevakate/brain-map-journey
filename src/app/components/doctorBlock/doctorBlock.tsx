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
            <span className={styles.doctorTitle}>Kate Kondraneva</span>
            <span className={styles.doctorSubtitle}>
              Hertie Institute for AI in Brain Health
            </span>
          </div>
        </div>
        <div className={styles.doctorContainer}>
          <div className={styles.imgContainer}>
            <Image width={71} height={71} src={'/doctor.jpg'} alt={'Doctor'} />
          </div>
          <div className={styles.doctorInfo}>
            <span className={styles.doctorTitle}>Kate Kondraneva</span>
            <span className={styles.doctorSubtitle}>
              Hertie Institute for AI in Brain Health
            </span>
          </div>
        </div>
        <div className={styles.doctorContainer}>
          <div className={styles.imgContainer}>
            <Image width={71} height={71} src={'/doctor.jpg'} alt={'Doctor'} />
          </div>
          <div className={styles.doctorInfo}>
            <span className={styles.doctorTitle}>Kate Kondraneva</span>
            <span className={styles.doctorSubtitle}>
              Hertie Institute for AI in Brain Health
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
