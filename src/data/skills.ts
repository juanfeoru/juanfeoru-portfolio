import html from '../assets/icons/skills/html.svg';
import css from '../assets/icons/skills/css.svg';
import javascript from '../assets/icons/skills/javascript.svg';
import react from '../assets/icons/skills/react.svg';
import tailwind from '../assets/icons/skills/tailwindcss.svg';
import git from '../assets/icons/skills/git.svg';
import typescript from '../assets/icons/skills/typescript.svg';
import astro from '../assets/icons/skills/astro.svg';
import github from '../assets/icons/skills/github.svg';
import figma from '../assets/icons/skills/figma.svg';

interface Skill {
  name: string;
  icon: ImageMetadata;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'JavaScript', icon: javascript },
      { name: 'React', icon: react },
      { name: 'TypeScript', icon: typescript },
      { name: 'Tailwind CSS', icon: tailwind },
      { name: 'Astro', icon: astro },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: git },
      { name: 'GitHub', icon: github },
      { name: 'Figma', icon: figma },
    ],
  },
];
