'use client';

import { cn } from '../../lib/utils';
import { useState, useTransition } from 'react';

import type { Locale } from '@/src/config';
import { setUserLocale } from '@/src/services/locale';

import { CheckIcon, Globe } from 'lucide-react';

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  orientation?: 'top' | 'bottom';
};

const LocaleSwitcherSelect: React.FC<Props> = ({
  defaultValue,
  items,
  orientation = 'bottom',
}) => {
  const [isPending, startTransition] = useTransition();
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onChange(value: string): void {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
    setSelectedValue(value);
    setIsOpen(false);
  }

  function toggleDropdown(): void {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      <button
        className={cn(
          'flex items-center rounded-sm transition-colors p-0',
          isPending && 'pointer-events-none opacity-60',
        )}
        onClick={toggleDropdown}
      >
        <Globe className="h-6 w-6 hover:opacity-80 transition-all" />
      </button>
      {isOpen && (
        <div
          className={cn(
            'absolute right-0 min-w-[8rem] rounded-sm bg-dark-bg-90',
            {
              'bottom-full mb-3': orientation === 'top',
              'top-full mt-3': orientation === 'bottom',
            },
          )}
        >
          {items.map((item) => (
            <div
              key={item.value}
              className="flex cursor-pointer items-center px-3 py-2 text-base hover:opacity-80 transition-all"
              onClick={() => onChange(item.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onChange(item.value);
                }
              }}
              role="menuitem"
              tabIndex={0}
            >
              <div className="mr-2 w-[1rem]">
                {item.value === selectedValue && (
                  <CheckIcon className="h-5 w-5 text-dark-main" />
                )}
              </div>
              <span className="text-dark-text-dark-main text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcherSelect;
