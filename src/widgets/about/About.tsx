import Layout from './_ui/layout/Layout';
import Description from './_ui/description/Description';
import Badge from './_ui/badge/Badge';

const About: React.FC = () => {
  return <Layout description={<Description />} badge={<Badge />} />;
};
export default About;
