'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../../button';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = (): JSX.Element | null => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeTheme = (t: string) => {
    setTheme(t);
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}
      className="dark:invert hover:opacity-85 transition-opacity"
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeSwitcher;
