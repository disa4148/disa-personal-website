import css from './badge.module.scss';
// @ts-expect-error: Cannot find module '@splinetool/react-spline/next' or its corresponding type declarations.
import Spline from '@splinetool/react-spline/next';

const Badge: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <Spline scene="https://prod.spline.design/cWrqFrTDeniaFcXl/scene.splinecode" />
    </div>
  );
};

export default Badge;
