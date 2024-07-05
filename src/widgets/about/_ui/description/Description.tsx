import { useTranslations } from 'next-intl';
import css from './description.module.scss';
import Title from '@/src/shared/ui/title/Title';

const Description: React.FC = () => {
  const t = useTranslations('home.about');
  return (
    <div className={css.wrapper}>
      <Title number={1} title={t('title')} />
      <div className={css.description}>
        <p className="text-dark-text">{t('description')}</p>
      </div>
    </div>
  );
};

export default Description;
