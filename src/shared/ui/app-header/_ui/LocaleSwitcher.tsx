'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useTransition } from 'react';
import { useLocale } from 'next-intl';
import Cookies from 'js-cookie';
import { Globe } from 'lucide-react';

const LocaleSwitcher: React.FC = () => {
  const locale: string = useLocale();
  const router = useRouter();
  const pathname: string = usePathname();
  const [isPending, startTransition] = useTransition();
  const currentLocale: string = Cookies.get('selectedLocale') || locale || 'ru';

  const switchLocale = useCallback(() => {
    if (!isPending) {
      startTransition(() => {
        const newLocale = currentLocale === 'ru' ? 'en' : 'ru';
        const newPath = pathname.startsWith(`/${currentLocale}`)
          ? pathname.replace(`/${currentLocale}`, `/${newLocale}`)
          : `/${newLocale}${pathname}`;
        router.replace(newPath);
        Cookies.set('selectedLocale', newLocale);
      });
    }
  }, [isPending, startTransition, currentLocale, pathname, router]);

  return (
    <Globe
      size={20}
      className="dark:invert hover:opacity-85 transition-opacity cursor-pointer"
      onClick={switchLocale}
    />
  );
};

export default LocaleSwitcher;
