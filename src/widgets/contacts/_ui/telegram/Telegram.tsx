import css from './telegram.module.scss';
// @ts-expect-error: Cannot find module '@splinetool/react-spline/next' or its corresponding type declarations.
import Spline from '@splinetool/react-spline/next';
import GradientBackground from '@/src/shared/ui/GradientBackground';

const Telegram: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <Spline scene="https://prod.spline.design/H3Lo59TqEIrUtYKd/scene.splinecode" />
      <GradientBackground
        width="420px"
        height="420px"
        className={css.gradient}
      />
    </div>
  );
};

export default Telegram;
