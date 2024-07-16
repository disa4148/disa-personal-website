import Layout from './_ui/layout/Layout';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import Socials from './_ui/socials/Socials';

import { useTranslations } from 'next-intl';

type Items = {
  title: string;
  link: string;
};

const Footer: React.FC = () => {
  const t = useTranslations('header.nav');
  const keys: string[] = [
    'about',
    'skills',
    'qualities',
    'projects',
    'contacts',
  ];

  const items: Items[] = keys.map((key) => ({
    title: t(`${key}.title`),
    link: `${key}`,
  }));

  return (
    <Layout logo={<Logo />} nav={<Nav items={items} />} socials={<Socials />} />
  );
};

export default Footer;
