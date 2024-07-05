import css from './layout.module.scss';

interface Layout {
  description: React.ReactNode;
  badge: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ badge, description }) => {
  return (
    <section className={css.layout}>
      <div className={css.wrapper}>
        {description}
        {badge}
      </div>
    </section>
  );
};

export default Layout;
