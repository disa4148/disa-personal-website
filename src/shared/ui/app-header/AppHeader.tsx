import Layout from './_ui/layout/Layout';
import Logo from '../logo/Logo';
// import Nav from '../nav/Nav';
// import LocaleSwitcher from './_ui/LocaleSwitcher';
// import { useTranslations } from 'next-intl';
import ThemeSwitcher from './_ui/ThemeSwitcher';

// type Items = {
//   title: string;
//   link: string;
// };

const AppHeader: React.FC = () => {
  // const t = useTranslations('header.nav');
  // const keys: string[] = ['home', 'skills', 'projects', 'qualities'];

  // const items: Items[] = keys.map((key) => ({
  //   title: t(`${key}.title`),
  //   link: t(`${key}.link`),
  // }));

  return (
    <Layout
      logo={<Logo />}
      // nav={<Nav items={items} />}
      // languageSwitcher={<LocaleSwitcher />}
      themeSwitcher={<ThemeSwitcher />}
    />
  );
};

export default AppHeader;
