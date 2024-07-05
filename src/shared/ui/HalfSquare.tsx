import React from 'react';
import { cn } from '@/src/shared/lib/utils';

interface HalfSquareProps {
  width: string;
  height: string;
  position: 'left' | 'right';
  verticalOffset: string;
  className?: string;
}

const HalfSquare: React.FC<HalfSquareProps> = ({
  width,
  height,
  position,
  verticalOffset = '50%',
  className,
}) => {
  const borderStyle =
    position === 'left'
      ? 'border-b border-t border-r border-dark-text'
      : 'border-b border-t border-l border-dark-text';
  return (
    <div
      className={cn(borderStyle, className, 'hidden', 'md:block')}
      style={{
        width,
        height,
        position: 'fixed',
        top: verticalOffset,
        transform: 'translateY(-50%)',
        [position]: 0,
      }}
    />
  );
};

export default HalfSquare;
