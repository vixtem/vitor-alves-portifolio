import { useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Language } from '../data/career';

export function ProjectGallery({ photos, title, language }: { photos: readonly string[]; title: string; language: Language }) {
  const [active, setActive] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);
  const start = useRef<{ x: number; y: number } | null>(null);
  const labels = language === 'es' ? ['Cerrar foto', 'Foto anterior', 'Foto siguiente', 'Ampliar foto', 'Foto'] : language === 'en' ? ['Close photo', 'Previous photo', 'Next photo', 'Expand photo', 'Photo'] : ['Fechar foto', 'Foto anterior', 'Próxima foto', 'Ampliar foto', 'Foto'];
  const src = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`;
  const move = (step: number) => {
    setDirection(step);
    setActive(index => index === null ? null : (index + step + photos.length) % photos.length);
  };
  if (!photos.length) return null;
  return <Dialog.Root open={active !== null} onOpenChange={open => { if (!open) setActive(null); }}>
    <div className="case-photo-gallery">{photos.map((file, index) => <Dialog.Trigger asChild key={file}><button type="button" onClick={() => { setDirection(1); setActive(index); }} aria-label={`${labels[3]} ${index + 1}: ${title}`}><img src={src(file)} alt={`${title} — ${labels[4]} ${index + 1}`} loading="lazy" /></button></Dialog.Trigger>)}</div>
    <Dialog.Portal><Dialog.Overlay className="gallery-overlay" /><Dialog.Content className="gallery-lightbox" aria-describedby={undefined} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } }}>
      <Dialog.Title className="sr-only">{title}</Dialog.Title>
      <Dialog.Close className="gallery-close" aria-label={labels[0]}><X /></Dialog.Close>
      <div className="gallery-image-stage" onTouchStart={event => { start.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null; }} onTouchEnd={event => { const point = start.current; start.current = null; if (!point || !event.changedTouches.length) return; const dx = event.changedTouches[0].clientX - point.x; const dy = event.changedTouches[0].clientY - point.y; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) move(dx < 0 ? 1 : -1); }} onTouchCancel={() => { start.current = null; }}>
        {active !== null && <img key={active} className={direction > 0 ? 'gallery-image from-right' : 'gallery-image from-left'} src={src(photos[active])} alt={`${title} — ${labels[4]} ${active + 1}`} />}
      </div>
      {photos.length > 1 && <><button className="gallery-prev" onClick={() => move(-1)} aria-label={labels[1]}><ChevronLeft /></button><button className="gallery-next" onClick={() => move(1)} aria-label={labels[2]}><ChevronRight /></button></>}
      <div className="gallery-dots">{photos.map((file, index) => <button key={file} className={index === active ? 'active' : ''} aria-label={`${labels[4]} ${index + 1}`} aria-pressed={index === active} onClick={() => { setDirection(index > (active ?? 0) ? 1 : -1); setActive(index); }} />)}</div>
    </Dialog.Content></Dialog.Portal>
  </Dialog.Root>;
}
