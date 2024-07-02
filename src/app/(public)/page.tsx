import { useTranslations } from 'next-intl';

const Home: React.FC = () => {
  const t = useTranslations();
  return <p>{t('header.nav.home.title')}page</p>;
};
export default Home;
