import Image from 'next/image';
import styles from './page.module.css';
import Header from './components/header/header';
import FeatureBlock from './components/featureBlock/featureBlock';
import FadeIn from './components/fadeIn/fadeIn';
import DoctorBlock from './components/doctorBlock/doctorBlock';
import OfferBlock from './components/offerBlock/offerBlock';
import HowBlock from './components/howBlock/howBlock';
import ChartBlock from './components/chartBlock/chartBlock';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <FeatureBlock />
      <FadeIn>
        <DoctorBlock />
      </FadeIn>
      <OfferBlock />
      <HowBlock />
      <ChartBlock />
    </div>
  );
}
