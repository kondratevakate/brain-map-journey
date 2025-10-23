'use client';

import { ChangeEvent, useState } from 'react';
import styles from './waitBlock.module.css';
import SampleReportModal from '../sampleReportModal/sampleReportModal';

export default function WaitBlock() {
  const [email, setEmail] = useState('');
  const [showSample, setShowSample] = useState(false);

  const sampleSlides = [
    { src: '/report-slide-1.png', alt: 'Sample report – overview' },
    { src: '/report-slide-2.png', alt: 'Sample report – details' }
  ];

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value.toLowerCase();
    const cleanedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
    setEmail(cleanedValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.brainBlock}>
        <div className={styles.brainBlockInfo}>
          <span className={styles.brainBlockTitle}>
            Preserve your cognitive potential
          </span>
          <span className={styles.text}>
            Your brain's health is crucial to a fulfilling life.
          </span>
          <span className={styles.text}>
            We use dynamic brain monitoring for the early detection and
            prevention of degradation, including Alzheimer's disease, using
            clinically proven methods.
          </span>
        </div>
        <img src="/brain-group.png" alt="brains" />
      </div>
      <div className={styles.hertieBlock}>
        <img src="/logo-hertie.svg" alt="Logo" />
        <span className={styles.text}>
          We proudly collaborate with a leading research university. This
          partnership ensures you receive a scientifically-backed solution, not
          just a technology, that helps you maintain a clear mind and a full
          life for years to come.
        </span>
      </div>
      <div className={styles.emailBlock}>
        <div className={styles.form}>
          <input
            value={email}
            onChange={handleEmailChange}
            type="text"
            placeholder="yourbrain@hellomri.com"
            className={styles.input}
          />
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.linkBtn}
              onClick={() => setShowSample(true)}
            >
              Sample report
            </button>
            <button className={styles.btn}>Join the waitlist</button>
          </div>
        </div>
      </div>
      <SampleReportModal 
        open={showSample} 
        slides={sampleSlides} 
        onClose={() => setShowSample(false)} 
      />
    </div>
  );
}
