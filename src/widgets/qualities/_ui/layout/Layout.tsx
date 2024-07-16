import css from './layout.module.scss';

interface Layout {
  title?: React.ReactNode;
  slider?: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ title, slider }) => {
  return (
    <section className={css.layout} id="qualities">
      <div className={css.wrapper}>
        {title}
        {slider}
      </div>
    </section>
  );
};

export default Layout;
