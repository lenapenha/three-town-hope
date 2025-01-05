import BandBanner from '@/components/BandBanner';
import Page from '../components/template/Page';
import Media from '@/components/Media';

export default function Home() {
  return (
    <Page>
        <BandBanner />
        <Media/>
    </Page>
  );
}
