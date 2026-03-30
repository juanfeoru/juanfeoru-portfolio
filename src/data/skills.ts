import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

import Html from '../assets/icons/skills/Html.astro';
import Css from '../assets/icons/skills/Css.astro';
import Javascript from '../assets/icons/skills/Javascript.astro';
import React from '../assets/icons/skills/React.astro';
import Tailwindcss from '../assets/icons/skills/Tailwindcss.astro';
import Git from '../assets/icons/skills/Git.astro';
import Typescript from '../assets/icons/skills/Typescript.astro';
import AstroIcon from '../assets/icons/skills/AstroIcon.astro';
import Github from '../assets/icons/skills/Github.astro';
import Figma from '../assets/icons/skills/Figma.astro';

interface Skill {
  name: string;
  icon: AstroComponentFactory;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: Html },
      { name: 'CSS', icon: Css },
      { name: 'JavaScript', icon: Javascript },
      { name: 'React', icon: React },
      { name: 'TypeScript', icon: Typescript },
      { name: 'Tailwind CSS', icon: Tailwindcss },
      { name: 'Astro', icon: AstroIcon },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: Git },
      { name: 'GitHub', icon: Github },
      { name: 'Figma', icon: Figma },
    ],
  },
];
