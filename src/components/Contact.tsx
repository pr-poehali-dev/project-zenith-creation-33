import { useState, type FormEvent } from 'react';
import Icon from '@/components/ui/icon';

const SEND_URL = 'https://functions.poehali.dev/3372badd-4bb6-4519-9f01-838e8494ad90';
const WHATSAPP = 'https://wa.me/79180550004';
const TELEGRAM = 'https://t.me/+79180550004';

const info = [
  { icon: 'Phone', title: 'Телефон', value: '+7 918-055-00-04', href: 'tel:+79180550004' },
  { icon: 'Mail', title: 'Email', value: 'info@smkosnova.ru', href: 'mailto:info@smkosnova.ru' },
  { icon: 'MapPin', title: 'Регион работ', value: 'Краснодарский край, Черноморское побережье, Крым, Центральная Россия' },
  { icon: 'Clock', title: 'Режим работы', value: 'Пн-Сб: 9:00 — 20:00' },
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch(SEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          service: data.get('service'),
          message: data.get('message'),
        }),
      });
      if (!res.ok) throw new Error('fail');
      setStatus('sent');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
            {info.map((i) => {
              const content = (
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Icon name={i.icon} className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">{i.title}</div>
                    <div className="text-gray-600">{i.value}</div>
                  </div>
                </div>
              );
              return i.href ? (
                <a key={i.title} href={i.href} className="block transition hover:opacity-70">
                  {content}
                </a>
              ) : (
                <div key={i.title}>{content}</div>
              );
            })}

            <div className="flex gap-4 pt-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 font-medium text-white transition hover:bg-green-600"
              >
                <Icon name="MessageCircle" size={20} />
                WhatsApp
              </a>
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 font-medium text-white transition hover:bg-sky-600"
              >
                <Icon name="Send" size={20} />
                Telegram
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-8 shadow-lg">
            <div>
              <label className="mb-1 block text-sm font-medium">Ваше имя</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Телефон</label>
              <input
                name="phone"
                type="tel"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Тип работ</label>
              <select
                name="service"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
              >
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
                name="message"
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-lg bg-green-600 py-3 font-medium text-white transition hover:bg-green-700 disabled:opacity-60"
            >
              {status === 'sending' ? 'Отправляем…' : 'Отправить заявку'}
            </button>
            {status === 'sent' && (
              <p className="text-sm text-green-600">
                ✓ Заявка отправлена! Мы скоро свяжемся с вами.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600">
                Не удалось отправить. Позвоните нам: +7 918-055-00-04
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}