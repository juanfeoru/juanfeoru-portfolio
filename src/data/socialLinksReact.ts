import type { ComponentType } from 'preact';

import Github from '../assets/icons/social/react/Github.tsx';
import Gmail from '../assets/icons/social/react/Gmail.tsx';

interface SocialLink {
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export const socialLinksReact: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/juanfeoru',
    icon: Github,
  },
  {
    name: 'Gmail',
    href: 'mailto:felipeortega383@gmail.com',
    icon: Gmail,
  },
];
