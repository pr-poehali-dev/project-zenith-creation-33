import { useState } from 'react';
import Icon from '@/components/ui/icon';

const info = [
  { icon: 'Phone', title: 'Телефон', value: '+7 (999) 123-45-67' },
  { icon: 'Mail', title: 'Email', value: 'info@landshaftpro.ru' },
  { icon: 'MapPin', title: 'Регион работ', value: 'Краснодарский край, Центральная Россия' },
  { icon: 'Clock', title: 'Режим работы', value: 'Пн-Сб: 9:00 — 20:00' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Связаться с нами
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Обсудим ваш проект</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Оставьте заявку — мы перезвоним в течение часа и ответим на все вопросы
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            {info.map((i) => (
              <div key={i.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Icon name={i.icon} className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold">{i.title}</div>
                  <div className="text-gray-600">{i.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-8 shadow-lg">
            <div>
              <label className="mb-1 block text-sm font-medium">Ваше имя</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Телефон</label>
              <input
                type="tel"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Тип работ</label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200">
                <option>Детская / спортивная площадка</option>
                <option>Монтаж перголы</option>
                <option>МАФ и арт-объекты</option>
                <option>3Д заборы</option>
                <option>Комплексное благоустройство</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Сообщение</label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 py-3 font-medium text-white transition hover:bg-green-700"
            >
              Отправить заявку
            </button>
            {sent && (
              <p className="text-sm text-green-600">
                ✓ Заявка отправлена! Мы скоро свяжемся с вами.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
