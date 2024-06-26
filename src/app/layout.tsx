import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

import './globals.css';
import Providers from '@/src/app/_providers/Providers';
import { cn } from '@/src/shared/lib/utils';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
const FiraCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'disa',
  description:
    'My personal portfolio site, which includes projects I ve worked on, my skills, and contacts',
};

interface LocaleLayoutProps {
  children: React.ReactNode;
}

const LocaleLayout: React.FC<LocaleLayoutProps> = async ({ children }) => {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
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
