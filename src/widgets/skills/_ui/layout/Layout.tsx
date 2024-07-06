import css from './layout.module.scss';

interface Layout {
  description?: React.ReactNode;
  technologies?: React.ReactNode;
  orbit?: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ description, technologies, orbit }) => {
  return (
    <section className={css.layout}>
      <div className={css.wrapper}>
        {description}
        {technologies}
        {orbit}
      </div>
    </section>
  );
};

export default Layout;
