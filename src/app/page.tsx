import BandBanner from '@/components/BandBanner';
import Page from '../components/template/Page';
import Media from '@/components/Media';
import About from '@/app/About/page';
import Contact from '@/app/Contact/page'

export default function Home() {
  return (
    <Page>
        <BandBanner />
        <Media/>
        <About/>
        <Contact/>
    </Page>
  );
}
