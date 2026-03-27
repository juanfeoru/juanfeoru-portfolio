import { navLinks } from '../../data/navLinks';
import { useState } from 'preact/hooks';

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
        <svg
          width='27'
          height='18'
          viewBox='0 0 27 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 18V15H27V18H0ZM0 10.5V7.5H27V10.5H0ZM0 3V0H27V3H0Z'
            fill='black'
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`bg-black absolute top-18 right-3 left-3 rounded-lg text-white text-center p-8 transition-all duration-300 ease-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        >
          <ul className='flex flex-col gap-8 font-bold'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsOpen(false)} className='focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded p-1'>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
