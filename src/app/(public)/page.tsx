import css from './home.module.scss';

import Main from '@/src/widgets/main/Main';
import About from '@/src/widgets/about/About';

const Home: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <Main />
      <About />
    </div>
  );
};
export default Home;
