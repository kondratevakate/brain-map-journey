import ChartBlock from './components/chartBlock/chartBlock';
import Chat from './components/chat/chat';
import DoctorBlock from './components/doctorBlock/doctorBlock';
import FadeIn from './components/fadeIn/fadeIn';
import FeatureBlock from './components/featureBlock/featureBlock';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HowBlock from './components/howBlock/howBlock';
import MapBlock from './components/mapBlock/mapBlock';
import Menu from './components/menu/menu';
import OfferBlock from './components/offerBlock/offerBlock';
import PriceBlock from './components/priceBlock/priceBlock';
import PrivacyBlock from './components/privacyBlock/privacyBlock';
import WaitBlock from './components/waitBlock/waitBlock';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.chat}>
        <Chat />
      </div>
      <Header />
      <FeatureBlock />
      <FadeIn>
        <DoctorBlock />
      </FadeIn>
      <OfferBlock />
      <section id="howit">
        <FadeIn>
          <HowBlock />
        </FadeIn>
      </section>
      <FadeIn>
        <ChartBlock />
      </FadeIn>
      <FadeIn>
        <section id="wait">
          <WaitBlock />
        </section>
        <MapBlock />
      </FadeIn>
      <FadeIn>
        <PriceBlock />
      </FadeIn>
      <section id="privacy">
        <FadeIn>
          <PrivacyBlock />
        </FadeIn>
      </section>
      <Footer />
    </div>
  );
}
