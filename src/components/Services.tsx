const services = [
  {
    title: 'Детские и спортивные площадки',
    text: 'Игровые комплексы и спортивные тренажёры. Монтаж с соблюдением всех норм и стандартов безопасности.',
    img: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/bucket/a4f5c16a-c3b4-4e86-9561-4d765889c91c.jpeg',
  },
  {
    title: 'Перголы и зоны отдыха',
    text: 'Деревянные и металлические перголы, навесы и шезлонги для сада, террасы и зоны отдыха. Индивидуальный дизайн и надёжный монтаж.',
    img: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/bucket/d670dd43-86b7-4259-bea6-d801e48a7662.png',
  },
  {
    title: 'Скамейки, урны и арт-объекты',
    text: 'Скамейки, урны, вазоны, геопластика, 3Д заборы и арт-объекты. Создаём уют и функциональность пространства.',
    img: 'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/bucket/ec6d7bfb-0c58-40e6-9a6e-e4d99472ff1a.jpeg',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Что мы делаем
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Наши услуги</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Полный цикл работ по благоустройству — от проектирования до финального монтажа
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <img src={s.img} alt={s.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                <p className="text-gray-600">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}