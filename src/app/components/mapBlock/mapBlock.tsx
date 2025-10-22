import Image from 'next/image';
import styles from './mapBlock.module.css';

export default function MapBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Find an MRI near you</span>
        <span className={styles.subtitle}>
          See live availability and book instantly
        </span>
      </div>
      <Image width={1120} height={600} src={'/map.png'} alt={'map'} />
    </div>
  );
}
