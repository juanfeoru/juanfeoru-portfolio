import mockupDigitalBank from '../assets/images/mockup-digitalbank.webp';
import mockupFylo from '../assets/images/mockup-fylo.webp';
import mockupSunnyside from '../assets/images/mockup-sunnyside.webp';
import mockupLoopstudios from '../assets/images/moclup-loopstudios.webp';

interface Project {
  id: number;
  name: string;
  description: string;
  image: ImageMetadata;
  demo: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Sunnyside Agency Landing Page',
    description:
      'A responsive agency landing page built with Astro, focused on clean layout, strong visual hierarchy, and optimized images. The project recreates the Sunnyside creative agency concept using reusable components and modern UI practices.',
    image: mockupSunnyside,
    demo: 'https://sunnyside-agency-landing-astro.netlify.app/',
    github: 'https://github.com/juanfeoru/sunnyside-agency-landing-page',
  },
  {
    id: 2,
    name: 'Loopstudios Landing Page',
    description:
      'A modern landing page for a virtual reality brand. Built with Astro with a focus on responsive layout, visual hierarchy, and clean component structure.',
    image: mockupLoopstudios,
    demo: 'https://loopstudios-landing-astro.netlify.app/',
    github: 'https://github.com/juanfeoru/loopstudios-landing-page',
  },
  {
    id: 3,
    name: 'Fylo Landing Page',
    description:
      'A dark-themed landing page for a cloud storage service. Built with Astro and designed to showcase clean UI components and responsive layout across devices.',
    image: mockupFylo,
    demo: 'https://fylo-landing-page-astro.netlify.app/',
    github: 'https://github.com/juanfeoru/fylo-dark-theme-landing-page',
  },

  {
    id: 4,
    name: 'Digital Bank Landing Page',
    description:
      'A responsive landing page concept for a digital banking platform, focusing on modern UI layout, reusable components, and performance optimization.',
    image: mockupDigitalBank,
    demo: 'https://digital-bank-landing.netlify.app/',
    github: 'https://github.com/juanfeoru/digitalbank-landing-page',
  },
];
