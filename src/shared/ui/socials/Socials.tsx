import css from './socials.module.scss';

import MailIcon from './assets/icons/MaiIcon';
import TelegramIcon from './assets/icons/TelegramIcon';
import GithubIcon from './assets/icons/GithubIcon';
import { Separator } from '../separator';
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
      <Separator orientation="horizontal" className={css.separator} />
    </div>
  );
};

export default Socials;
