import Layout from './_ui/layout/Layout';
import Description from './_ui/description/Description';
import Technologies from './_ui/technologies/Technologies';
import { Orbit } from './_ui/orbit/Orbit';

const Skills: React.FC = () => {
  return (
    <Layout
      description={<Description />}
      technologies={<Technologies />}
      orbit={<Orbit />}
    />
  );
};
export default Skills;
