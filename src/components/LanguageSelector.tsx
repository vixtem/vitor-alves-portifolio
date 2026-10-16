import { useEffect, useRef, useState } from 'react';
import type { Language } from '../data/career';

const languages = [
  { code: 'pt', label: 'Português', flag: (<svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><rect width="26" height="18" rx="2" fill="#009739"/><path d="M13 2 24 9 13 16 2 9Z" fill="#ffdf00"/><circle cx="13" cy="9" r="4.4" fill="#002776"/><path d="M8.8 8.3q4.4-1 8.1 2" fill="none" stroke="white" strokeWidth="1"/></svg>) },
  { code: 'en', label: 'English', flag: (<svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><rect width="26" height="18" rx="2" fill="#012169"/><path d="M0 0 26 18M26 0 0 18" stroke="#fff" strokeWidth="4"/><path d="m0 0 13 9m13 9-13-9m13-9L13 9M0 18l13-9" stroke="#c8102e" strokeWidth="1.5"/><path d="M13 0v18M0 9h26" stroke="#fff" strokeWidth="6"/><path d="M13 0v18M0 9h26" stroke="#c8102e" strokeWidth="3"/></svg>) },
  { code: 'es', label: 'Español', flag: (<svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><rect width="26" height="18" rx="2" fill="#aa151b"/><path d="M0 4.5h26v9H0z" fill="#f1bf00"/><path d="M7 7h3v4H7zM7.5 6h2v1h-2z" fill="#aa151b"/></svg>) },
  { code: 'it', label: 'Italiano', flag: (<svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><rect width="26" height="18" rx="2" fill="#fff"/><path d="M0 0h8.67v18H0z" fill="#009246"/><path d="M17.33 0H26v18h-8.67z" fill="#ce2b37"/></svg>) },
  { code: 'fr', label: 'Français', flag: (<svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><rect width="26" height="18" rx="2" fill="#fff"/><path d="M0 0h8.67v18H0z" fill="#000091"/><path d="M17.33 0H26v18h-8.67z" fill="#e1000f"/></svg>) },
 ] as const;

export function LanguageSelector({ language, onChange, label }: { language: Language; onChange: (language: Language) => void; label: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const active = languages.find(item => item.code === language)!;
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [open]);
  return <div className="languages language-selector" ref={root} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
  }} onKeyDown={event => {
    if (event.key === 'Escape' && open) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      trigger.current?.focus();
    }
  }}>
    <button type="button" ref={trigger} className="language-trigger" aria-label={`${label}: ${active.label}`} title={active.label} aria-expanded={open} aria-controls="language-options" onClick={() => setOpen(value => !value)}>{active.flag}</button>
    {open && <div id="language-options" className="language-options" role="group" aria-label={label}>{languages.map(item => <button type="button" key={item.code} aria-pressed={language === item.code} onClick={() => {
      onChange(item.code);
      setOpen(false);
      trigger.current?.focus();
    }}>{item.flag}<span lang={item.code === 'pt' ? 'pt-BR' : item.code}>{item.label}</span></button>)}</div>}
  </div>;
}
