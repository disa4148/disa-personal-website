import css from './avatar.module.scss';

import Me from '../../assets/img/personalPhoto.png';
import Image from 'next/image';

import { cn } from '@/src/shared/lib/utils';
import GradientBackground from '@/src/shared/ui/GradientBackground';
import DotsIcon from '../../assets/icons/DotsIcon';
const Avatar: React.FC = () => {
  return (
    <div className={css.container}>
      <GradientBackground
        width="550px"
        height="600px"
        className={css.gradient}
      />
      <div className={cn(css.square, 'border-dark-bg-100 border-2')}></div>
      <Image alt="Personal photo" src={Me} className={css.image} />
      <DotsIcon className={css.dots} />
    </div>
  );
};

export default Avatar;
