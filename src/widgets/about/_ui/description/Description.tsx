import { useTranslations } from 'next-intl';
import css from './description.module.scss';
import Title from '@/src/shared/ui/title/Title';
import { cn } from '@/src/shared/lib/utils';

const Description: React.FC = () => {
  const t = useTranslations('home.about');
  return (
    <div className={css.wrapper}>
      <Title number={1} title={t('title')} />
      <div className={cn(css.description, 'text-dark-text')}>
        <p className="text-dark-text">{t('description.first')}</p>
        <p className="text-dark-text">{t('description.second')}</p>
        <p className="text-dark-text">{t('description.third')}</p>
      </div>
    </div>
  );
};

export default Description;
