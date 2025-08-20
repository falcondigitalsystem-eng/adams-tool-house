'use client';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

/**
 * Minimal, dependency-free slider using scroll-snap (robust on any host).
 * Replace slides with CMS-driven images.
 */
export default function HeroSlider() {
  const ref = useRef(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIdx(i);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const slides = [
    { id: 0, src: '/placeholder-1.svg', title: 'Industrial Tools & Machinery', text: 'Power tools, compressors, welding, safety & more.' },
    { id: 1, src: '/placeholder-1.svg', title: 'Wholesale & Retail', text: 'Get quotes fast via WhatsApp or request form.' },
    { id: 2, src: '/placeholder-1.svg', title: 'Top Brands', text: 'Makita, Dewalt, Telwin, Hioki, Unior, ABAC and more.' },
  ];

  return (
    <div className="w-full">
      <div
        ref={ref}
        className="relative w-full overflow-x-auto snap-x snap-mandatory flex scroll-smooth rounded-2xl border"
        style={{ scrollBehavior: 'smooth' }}
      >
        {slides.map((s) => (
          <div key={s.id} className="snap-start shrink-0 w-full">
            <div className="relative w-full h-[420px] flex items-center justify-center bg-white">
              <img src={s.src} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative z-10 container-narrow">
                <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-brand-accent">{s.title}</h2>
                <p className="mb-6 opacity-80">{s.text}</p>
                <div className="flex gap-3">
                  <a href="/categories" className="btn-primary">Browse Products</a>
                  <a href="https://wa.me/971558763747" className="btn-outline">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i+1}`}
            onClick={() => {
              const el = ref.current;
              if (el) el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
            }}
            className={clsx('h-2 w-2 rounded-full', i === idx ? 'bg-brand-primary' : 'bg-gray-300')}
          />
        ))}
      </div>
    </div>
  );
}
