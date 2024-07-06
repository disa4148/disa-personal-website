import css from './card.module.scss';
import { cn } from '@/src/shared/lib/utils';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/src/shared/ui/tooltip';

type CardProps = {
  item: string;
  toolTipitem: string;
};

const Card: React.FC<CardProps> = ({ item, toolTipitem }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={cn(
              css.wrapper,
              'bg-dark-bg-80 opacity-90 hover:opacity-100 transition-all',
            )}
          >
            <Image
              className={cn(css.icon, 'bg-dark-bg-80')}
              src={`/icons/${item}.svg`}
              width={40}
              height={40}
              alt={`${item} icon`}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>{toolTipitem}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Card;
