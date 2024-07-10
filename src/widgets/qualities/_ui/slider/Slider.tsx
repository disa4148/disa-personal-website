'use client';

import { useState, useEffect } from 'react';

import css from './slider.module.scss';
import { cn } from '@/src/shared/lib/utils';

import Card from '../card/Card';
import Autoplay from 'embla-carousel-autoplay';
import GradientBackground from '@/src/shared/ui/GradientBackground';

import type { CarouselItemData } from '../../const/carouselData';
import { useCarouselItems } from '../../const/carouselData';
import type { CarouselApi } from '@/src/shared/ui/carousel';
import {
  CarouselContent,
  CarouselItem,
  Carousel,
} from '@/src/shared/ui/carousel';

const Slider: React.FC = () => {
  const items = useCarouselItems();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        className={css.container}
        orientation="horizontal"
        opts={{ align: 'center' }}
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent className={css.content}>
          {items.map((item: CarouselItemData, index: number) => (
            <CarouselItem
              key={index}
              className={cn(css.item, 'md:basis-1/2 lg:basis-1/3')}
            >
              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <GradientBackground
          width="425px"
          height="425px"
          className={css.gradient}
        />
      </Carousel>
      <div className={cn(css.counter, 'text-dark-text')}>
        {current}/{count}
      </div>
    </>
  );
};

export default Slider;
