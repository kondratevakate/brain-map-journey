'use client';

import { useEffect, useState } from 'react';
import styles from './mini-progressbar.module.css';

interface IProps {
  progress: number;
  color: string;
  text: string;
}

export default function MiniProgressbar({ progress, color, text }: IProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className={styles.progress}>
      <span className={styles.progressTitle}>{text}</span>
      <div className={styles.progressContainer}>
        <div
          className={styles.progressFill}
          style={{ width: `${animatedProgress}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}
