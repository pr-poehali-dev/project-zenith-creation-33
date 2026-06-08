const stats = [
  { value: '250+', label: 'Проектов' },
  { value: '10', label: 'Лет опыта' },
  { value: '5', label: 'Лет гарантии' },
];

export default function About() {
  return (
    <section id="about" className="bg-green-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
              О компании
            </span>
            <h2 className="mb-6 mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Более 10 лет создаём комфортные пространства
            </h2>
            <p className="mb-4 text-gray-700">
              Мы — команда профессионалов, специализирующихся на монтаже малых архитектурных
              форм, детских и спортивных площадок, 3Д заборов, пергол и арт-объектов. Работаем
              с частными клиентами, застройщиками и муниципальными заказчиками по Краснодарскому
              краю, Черноморскому побережью, Крыму и Центральной России.
            </p>
            <p className="mb-6 text-gray-700">
              Каждый проект — это сочетание эстетики, функциональности и безопасности. Используем
              только сертифицированные материалы и даём гарантию на все виды работ.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-green-600">{s.value}</div>
                  <div className="mt-1 text-sm text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/files/2bb72fd7-4952-4b2e-a9b1-478926be6796.jpg"
              alt="О нас"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}