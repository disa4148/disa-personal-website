import type { PropsWithChildren } from 'react';

import AppHeader from '@/src/shared/ui/app-header/AppHeader';
import Socials from '@/src/shared/ui/socials/Socials';
import Email from '@/src/shared/ui/email/Email';
import Footer from '@/src/shared/ui/footer/Footer';

const Layout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <>
      <AppHeader />
      <Socials />
      {children}
      <Email />
      <Footer />
    </>
  );
};

export default Layout;
