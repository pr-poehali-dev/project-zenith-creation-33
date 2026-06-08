import { useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const IMG = {
  playground: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/bucket/a4f5c16a-c3b4-4e86-9561-4d765889c91c.jpeg',
  sport: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/files/3ef90d67-8f55-47b2-bfd9-0ca1e0f69c1c.jpg',
  fence: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/files/d2a7a775-975c-407c-9a33-ceb0eb4d1956.jpg',
  pergola: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/bucket/d670dd43-86b7-4259-bea6-d801e48a7662.png',
  bench: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/bucket/ec6d7bfb-0c58-40e6-9a6e-e4d99472ff1a.jpeg',
  art: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/bucket/630c1599-f2b1-4c77-893a-ecd75ee18aae.jpg',
  canopy: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/bucket/839ef010-0d5c-4966-bc61-a3e46b0fc5d2.jpg',
  slide: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/bucket/9270acbc-5fb9-4651-8eb8-cc96689ead73.jpg',
  ship: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/bucket/759d82b8-e093-4983-b5b5-84608d9538b6.jpeg',
};

const filters = [
  { key: 'all', label: 'Все работы' },
  { key: 'pergola', label: 'Перголы' },
  { key: 'playground', label: 'Площадки' },
  { key: 'maf', label: 'Скамейки и МАФ' },
  { key: 'fence', label: '3Д заборы' },
];

const items = [
  { cat: 'playground', tag: 'Детская площадка', title: 'Игровой комплекс-корабль для ЖК', img: IMG.playground },
  { cat: 'playground', tag: 'Детская площадка', title: 'Горка с металлическим скатом', img: IMG.slide },
  { cat: 'playground', tag: 'Детская площадка', title: 'Игровой корабль с верёвочной лазалкой', img: IMG.ship },
  { cat: 'pergola', tag: 'Пергола', title: 'Пергола', img: IMG.pergola },
  { cat: 'maf', tag: 'Скамейки и урны', title: 'Скамейки и урны', img: IMG.bench },
  { cat: 'maf', tag: 'Арт-объект', title: 'Шезлонги и световые шары', img: IMG.art },
  { cat: 'pergola', tag: 'Навес', title: 'Навес-пергола над зоной отдыха', img: IMG.canopy },
  { cat: 'fence', tag: '3Д забор', title: '3Д ограждение спортзоны', img: IMG.fence },
  { cat: 'playground', tag: 'Спортплощадка', title: 'Уличные тренажёры во дворе', img: IMG.sport },
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