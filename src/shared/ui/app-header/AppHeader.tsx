import Layout from './_ui/layout/Layout';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';

import { useTranslations } from 'next-intl';

import dynamic from 'next/dynamic';

import { LoadingSpinner } from '../loading-spinner';
import SheetFC from './_ui/sheet/Sheet';

const LocaleSwitcher = dynamic(
  () => import('../localeSwitcher/LocaleSwitcher'),
  {
    ssr: false,
    loading: () => <LoadingSpinner size={28} />,
  },
);

const ThemeSwitcher = dynamic(() => import('./_ui/ThemeSwitcher'), {
  ssr: false,
  loading: () => <LoadingSpinner size={28} />,
});

type Items = {
  title: string;
  link: string;
};

const AppHeader: React.FC = () => {
  const t = useTranslations('header.nav');
  const keys: string[] = [
    'home',
    'skills',
    'projects',
    'qualities',
    'contacts',
  ];

  const items: Items[] = keys.map((key) => ({
    title: t(`${key}.title`),
    link: t(`${key}.link`),
  }));

  return (
    <Layout
      logo={<Logo />}
      nav={<Nav items={items} />}
      languageSwitcher={<LocaleSwitcher />}
      themeSwitcher={<ThemeSwitcher />}
      sheet={<SheetFC items={items} />}
    />
  );
};

export default AppHeader;
