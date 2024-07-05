import { Button } from '@/src/shared/ui/button';
import css from './bio.module.scss';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Bio: React.FC = () => {
  const t = useTranslations('home.main');
  return (
    <div className={css.wrapper}>
      <h4 className="text-dark-main">{t('title')}</h4>
      <h1 className="text-dark-text">{t('name')}</h1>
      <h2 className="text-dark-text">
        {t('info.me')}{' '}
        <span className="text-dark-main">{t('info.specialty.first')}</span>{' '}
        {t('info.and')}{' '}
        <span className="text-dark-main">{t('info.specialty.second')}</span>
      </h2>
      <h3 className="text-dark-text">{t('description')}</h3>
      <Link href={'https://t.me/disa159'} passHref target="_blank">
        <Button>{t('btn')}</Button>
      </Link>
    </div>
  );
};

export default Bio;
