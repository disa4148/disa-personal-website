import css from './card.module.scss';
import { cn } from '@/src/shared/lib/utils';

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Card: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className={cn(css.wrapper, 'bg-dark-bg-70/80')}>
      <div className={css.content}>
        <div className={cn(css.icon, 'bg-dark-gradient-card')}>{icon}</div>
        <h1>{title}</h1>
        <h2 className="text-dark-text">{description}</h2>
      </div>
    </div>
  );
};

export default Card;
