'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './sampleReportModal.module.css';

type SampleReportModalProps = {
  open: boolean;
  slides: Array<{ src: string; alt: string }>;
  onClose: () => void;
};

export default function SampleReportModal({ open, slides, onClose }: SampleReportModalProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex(prev => Math.max(0, prev - 1));
      if (e.key === 'ArrowRight') setIndex(prev => Math.min(slides.length - 1, prev + 1));
    };

    setIndex(0);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, slides.length]);

  if (!open) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <div className={styles.viewport}>
          <Image
            width={800}
            height={600}
            src={slides[index].src}
            alt={slides[index].alt}
            sizes="(max-width: 768px) 90vw, 800px"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
        <div className={styles.controls}>
          <button 
            className={styles.arrow} 
            onClick={() => setIndex(prev => Math.max(0, prev - 1))}
            disabled={index === 0}
          >
            ‹
          </button>
          <span>{index + 1} / {slides.length}</span>
          <button 
            className={styles.arrow} 
            onClick={() => setIndex(prev => Math.min(slides.length - 1, prev + 1))}
            disabled={index === slides.length - 1}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
