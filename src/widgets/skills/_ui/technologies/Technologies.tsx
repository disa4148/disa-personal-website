import css from './technologies.module.scss';
import Card from '../card/Card';
import { items, toolTipItems } from '../../const/items';

const Technologies: React.FC = () => {
  return (
    <div className={css.wrapper}>
      {items.map((item: string, key: number) => (
        <Card key={key} item={item} toolTipitem={toolTipItems[key]} />
      ))}
    </div>
  );
};

export default Technologies;
