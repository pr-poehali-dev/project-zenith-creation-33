import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Icon name="PocketKnife" className="text-green-500" size={26} />
              <span className="font-bold text-white">
                СМК<span className="text-green-500">Основа</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Монтаж МАФ, детских и спортивных площадок, 3Д заборов, пергол и арт-объектов
              по Краснодарскому краю, Черноморскому побережью, Крыму и Центральной России.
            </p>
          </div>

          <div className="text-sm leading-relaxed text-gray-400">
            <div className="mb-3 font-semibold text-white">Контакты</div>
            <p>
              Тел.:{' '}
              <a href="tel:+79180550004" className="transition hover:text-green-500">
                +7 918-055-00-04
              </a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:info@smkosnova.ru" className="transition hover:text-green-500">
                info@smkosnova.ru
              </a>
            </p>
            <p>353982, Краснодарский край, г. Новороссийск,<br />ст-ца Натухаевская, ул. Симферопольская, д. 6</p>
            <div className="mt-3 flex gap-4">
              <a
                href="https://t.me/+79180550004"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-green-500"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/79180550004"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-green-500"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="text-sm leading-relaxed text-gray-400">
            <div className="mb-3 font-semibold text-white">Реквизиты</div>
            <p>ИП Наклюцкий Александр Викторович</p>
            <p>ИНН: 860234756378</p>
            <p>ОГРНИП: 323237500303197</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 ИП Наклюцкий А.В. Все права защищены.
        </div>
      </div>
    </footer>
  );
}