import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

import './globals.css';
import Providers from '@/src/app/_providers/Providers';
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
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(FiraCode.className, 'bg-dark-bg-100')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;
