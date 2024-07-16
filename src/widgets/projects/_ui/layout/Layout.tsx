import css from './layout.module.scss';

interface Layout {
  title: React.ReactNode;
  projects: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ title, projects }) => {
  return (
    <section className={css.layout} id="projects">
      <div className={css.wrapper}>
        {title}
        {projects}
      </div>
    </section>
  );
};

export default Layout;
