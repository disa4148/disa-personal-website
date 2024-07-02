'use client';
import css from './burger.module.scss';

import type { KeyboardEvent as ReactKeyboardEvent } from 'react';

import { cn } from '@/src/shared/lib/utils';

import { Menu, X } from 'lucide-react';

interface BurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Burger({
  isOpen,
  toggleMenu,
}: BurgerProps): JSX.Element {
  const handleKeyDown = (event: ReactKeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  };

  return (
    <div className={css.dropdown}>
      <div
        className={cn(css.trigger, 'bg-dark-bg-100')}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        {isOpen ? (
          <X width={26} height={26} className="dark:invert" />
        ) : (
          <Menu width={26} height={26} className="dark:invert" />
        )}
      </div>
    </div>
  );
}
