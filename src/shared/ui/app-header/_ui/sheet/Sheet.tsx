'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/shared/ui/sheet';
import { useState } from 'react';
import Burger from '../burger/Burger';
import Link from 'next/link';
import css from './sheet.module.scss';
import ThemeSwitcher from '../ThemeSwitcher';
import LocaleSwitcher from '../../../localeSwitcher/LocaleSwitcher';

type Items = {
  title: string;
  link: string;
};

type Props = {
  items: Items[];
};

const SheetFC: React.FC<Props> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
          <SheetTitle></SheetTitle>
          <SheetDescription className={css.description}>
            {items.map((item: Items, index: number) => (
              <Link key={index} href={item.link}>
                <span className="text-dark-main">0{index + 1}.</span>{' '}
                {item.title}
              </Link>
            ))}
          </SheetDescription>
          <SheetFooter className={css.footer}>
            <ThemeSwitcher />
            <LocaleSwitcher orientation="top" />
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SheetFC;
