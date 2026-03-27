import Github from '../assets/icons/social/github.svg';
import Twitter from '../assets/icons/social/twitter.svg';
import Gmail from '../assets/icons/social/gmail.svg';

interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/juanfeoru',
    icon: Github.src,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/purpuraaaaaaa',
    icon: Twitter.src,
  },
  {
    name: 'Gmail',
    href: 'mailto:felipeortega383@gmail.com',
    icon: Gmail.src,
  },
];
