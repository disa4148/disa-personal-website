import css from './description.module.scss';

import { Button } from '@/src/shared/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Link from 'next/link';

const Description: React.FC = () => {
  const t = useTranslations('home.contacts.content');
  return (
    <div className={css.wrapper}>
      <h2 className="text-dark-text">
        {t('title.first')}{' '}
        <span className="text-dark-main">{t('title.telegram')}</span>
      </h2>
      <h3 className="text-dark-text">
        {t('description.first')}{' '}
        <span className="text-dark-main">{t('description.telegram')}</span>{' '}
        {t('description.last')}
      </h3>
      <Link href={'https://t.me/disa159'} passHref target="_blank">
        <Button>
          {t('btn')}
          <ArrowUpRight />
        </Button>
      </Link>
    </div>
  );
};

export default Description;
