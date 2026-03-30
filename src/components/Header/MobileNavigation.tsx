import { navLinks } from '../../data/navLinks';
import { useState } from 'preact/hooks';
import Hambuerguer from '../../assets/icons/social/Hamburguer';
import ThemeToggleReact from './ThemeToggleReact';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:hidden z-50'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle navigation menu'
        aria-expanded={isOpen}
        className='focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded p-1'
      >
        <Hambuerguer className='dark:fill-primary-textDark' />
      </button>

      {isOpen && (
        <div
          className={`bg-black absolute top-18 right-3 left-3 rounded-lg text-white text-center p-8 transition-all duration-300 ease-out dark:bg-primary-textDark
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        >
          <ul className='flex flex-col gap-8 font-bold'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded p-1 dark:text-primary-bgDark'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex justify-center mt-8'>
            <ThemeToggleReact />
          </div>
        </div>
      )}
    </div>
  );
}
