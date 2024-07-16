import css from './home.module.scss';

import Main from '@/src/widgets/main/Main';
import About from '@/src/widgets/about/About';
import Skills from '@/src/widgets/skills/Skills';
import Qualities from '@/src/widgets/qualities/Qualities';
import Projects from '@/src/widgets/projects/Projects';
import Contacts from '@/src/widgets/contacts/Contacts';

const Home: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <Main />
      <About />
      <Skills />
      <Qualities />
      <Projects />
      <Contacts />
    </div>
  );
};
export default Home;
