'use client';
import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/src/shared/lib/utils';
import css from './layout.module.scss';

interface LayoutProps {
  logo: React.ReactNode;
  nav: React.ReactNode;
  languageSwitcher: React.ReactNode;
  themeSwitcher: React.ReactNode;
  sheet: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  logo,
  nav,
  languageSwitcher,
  themeSwitcher,
  sheet,
}) => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null,
  );
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY - 20) {
      setScrollDirection('up');
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(css.layout, 'bg-dark-bg-90', {
        [css.hide]: scrollDirection === 'down',
        [css.visible]: scrollDirection === 'up',
      })}
    >
      <div className={css.logo}>{logo}</div>
      <div className={css.nav}>
        <div className={css.items}>{nav}</div>
        <div className={css.sheet}>{sheet}</div>
        <div className={css.switchers}>
          {languageSwitcher}
          {themeSwitcher}
        </div>
      </div>
    </header>
  );
};

export default Layout;
