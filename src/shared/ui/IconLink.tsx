import Link from 'next/link';
import type { ReactElement } from 'react';

interface IconLinkProps {
  href: string;
  icon: ReactElement;
}

const IconLink: React.FC<IconLinkProps> = ({ href, icon }) => {
  return (
    <Link href={href} target="_blank" passHref>
      {icon}
    </Link>
  );
};

export default IconLink;
