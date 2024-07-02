import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwicherSelect';

type Props = {
  orientation?: 'bottom' | 'top';
};

const LocaleSwitcher: React.FC<Props> = ({ orientation }) => {
  const t = useTranslations('header.localeSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      orientation={orientation}
      items={[
        {
          value: 'en',
          label: t('en'),
        },
        {
          value: 'ru',
          label: t('ru'),
        },
      ]}
    />
  );
};

export default LocaleSwitcher;
