import css from './project.module.scss';
import Card from '../card/Card';
import { useTranslations } from 'next-intl';

interface ProjectItem {
  projectType: string;
  title: string;
  description: string;
  gitHubLink: string;
  externalLink: string;
  image: string;
}

const Project: React.FC = () => {
  const t = useTranslations('home.projects');
  const keys: string[] = ['denwa', 'nftjet'];

  const projectItems: ProjectItem[] = keys.map((key) => ({
    projectType: t(`${key}.projectType`),
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    image: t(`${key}.image`),
    gitHubLink: t(`${key}.gitHubLink`),
    externalLink: t(`${key}.externalLink`),
  }));

  return (
    <div className={css.wrapper}>
      {projectItems.map((item: ProjectItem, index: number) => (
        <div key={index}>
          <Card
            key={index}
            projectType={item.projectType}
            title={item.title}
            description={item.description}
            image={item.image}
            externalLink={item.externalLink}
            gitHubLink={item.gitHubLink}
            reverse={index % 2 === 1}
          />
        </div>
      ))}
    </div>
  );
};
export default Project;
