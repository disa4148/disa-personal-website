import css from './card.module.scss';
import { cn } from '@/src/shared/lib/utils';

import Image from 'next/image';

import GitHubIcon from '../../assets/icons/GitHubIcon';
import ExternalLinkIcon from '../../assets/icons/ExternalLinkIcon';
import IconLink from '@/src/shared/ui/IconLink';
import GradientBackground from '@/src/shared/ui/GradientBackground';

type Props = {
  projectType: string;
  title: string;
  description: string;
  gitHubLink: string;
  externalLink: string;
  image: string;
  reverse: boolean;
};

const Card: React.FC<Props> = ({
  title,
  description,
  image,
  gitHubLink,
  externalLink,
  projectType,
  reverse,
}) => {
  return (
    <div className={css.wrapper}>
      <div
        className={`${css.left} ${reverse ? css.leftReverse : css.leftDefault}`}
      >
        <div
          className={`${css.titles} ${reverse ? css.titlesReverse : css.titlesDefault}`}
        >
          <h2 className="text-dark-main">{projectType}</h2>
          <h3 className="text-dark-text">{title}</h3>
        </div>
        <div className={css.blur}>
          <p className="text-dark-text">{description}</p>
        </div>
        <div className={css.desktopIcons}>
          <IconLink href={gitHubLink} icon={<GitHubIcon />} />
          <IconLink href={externalLink} icon={<ExternalLinkIcon />} />
        </div>
      </div>
      <div
        className={`${css.right} ${reverse ? css.rightReverse : css.rightDefault}`}
      >
        <div className={cn(css.background, 'bg-dark-bg-pink')}>
          <Image
            alt={title}
            src={`/images/${image}`}
            width={540}
            height={315}
          />
          <GradientBackground
            width="550px"
            height="500px"
            className={css.gradient}
          />
        </div>
        <div className={css.mobileIcons}>
          <IconLink href={gitHubLink} icon={<GitHubIcon />} />
          <IconLink href={externalLink} icon={<ExternalLinkIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Card;
