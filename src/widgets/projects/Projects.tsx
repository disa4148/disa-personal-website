import Layout from './_ui/layout/Layout';
import Title from '@/src/shared/ui/title/Title';
import Project from './_ui/project/Project';
import { useTranslations } from 'next-intl';

const Projects: React.FC = () => {
  const t = useTranslations('home.projects');
  return (
    <Layout
      title={<Title number={4} title={t('title')} />}
      projects={<Project />}
    />
  );
};
export default Projects;
