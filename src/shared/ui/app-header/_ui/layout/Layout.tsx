import { cn } from '@/src/shared/lib/utils';

import css from './layout.module.scss';

interface Layout {
  logo: React.ReactNode;
  nav?: React.ReactNode;
  languageSwitcher?: React.ReactNode;
  themeSwitcher?: React.ReactNode;
}

const Layout: React.FC<Layout> = ({
  logo,
  nav,
  languageSwitcher,
  themeSwitcher,
}) => {
  return (
    <header className={cn(css.layout, 'bg-dark-bg-90')}>
      {logo}
      <div className={css.nav}>
        {nav}
        <div className={css.switchers}>
          {languageSwitcher}
          {themeSwitcher}
        </div>
      </div>
    </header>
  );
};

export default Layout;
