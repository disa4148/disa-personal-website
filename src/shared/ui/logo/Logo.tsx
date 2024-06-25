import Link from 'next/link';

import css from './logo.module.scss';
import LogoIcon from './assets/logo/LogoIcon';

const Logo: React.FC = () => {
  return (
    <Link className={css.wrapper} href="/">
      <LogoIcon className={css.logo} />
      <span>disa.</span>
    </Link>
  );
};

export default Logo;
