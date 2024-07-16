import Layout from './_ui/layout/layout';
import Title from '@/src/shared/ui/title/Title';
import Description from './_ui/description/Description';
import Telegram from './_ui/telegram/Telegram';
import { useTranslations } from 'next-intl';

const Contacts: React.FC = () => {
  const t = useTranslations('home.contacts');
  return (
    <Layout
      title={<Title number={5} title={t('title')} />}
      description={<Description />}
      telegram={<Telegram />}
    />
  );
};
export default Contacts;
