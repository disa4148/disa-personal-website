import Layout from './_ui/layout/layout';
import Title from '@/src/shared/ui/title/Title';
import Description from './_ui/description/Description';
import Telegram from './_ui/telegram/Telegram';

const Contacts: React.FC = () => {
  return (
    <Layout
      title={<Title number={5} title="My contacts" />}
      description={<Description />}
      telegram={<Telegram />}
    />
  );
};
export default Contacts;
