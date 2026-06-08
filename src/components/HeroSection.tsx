import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/files/a0d12605-58cf-4e7f-9d49-a80cf2994a3c.jpg',
  'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/files/3ef90d67-8f55-47b2-bfd9-0ca1e0f69c1c.jpg',
  'https://cdn.poehali.dev/projects/a0811768-77ab-429b-85d6-7d186456d6c8/files/d2a7a775-975c-407c-9a33-ceb0eb4d1956.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-16 text-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/55" />

      <div
        className={cn(
          'relative z-10 mx-auto max-w-5xl px-4 text-center transition-all duration-1000 ease-out',
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        )}
      >
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Создаём пространства,<br />в которых хочется жить
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-100 md:text-xl">
          Монтаж МАФ, детских и спортивных площадок, 3Д заборов, пергол и арт-объектов.
          Работаем по Краснодарскому краю, Черноморскому побережью, Крыму и Центральной России — от проекта до сдачи под ключ.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#gallery"
            className="rounded-full bg-green-600 px-8 py-3 font-medium text-white transition hover:bg-green-700"
          >
            Посмотреть работы
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-white bg-white/10 px-8 py-3 font-medium text-white backdrop-blur transition hover:bg-white hover:text-gray-900"
          >
            Получить консультацию
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}