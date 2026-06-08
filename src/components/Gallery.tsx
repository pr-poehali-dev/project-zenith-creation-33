import { useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const IMG = {
  playground: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/files/a0d12605-58cf-4e7f-9d49-a80cf2994a3c.jpg',
  sport: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/files/3ef90d67-8f55-47b2-bfd9-0ca1e0f69c1c.jpg',
  fence: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/files/d2a7a775-975c-407c-9a33-ceb0eb4d1956.jpg',
  pergola: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/files/2bb72fd7-4952-4b2e-a9b1-478926be6796.jpg',
  maf: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/files/13ec0d0b-375e-412e-baed-3bd58bafd9c3.jpg',
};

const filters = [
  { key: 'all', label: 'Все работы' },
  { key: 'pergola', label: 'Перголы' },
  { key: 'playground', label: 'Площадки' },
  { key: 'maf', label: 'МАФ' },
  { key: 'fence', label: '3Д заборы' },
];

const items = [
  { cat: 'pergola', tag: 'Пергола', title: 'Пергола с вьющимися растениями', img: IMG.pergola },
  { cat: 'playground', tag: 'Детская площадка', title: 'Игровой комплекс для ЖК', img: IMG.playground },
  { cat: 'maf', tag: 'МАФ', title: 'Скамейки и освещение в парке', img: IMG.maf },
  { cat: 'fence', tag: '3Д забор', title: '3Д ограждение спортзоны', img: IMG.fence },
  { cat: 'playground', tag: 'Спортплощадка', title: 'Уличные тренажёры во дворе', img: IMG.sport },
  { cat: 'maf', tag: 'МАФ', title: 'Комплексное благоустройство двора', img: IMG.maf },
];

export default function Gallery() {
  const [active, setActive] = useState('all');
  const [modal, setModal] = useState<string | null>(null);

  const visible = items.filter((i) => active === 'all' || i.cat === active);

  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Портфолио
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Наши работы</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Реальные проекты, которые мы реализовали для наших клиентов
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={cn(
                'rounded-full border border-green-600 px-5 py-2 transition',
                active === f.key
                  ? 'bg-green-600 text-white'
                  : 'text-gray-700 hover:bg-green-600 hover:text-white'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <div
              key={item.title}
              onClick={() => setModal(item.img)}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.03]"
            >
              <img src={item.img} alt={item.title} className="h-64 w-full object-cover" />
              <div className="bg-white p-4">
                <div className="text-xs font-semibold uppercase text-green-600">{item.tag}</div>
                <div className="font-medium">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setModal(null)}
        >
          <img src={modal} alt="" className="max-h-full max-w-full rounded-lg" />
          <button
            onClick={() => setModal(null)}
            className="absolute right-6 top-6 text-white transition hover:text-green-500"
            aria-label="Закрыть"
          >
            <Icon name="X" size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
