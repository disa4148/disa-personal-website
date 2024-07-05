import css from './email.module.scss';
import { Separator } from '../separator';
import Link from 'next/link';
import { cn } from '../../lib/utils';

const Email: React.FC = () => {
  const email: string = 'denis.nikolaenko.2004@mail.ru';
  return (
    <div className={css.wrapper}>
      <Link href={`mailto:${email}`} passHref>
        <span
          className={cn(
            css.emailText,
            'hover:text-dark-main transition-all text-dark-text',
          )}
        >
          {email}
        </span>
      </Link>
      <Separator className={css.separator} />
    </div>
  );
};

export default Email;
