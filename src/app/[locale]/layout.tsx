import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import Providers from '@/src/app/[locale]/_providers/Providers';
import { cn } from '@/src/shared/lib/utils';

const FiraCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'disa',
  description:
    'My personal portfolio site, which includes projects I ve worked on, my skills, and contacts',
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const LocaleLayout: React.FC<LocaleLayoutProps> = async ({
  children,
  params: { locale },
}) => {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(FiraCode.className, 'bg-dark-bg-100')}>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
