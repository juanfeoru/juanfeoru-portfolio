import Sun from '../../assets/icons/Sun.tsx';
import Moon from '../../assets/icons/Moon.tsx';
import { useEffect, useState } from 'preact/hooks';

export default function ThemeToggleReact() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? <Moon /> : <Sun />}
    </button>
  );
}
