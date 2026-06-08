import { useState } from 'react';
import Icon from '@/components/ui/icon';

const links = [
  { href: '#home', label: 'Главная' },
  { href: '#services', label: 'Услуги' },
  { href: '#gallery', label: 'Работы' },
  { href: '#about', label: 'О нас' },
  { href: '#contact', label: 'Контакты' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Icon name="TreePine" className="text-green-600" size={28} />
            <span className="text-xl font-bold text-gray-900">
              Ландшафт<span className="text-green-600">Про</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-gray-700 transition-colors hover:text-green-600"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-green-600 px-5 py-2 text-white transition hover:bg-green-700 md:inline-block"
          >
            Заказать
          </a>
          <button
            className="text-gray-700 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            <Icon name={open ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col gap-3 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-700 hover:text-green-600"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
