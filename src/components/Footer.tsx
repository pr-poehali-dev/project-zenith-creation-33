import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Icon name="TreePine" className="text-green-500" size={26} />
            <span className="font-bold text-white">
              Ландшафт<span className="text-green-500">Про</span>
            </span>
          </div>
          <div className="text-sm">© 2026 ЛандшафтПро. Все права защищены.</div>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-green-500">Telegram</a>
            <a href="#" className="transition hover:text-green-500">WhatsApp</a>
            <a href="#" className="transition hover:text-green-500">VK</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
