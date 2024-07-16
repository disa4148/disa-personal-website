import css from './socials.module.scss';

import GithubIcon from '../../../socials/assets/icons/GithubIcon';
import MailIcon from '../../../socials/assets/icons/MaiIcon';
import TelegramIcon from '../../../socials/assets/icons/TelegramIcon';

import Link from 'next/link';

const Socials: React.FC = () => {
  const email: string = 'denis.nikolaenko.2004@mail.ru';
  return (
    <div className={css.wrapper}>
      <Link href={'https://github.com/disa4148'} passHref target="_blank">
        <GithubIcon />
      </Link>
      <Link href={`mailto:${email}`} passHref target="_blank">
        <MailIcon />
      </Link>
      <Link href={'https://t.me/disa159'} passHref target="_blank">
        <TelegramIcon />
      </Link>
    </div>
  );
};

export default Socials;
