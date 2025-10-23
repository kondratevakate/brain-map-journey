import styles from './chartBlock.module.css';

export default function ChartBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <span className={styles.title}>Better brain health</span>
        <span className={styles.subtitle}>
          unlocks focus, energy, and long-term performance
        </span>
        <div className={styles.text}>
          <span>
            Peak health means unlocking your brain’s full potential.Regular MRI
            insights show how lifestyle, mindfulness, and sleep shape your brain
            — and help you improve focus, memory, and resilience today.
          </span>
          <ul className={styles.list}>
            <li>
              The yellow/red line shows the gradual loss of energy and focus
              that comes with stress and age
            </li>
            <li>
              The green dotted line represents a higher, more stable trajectory
              of clarity and cognitive performance
            </li>
            <li>
              The area between these curves is the growth zone: where HelloMRI
              helps you think clearer, perform better, and feel more alive
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <img src="/chart.svg" alt="chart" />
      </div>
    </div>
  );
}
