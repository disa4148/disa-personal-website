import css from './layout.module.scss';

interface Layout {
  title: React.ReactNode;
  description: React.ReactNode;
  telegram: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ title, telegram, description }) => {
  return (
    <section className={css.layout} id="contacts">
      <div className={css.wrapper}>
        {title}
        <div className={css.container}>
          {description}
          {telegram}
        </div>
      </div>
    </section>
  );
};

export default Layout;
