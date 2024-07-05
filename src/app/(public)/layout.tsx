import type { PropsWithChildren } from 'react';

import AppHeader from '@/src/shared/ui/app-header/AppHeader';
import Socials from '@/src/shared/ui/socials/Socials';
import Email from '@/src/shared/ui/email/Email';

const Layout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <>
      <AppHeader />
      <Socials />
      {children}
      <Email />
    </>
  );
};

export default Layout;
