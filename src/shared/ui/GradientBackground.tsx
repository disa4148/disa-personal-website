import { cn } from '@/src/shared/lib/utils';

interface GradientBackgroundProps {
  width: string;
  height: string;
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <div
      className={cn('bg-dark-gradient', className)}
      style={{ width, height }}
    />
  );
};

export default GradientBackground;
