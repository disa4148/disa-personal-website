import css from './home.module.scss';

import Main from '@/src/widgets/main/Main';
import About from '@/src/widgets/about/About';
import Skills from '@/src/widgets/skills/Skills';

const Home: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <Main />
      <About />
      <Skills />
    </div>
  );
};
export default Home;
