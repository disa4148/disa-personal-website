import css from './layout.module.scss';
import HalfSquare from '@/src/shared/ui/HalfSquare';

interface Layout {
  bio: React.ReactNode;
  avatar: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ bio, avatar }) => {
  return (
    <section className={css.layout} id="home">
      <div className={css.wrapper}>
        {bio} {avatar}
      </div>
      <div className={css.square}>
        <HalfSquare
          height="120px"
          width="55px"
          position="right"
          verticalOffset="20%"
        />
      </div>
    </section>
  );
};

export default Layout;
