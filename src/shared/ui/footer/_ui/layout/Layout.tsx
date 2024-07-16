import css from './layout.module.scss';
import { Separator } from '../../../separator';

interface Layout {
  logo: React.ReactNode;
  nav: React.ReactNode;
  socials: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ logo, nav, socials }) => {
  return (
    <footer className={css.layout}>
      <div className={css.wrapper}>
        <Separator className={css.separator} />
        <div className={css.footer}>
          <div className={css.logo}>{logo}</div>
          <div className={css.nav}>{nav}</div>
          <div className={css.socials}>{socials}</div>
        </div>
      </div>
    </footer>
  );
};

export default Layout;
