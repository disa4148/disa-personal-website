import Link from 'next/link';

import css from './nav.module.scss';

type Items = {
  title: string;
  link: string;
};

type Props = {
  items: Items[];
};

const Nav: React.FC<Props> = ({ items }) => {
  return (
    <div className={css.nav}>
      {items.map((item: Items, index: number) => (
        <Link key={index} href={item.link}>
          <span className="text-dark-main">0{index + 1}.</span> {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
