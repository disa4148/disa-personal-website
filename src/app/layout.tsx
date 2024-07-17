import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Providers from '@/src/app/_providers/Providers';
import { cn } from '@/src/shared/lib/utils';

const FiraCode = Fira_Code({ subsets: ['latin'] });

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const LocaleLayout: React.FC<LocaleLayoutProps> = ({
  children,
  params: { locale },
}) => {
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(FiraCode.className, 'bg-dark-bg-100')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
