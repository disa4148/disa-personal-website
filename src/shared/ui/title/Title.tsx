import { Separator } from '../separator';
import css from './title.module.scss';

interface TitleProps {
  number: number;
  title: string;
}

const Title: React.FC<TitleProps> = ({ number, title }) => {
  return (
    <div className={css.wrapper}>
      <h1>
        <span className="text-dark-main">0{number}. </span> {title}
      </h1>
      <Separator className={css.separator} />
    </div>
  );
};

export default Title;
