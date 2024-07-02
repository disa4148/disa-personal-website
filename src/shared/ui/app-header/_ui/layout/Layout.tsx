import { cn } from '@/src/shared/lib/utils';

import css from './layout.module.scss';

interface Layout {
  logo: React.ReactNode;
  nav: React.ReactNode;
  languageSwitcher: React.ReactNode;
  themeSwitcher: React.ReactNode;
  sheet: React.ReactNode;
}

const Layout: React.FC<Layout> = ({
  logo,
  nav,
  languageSwitcher,
  themeSwitcher,
  sheet,
}) => {
  return (
    <header className={cn(css.layout, 'bg-dark-bg-90')}>
      <div className={css.logo}>{logo}</div>
      <div className={css.nav}>
        <div className={css.items}>{nav}</div>
        <div className={css.sheet}>{sheet}</div>
        <div className={css.switchers}>
          {languageSwitcher}
          {themeSwitcher}
        </div>
      </div>
    </header>
  );
};

export default Layout;
