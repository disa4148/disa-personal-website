import Layout from './_ui/layout/Layout';
import Description from './_ui/description/Description';
import Technologies from './_ui/technologies/Technologies';

const Skills: React.FC = () => {
  return (
    <Layout description={<Description />} technologies={<Technologies />} />
  );
};
export default Skills;
