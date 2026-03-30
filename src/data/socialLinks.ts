import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

import Github from '../assets/icons/social/astro/Github.astro';
import Gmail from '../assets/icons/social/astro/Gmail.astro';

interface SocialLink {
  name: string;
  href: string;
  icon: AstroComponentFactory;
}

export const socialLinks: SocialLink[] = [
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
