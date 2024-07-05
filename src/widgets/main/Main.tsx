import Avatar from './_ui/avatar/Avatar';
import Bio from './_ui/bio/Bio';
import Layout from './_ui/layout/Layout';
const Main: React.FC = () => {
  return <Layout bio={<Bio />} avatar={<Avatar />} />;
};
export default Main;
