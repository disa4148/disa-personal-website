import {
  CircleCheckBig,
  Speech,
  Lightbulb,
  CalendarCheck2,
  Settings,
  PersonStanding,
  BarChart3,
  Shield,
  Clock,
  Target,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const iconMap = {
  CircleCheckBig: <CircleCheckBig />,
  Speech: <Speech />,
  Lightbulb: <Lightbulb />,
  CalendarCheck2: <CalendarCheck2 />,
  Settings: <Settings />,
  PersonStanding: <PersonStanding />,
  BarChart3: <BarChart3 />,
  Shield: <Shield />,
  Clock: <Clock />,
  Target: <Target />,
} as const;

type IconKeys = keyof typeof iconMap;

export interface CarouselItemData {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const useCarouselItems = (): CarouselItemData[] => {
  const t = useTranslations('home.qualities.carousel');

  const keys: string[] = [
    'responsibility',
    'communication',
    'creativity',
    'organization',
    'technical_knowledge',
    'flexibility',
    'analytical_thinking',
    'stress_resistance',
    'punctuality',
    'result_oriented',
  ];

  return keys.map((key) => ({
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    icon: iconMap[t(`${key}.icon`) as IconKeys],
  }));
};
