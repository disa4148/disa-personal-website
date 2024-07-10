import Layout from './_ui/layout/Layout';
import Title from '@/src/shared/ui/title/Title';
import Slider from './_ui/slider/Slider';
import { useTranslations } from 'next-intl';

const Qualities: React.FC = () => {
  const t = useTranslations('home.qualities');
  return (
    <Layout
      title={<Title number={3} title={t('title')} />}
      slider={<Slider />}
    />
  );
};
export default Qualities;
