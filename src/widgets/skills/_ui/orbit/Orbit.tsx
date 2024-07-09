import GradientBackground from '@/src/shared/ui/GradientBackground';
import css from './orbit.module.scss';
import { OrbitingItems } from './OrbitingItems';

export function Orbit(): JSX.Element {
  return (
    <div className={css.wrapper}>
      <GradientBackground
        width="500px"
        height="500px"
        className={css.gradient}
      />
      <div className={css.orbitContainer}>
        <span className="pointer-events-none whitespace-pre-wrap text-dark-text/60 text-center text-8xl font-semibold leading-none">
          Tools
        </span>
        <OrbitingItems />
      </div>
    </div>
  );
}
