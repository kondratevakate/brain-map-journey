import styles from './offerBlock.module.css';

export default function OfferBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>What we offer</span>
        <span className={styles.subtitle}>See how your brain performs</span>
      </div>
      <div className={styles.infoBlock}>
        {/* First Row */}
        <div className={styles.infoRow}>
          <div className={styles.leftBlock}>
            <div className={styles.leftBlockMarker}>
              <div className={styles.cube}></div>
              <span>CLINICAL MRI + AI INSIGHTS</span>
            </div>
            <span className={styles.leftBlockTitle}>
              Beyond a standard MRI – a deeper view of your brain
            </span>
            <span className={styles.leftBlockSubtitle}>
              You receive a full medical MRI scan with a certified radiologist’s
              report. On top of that, our AI visualizes your brain in 3D and
              extracts metrics like Neuroplasticity Score, Cognitive Age, and
              Memory Index — giving you the context behind the diagnosis and
              showing how your brain evolves over time.
            </span>
          </div>
          <div className={styles.divider}>
            <div className={styles.line}></div>
            <div className={styles.circleContainer}>
              <div className={styles.outerCircle}>
                <div className={styles.innerCircle}></div>
              </div>
            </div>
          </div>
          {/* Right Block WIP <div></div> */}
        </div>
        {/* Second row */}
        <div className={styles.infoRow}>
          <div className={styles.leftBlock}>
            <div className={styles.leftBlockMarker}>
              <div className={styles.cube}></div>
              <span>EVOLVING NEURO MODELS</span>
            </div>
            <span className={styles.leftBlockTitle}>
              Your insight grows with science
            </span>
            <span className={styles.leftBlockSubtitle}>
              MRI data stays securely with the user while analysis models keep
              improving.As new AI and neuroscience discoveries appear, past
              scans are reinterpreted with the latest understanding.This
              provides updated insight into focus, resilience, and cognitive
              balance, keeping each person in step with advancing brain science.
            </span>
          </div>
          <div className={styles.divider}>
            <div className={styles.line}></div>
            <div className={styles.circleContainer}>
              <div className={styles.outerCircle}>
                <div className={styles.innerCircle}></div>
              </div>
            </div>
          </div>
          {/* Right Block WIP <div></div> */}
        </div>
        {/* Third Row */}
        <div className={styles.infoRow}>
          <div className={styles.leftBlock}>
            <div className={styles.leftBlockMarker}>
              <div className={styles.cube}></div>
              <span>PERSONALIZED PERFORMANCE PATHWAYS</span>
            </div>
            <span className={styles.leftBlockTitle}>
              Recommendations shaped by your brain and your interests
            </span>
            <span className={styles.leftBlockSubtitle}>
              Insights are personalized using your MRI data and the activities
              you care about — whether it’s focus at work, creativity, or
              athletic performance.The system translates your brain metrics into
              clear, science-based actions that help you train attention,
              balance stress, and build mental endurance for the goals that
              matter most.
            </span>
          </div>
          <div className={styles.divider}>
            <div className={styles.line}></div>
            <div className={styles.circleContainer}>
              <div className={styles.outerCircle}>
                <div className={styles.innerCircle}></div>
              </div>
            </div>
          </div>
          {/* Right Block WIP <div></div> */}
        </div>
        {/* Four row */}
        <div className={styles.infoRow}>
          <div className={styles.leftBlock}>
            <div className={styles.leftBlockMarker}>
              <div className={styles.cube}></div>
              <span>INTEGRATED HEALTH CONTEXT</span>
            </div>
            <span className={styles.leftBlockTitle}>
              Connect your brain data with your daily signals
            </span>
            <span className={styles.leftBlockSubtitle}>
              HelloMRI integrates with Apple Watch, WHOOP, and other wearables
              to combine your brain metrics with sleep, recovery, and stress
              data. Together, they form a continuous picture of how your mind
              and body interact — giving you a deeper context for focus,
              resilience, and long-term performance.
            </span>
          </div>
          <div className={styles.divider}>
            <div className={`${styles.line} ${styles.lineLast}`}></div>
            <div className={styles.circleContainer}>
              <div className={styles.outerCircle}>
                <div className={styles.innerCircle}></div>
              </div>
            </div>
          </div>
          {/* Right Block WIP <div></div> */}
        </div>
      </div>
    </div>
  );
}
