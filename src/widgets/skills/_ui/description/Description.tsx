import { useTranslations } from 'next-intl';
import css from './description.module.scss';
import Title from '@/src/shared/ui/title/Title';

const Description: React.FC = () => {
  const t = useTranslations('home.skills');
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <Title number={2} title={t('title')} />
      </div>
      <div className={css.description}>
        <p className="text-dark-text">
          {t('description.text')}{' '}
          <span className="text-dark-main">{t('description.develop')}</span>{' '}
          {t('description.advanced')}{' '}
          <span className="text-dark-main"> {t('description.web')} </span>
        </p>
      </div>
    </div>
  );
};

export default Description;
