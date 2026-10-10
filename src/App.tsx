import { ProjectGallery } from './components/ProjectGallery';
import { spanish } from './data/spanish';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowDown, ArrowUpRight, Box, Download, Globe2, Instagram, Linkedin, Mail, Menu, MoveUpRight, Printer, X } from 'lucide-react';
import { Copy, email, whatsappNumber, Language, projects, skills } from './data/career';
import './career.css';

const ThreeViewer = lazy(() => import('./components/ThreeViewer').then(m => ({ default: m.ThreeViewer })));
const base = import.meta.env.BASE_URL;
// Photos displayed together in the hero card.
const projectPhotos = ['foto01.jpeg', 'foto02.jpeg', 'foto03.jpeg'];
type Project = typeof projects[number];

function initialLanguage(): Language {
  const lang = new URLSearchParams(window.location.search).get('lang');
  return lang === 'en' || lang === 'es' ? lang : 'pt';
}

export default function App() {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const [viewModel, setViewModel] = useState(false);
  const [expandedPhoto, setExpandedPhoto] = useState<number | null>(null);
  const [resetZoomOrigin, setResetZoomOrigin] = useState(false);
  const photoAreaRef = useRef<HTMLDivElement>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const ignoreClickUntil = useRef(0);
  const [photoSlide, setPhotoSlide] = useState<{ previous: number; direction: number; id: number } | null>(null);
  const navigateZoom = (direction: number) => {
    setPhotoSlide({ previous: zoomPhoto, direction, id: Date.now() });
    const index = (zoomPhoto + direction + projectPhotos.length) % projectPhotos.length;
    const column = photoAreaRef.current?.querySelectorAll<HTMLButtonElement>('.triptych-photo')[index];
    if (column) setPhotoOrigin({ left: column.offsetLeft, top: column.parentElement?.parentElement?.offsetTop ?? 0, width: column.offsetWidth, height: column.offsetHeight });
    setZoomPhoto(index);
    setExpandedPhoto(index);
  };
  const [zoomPhoto, setZoomPhoto] = useState(0);
  const [photoOrigin, setPhotoOrigin] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const photoLabel = language === 'es' ? 'Foto del proyecto' : language === 'en' ? 'Project photo' : 'Foto do projeto';
  useEffect(() => {
    if (expandedPhoto === null) return;
    const closeOutside = (event: PointerEvent) => {
      if (!photoAreaRef.current?.contains(event.target as Node)) setExpandedPhoto(null);
    };
    const closeEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedPhoto(null);
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeEscape);
    };
  }, [expandedPhoto]);
  const [contactOpen, setContactOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [channel, setChannel] = useState<'whatsapp' | 'email'>('whatsapp');
  const t = (pt: string, en: string) => language === 'es' ? spanish[pt] : language === 'pt' ? pt : en;
  const c = (copy: Copy) => copy[language];
  const home = `${base}index.html?lang=${language}`;
  const isCases = window.location.pathname.endsWith('/cases.html');
  const link = (hash: string) => isCases ? `${home}#${hash}` : `#${hash}`;

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
    document.title = language === 'es' ? 'Vitor Alves — Diseño de Producto y Fabricación Aditiva' : language === 'pt' ? 'Vitor Alves — Design de Produto & Manufatura Aditiva' : 'Vitor Alves — Product Design & Additive Manufacturing';
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'es' ? 'Portafolio profesional de Vitor Alves: CAD, ingeniería inversa, prototipado y fabricación aditiva para aplicaciones industriales.' : language === 'pt' ? 'Portfólio profissional de Vitor Alves: CAD, engenharia reversa, prototipagem e manufatura aditiva para aplicações industriais.' : 'Vitor Alves professional portfolio: CAD, reverse engineering, prototyping and additive manufacturing for industrial applications.');
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState(null, '', url);
  }, [language]);

  function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!senderName.trim() || !message.trim()) return;
    const body = (senderName.trim() ? `${t('Nome', 'Name')}: ${senderName.trim()}\n\n` : '') + message.trim();
    if (channel === 'whatsapp') {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(t('Oportunidade profissional — Vitor Alves', 'Career opportunity — Vitor Alves'))}&body=${encodeURIComponent(body)}`;
    }
  }


  return <div className="career-site">
    <div className="topline"><span>{t('CAD / DESIGN / MANUFATURA ADITIVA', 'CAD / DESIGN / ADDITIVE MANUFACTURING')}</span><span>{t('São Luís, Brasil → oportunidades internacionais', 'São Luís, Brazil → international opportunities')}</span></div>
    <header className="site-header shell">
      <a className="wordmark" href={home} aria-label={t('Vitor Alves — início', 'Vitor Alves — home')}><span className="wordmark-initial" aria-hidden="true">V</span><span className="wordmark-reveal wordmark-first" aria-hidden="true">itor</span><span className="wordmark-initial" aria-hidden="true">A</span><span className="wordmark-reveal wordmark-last" aria-hidden="true">lves</span></a>
      <nav aria-label={t('Navegação principal', 'Main navigation')} className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {[[t('Projetos', 'Projects'), 'projects'], [t('Experiência', 'Experience'), 'experience'], [t('Sobre', 'About'), 'about']].map(([label, id]) => <a key={id} href={link(id)} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a href={link('contact')} onClick={() => setMenuOpen(false)}>{t('Contato', 'Contact')} <ArrowUpRight size={15} /></a>
      </nav>
      <div className="header-actions"><div className="languages" aria-label={t('Idioma do site', 'Site language')}><button aria-label="Português" title="Português" style={{ borderRadius: 5, boxShadow: language === 'pt' ? '0 0 0 2px #ff4625' : 'none' }} aria-pressed={language === 'pt'} onClick={() => setLanguage('pt')}><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><rect width="26" height="18" rx="2" fill="#009739"/><path d="M13 2 24 9 13 16 2 9Z" fill="#ffdf00"/><circle cx="13" cy="9" r="4.4" fill="#002776"/><path d="M8.8 8.3q4.4-1 8.1 2" fill="none" stroke="white" strokeWidth="1"/></svg></button><span>/</span><button aria-label="English" title="English — United Kingdom" style={{ borderRadius: 5, boxShadow: language === 'en' ? '0 0 0 2px #ff4625' : 'none' }} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><rect width="26" height="18" rx="2" fill="#012169"/><path d="M0 0 26 18M26 0 0 18" stroke="#fff" strokeWidth="4"/><path d="m0 0 13 9m13 9-13-9m13-9L13 9M0 18l13-9" stroke="#c8102e" strokeWidth="1.5"/><path d="M13 0v18M0 9h26" stroke="#fff" strokeWidth="6"/><path d="M13 0v18M0 9h26" stroke="#c8102e" strokeWidth="3"/></svg></button><span>/</span><button aria-label="Español" title="Español" style={{ borderRadius: 5, boxShadow: language === 'es' ? '0 0 0 2px #ff4625' : 'none' }} aria-pressed={language === 'es'} onClick={() => setLanguage('es')}><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><rect width="26" height="18" rx="2" fill="#aa151b"/><path d="M0 4.5h26v9H0z" fill="#f1bf00"/><path d="M7 7h3v4H7zM7.5 6h2v1h-2z" fill="#aa151b"/></svg></button></div><button className="menu-toggle" aria-expanded={menuOpen} aria-label={t('Abrir ou fechar menu', 'Toggle menu')} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
    </header>
    <main>
      {!isCases && <>
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy"><p className="eyebrow"><span className="status-dot" />{t('Portfólio profissional / Vitor Alves', 'Professional portfolio / Vitor Alves')}</p><h1 id="hero-title">{t("Design de produto", "Product design")}<br />{t("para a", "for")} <span>{t("indústria.", "industry.")}</span></h1><p className="role">{t('Design de Produto · CAD · Manufatura Aditiva', 'Product Design · CAD · Additive Manufacturing')}</p><p className="intro">{t("Desenvolvo peças técnicas para aplicações industriais, conectando levantamento dimensional, modelagem CAD, seleção de materiais e manufatura aditiva.", "I develop technical parts for industrial applications, connecting dimensional assessment, CAD modeling, material selection and additive manufacturing.")}</p><div className="button-row"><a className="button primary" href="#projects">{t('Explorar projetos', 'Explore projects')} <ArrowDown size={18} /></a><a className="button secondary" href="https://www.linkedin.com/in/vitor-alves-design" target="_blank" rel="noopener noreferrer">{t("Ver perfil profissional", "View professional profile")} <ArrowUpRight size={18} /></a></div><p className="hero-note"><Globe2 size={16} />{t('Interesse em oportunidades no Brasil e no exterior.', 'Interested in opportunities in Brazil and abroad.')}</p></div>
          <div className="hero-visual" ref={photoAreaRef}><div className="visual-label"><span>01 / {t('DO DIGITAL AO FÍSICO', 'FROM DIGITAL TO PHYSICAL')}</span><Box size={19} /></div><div className="model-stage">{viewModel ? <Suspense fallback={<p>{t('Carregando visualizador…', 'Loading viewer…')}</p>}><ThreeViewer language={language} /></Suspense> : <div className="photo-triptych" onClick={() => setExpandedPhoto(null)}>{projectPhotos.map((file, index) => <button key={file} className={expandedPhoto === index ? "triptych-photo expanded" : "triptych-photo"} aria-label={`${photoLabel} ${index + 1}`} aria-expanded={expandedPhoto === index} onClick={event => { event.stopPropagation(); const button = event.currentTarget;
const stage = button.parentElement?.parentElement;
setExpandedPhoto(null);
setResetZoomOrigin(true);
setPhotoSlide(null);
setPhotoOrigin({ left: button.offsetLeft, top: stage?.offsetTop ?? 0, width: button.offsetWidth, height: button.offsetHeight });
setZoomPhoto(index);
requestAnimationFrame(() => requestAnimationFrame(() => {
  setResetZoomOrigin(false);
  requestAnimationFrame(() => setExpandedPhoto(index));
})); }}><img src={`${base}assets/${file}`} alt={`${photoLabel} ${index + 1}`} /><span className="photo-count">0{index + 1}</span></button>)}</div>}</div>{!viewModel && <button className={resetZoomOrigin ? "photo-zoom reset-origin" : expandedPhoto === null ? "photo-zoom" : "photo-zoom is-open"} style={expandedPhoto === null ? { left: photoOrigin.left, top: photoOrigin.top, width: photoOrigin.width, height: photoOrigin.height } : { left: 0, top: 0, width: '100%', height: '100%' }} aria-label={language === 'es' ? 'Reducir foto' : language === 'en' ? 'Collapse photo' : 'Reduzir foto'} aria-hidden={expandedPhoto === null} tabIndex={expandedPhoto === null ? -1 : 0} onTouchStart={event => {
      if (event.touches.length !== 1) { swipeStart.current = null; return; }
      swipeStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }} onTouchEnd={event => {
      const start = swipeStart.current;
      swipeStart.current = null;
      if (!start || !event.changedTouches.length) return;
      const dx = event.changedTouches[0].clientX - start.x;
      const dy = event.changedTouches[0].clientY - start.y;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
        ignoreClickUntil.current = Date.now() + 700;
        navigateZoom(dx < 0 ? 1 : -1);
      } else if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
        ignoreClickUntil.current = Date.now() + 700;
      }
    }} onTouchCancel={() => { swipeStart.current = null; }} onKeyDown={event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        navigateZoom(event.key === 'ArrowRight' ? 1 : -1);
      }
    }} onClick={() => { if (Date.now() >= ignoreClickUntil.current) setExpandedPhoto(null); }}>{photoSlide && <img key={`out-${photoSlide.id}`} className={photoSlide.direction > 0 ? "zoom-slide slide-out-left" : "zoom-slide slide-out-right"} src={`${base}assets/${projectPhotos[photoSlide.previous]}`} alt="" aria-hidden="true" />}<img key={photoSlide?.id ?? 'initial'} className={photoSlide ? photoSlide.direction > 0 ? "zoom-slide slide-in-left" : "zoom-slide slide-in-right" : undefined} src={`${base}assets/${projectPhotos[zoomPhoto]}`} alt="" /><span className="photo-zoom-indicators" aria-hidden="true">{projectPhotos.map((file, index) => <span key={file} className={zoomPhoto === index ? 'zoom-dot active' : 'zoom-dot'} />)}</span></button>}<div className="visual-footer"><span>{viewModel ? t('Ponteira T8L · modelo CAD', 'T8L stick tip · CAD model') : t('CAD → prototipagem → aplicação', 'CAD → prototyping → application')}</span><button aria-pressed={viewModel} onClick={() => { setViewModel(!viewModel); setExpandedPhoto(null); }}>{viewModel ? t('Ver imagem', 'View image') : t('Explorar modelo 3D', 'Explore 3D model')} <MoveUpRight size={16} /></button></div></div>
        </section>
        <div className="expertise-strip"><div className="shell"><span>FUSION 360</span><span>{t('ENGENHARIA REVERSA', 'REVERSE ENGINEERING')}</span><span>DfAM</span><span>{t('PROTOTIPAGEM', 'PROTOTYPING')}</span><span>{t('FDM / RESINA', 'FDM / RESIN')}</span></div></div>
      </>}
      <section id="projects" className="section shell"><div className="section-heading"><div><p className="eyebrow">{t('01 / Trabalho selecionado', '01 / Selected work')}</p><h2>{isCases ? t('Projetos & aplicações', 'Projects & applications') : t('Da necessidade à peça.', 'From a need to a part.')}</h2></div><p>{t('Projeto pessoal com modelo 3D e frentes de atuação em ambiente industrial.', 'A personal project with a 3D model and areas of work in industrial environments.')}</p></div>
        {isCases && <a className="back-link" href={home}>← {t('Voltar ao início', 'Back to home')}</a>}
        <div className="filters" aria-label={t('Filtrar projetos', 'Filter projects')}>{[['all', t('Todos', 'All')], ['industrial', t('Aplicações industriais', 'Industrial applications')], ['cad', 'CAD'], ['additive', t('Manufatura Aditiva', 'Additive Manufacturing')]].map(([value, label]) => <button key={value} aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}</div>
        <div className="project-grid">{projects.filter(p => filter === 'all' || p.category === filter || (filter === 'additive' && (p.tags.includes('FDM') || p.tags.includes('Manufatura Aditiva')))).map(p => <button className={`project-card ${p.id}`} key={p.id} onClick={() => setSelected(p)}><div className="project-cover"><span className="project-number">{p.number}</span>{p.model ? <img className="project-preview" src={`${base}assets/${p.photos[1] || p.photos[0]}`} alt={c(p.title)} loading="lazy" /> : p.id === 'protection' ? <div className="technical-symbol">[<span>CAD</span>]</div> : <Printer size={72} strokeWidth={1} />}<span className="cover-caption">{p.model ? t('CAD / PROJETO PESSOAL', 'CAD / PERSONAL PROJECT') : t('INDUSTRIAL / EXPERIÊNCIA APLICADA', 'INDUSTRIAL / APPLIED EXPERIENCE')}</span></div><div className="project-body"><div className="tags">{p.tags.map(tag => <span key={tag}>{tag === 'Engenharia reversa' ? t(tag, 'Reverse engineering') : tag === 'Manufatura Aditiva' ? t(tag, 'Additive Manufacturing') : tag}</span>)}</div><h3>{c(p.title)} <ArrowUpRight size={22} /></h3><p>{c(p.summary)}</p><span className="project-action">{t('Conhecer o trabalho', 'Explore the work')} →</span></div></button>)}</div>
        {!isCases && <a className="text-link" href={`${base}cases.html?lang=${language}`}>{t('Abrir página de projetos', 'Open projects page')} <ArrowUpRight size={18} /></a>}
      </section>
      {!isCases && <>
        <section id="experience" className="section experience-section"><div className="shell experience-layout"><div><p className="eyebrow">{t('02 / Experiência', '02 / Experience')}</p><h2>{t('Prática industrial.', 'Industrial practice.')}<br /><span>{t('Olhar de produto.', 'A product mindset.')}</span></h2><p>{t('Atuação técnica que conecta o ambiente de produção ao desenvolvimento digital e à fabricação de componentes.', 'Technical work connecting the production environment to digital development and component manufacturing.')}</p></div><div className="experience-details"><article><span className="experience-label">3DCRIAR · {t("Julho de 2024 — atual", "July 2024 — present")}</span><h3>{t("Analista de Manufatura Aditiva I — Modelador de Engenharia", "Additive Manufacturing Analyst I — Engineering Modeler")}</h3><p>{t("Modelagem CAD de peças de reposição, preparação e otimização de arquivos para impressão 3D e acompanhamento de aplicações.", "CAD modeling of replacement parts, preparation and optimization of 3D printing files, and application follow-up.")}</p><ul><li>{t("Avaliação de aplicações e mapeamento de oportunidades de manufatura aditiva.", "Application assessment and identification of additive manufacturing opportunities.")}</li><li>{t("Gestão de materiais e consumíveis, relatórios e documentação de processos.", "Materials and consumables management, reports and process documentation.")}</li></ul></article><article className="personal-work"><span className="experience-label">Fribal · {t("Abril — junho de 2024", "April — June 2024")}</span><h3>{t("Assistente de projetos", "Project Assistant")}</h3><p>{t("Apoio ao levantamento de necessidades, cronogramas, planilhas, apresentações e organização da documentação de projetos.", "Support with requirements gathering, schedules, spreadsheets, presentations and project documentation.")}</p><p>{t("Trajetória anterior na Fribal: atendimento, atividades administrativas e faturamento, de 2014 a 2024.", "Earlier experience at Fribal: customer service, administration and billing, from 2014 to 2024.")}</p></article></div></div></section>
        <section id="about" className="section shell"><div className="about-layout"><div><p className="eyebrow">{t('03 / Sobre mim', '03 / About me')}</p><h2>Vitor Alves<span className="accent">.</span></h2><p className="about-lead">{t("Formado em Design de Produto, com pós-graduação em Engenharia de Manufatura Avançada 4.0.", "Product Design graduate with postgraduate studies in Advanced Manufacturing Engineering 4.0.")}</p><p>{t('Meu interesse está em entender necessidades reais e desenvolver soluções fabricáveis. Trabalho com modelagem paramétrica, engenharia reversa, prototipagem e documentação técnica, especialmente em aplicações industriais.', 'I am interested in understanding real needs and developing manufacturable solutions. My work includes parametric modeling, reverse engineering, prototyping and technical documentation, particularly for industrial applications.')}</p><p>{t('Busco oportunidades técnicas em design de produto, CAD e manufatura aditiva, com interesse em equipes industriais e possibilidades internacionais.', 'I am seeking technical opportunities in product design, CAD and additive manufacturing, with an interest in industrial teams and international opportunities.')}</p><div className="location-pill"><Globe2 size={17} />São Luís, Maranhão · {t('Brasil', 'Brazil')}</div></div><div className="skills-grid">{skills.map((skill, i) => <article key={i}><span className="skill-index">0{i + 1}</span><h3>{c(skill.title)}</h3><p>{c(skill.items)}</p></article>)}</div></div></section>
        <section className="section shell education-section"><p className="eyebrow">{t("04 / Formação", "04 / Education")}</p><h2>{t("Base técnica e criativa.", "A technical and creative foundation.")}</h2><div className="education-grid"><article><span className="experience-label">Anhanguera Educacional · 2024–2026</span><h3>{t("Engenharia de Manufatura Avançada 4.0", "Advanced Manufacturing Engineering 4.0")}</h3><p>{t("Pós-graduação · outubro de 2024 a abril de 2026", "Postgraduate studies · October 2024 to April 2026")}</p></article><article><span className="experience-label">Cruzeiro do Sul Virtual · 2021–2024</span><h3>{t("Design de Produto", "Product Design")}</h3><p>{t("Graduação · 2021 a abril de 2024", "Undergraduate degree · 2021 to April 2024")}</p></article></div></section>
      </>}
      <section id="contact" className="shell contact-section"><div className="contact-panel"><p className="eyebrow">{t('Vamos conversar', 'Let’s connect')}</p><h2>{t('Uma próxima', 'A next')}<br />{t('oportunidade.', 'opportunity.')}</h2><p>{t('Para oportunidades profissionais, colaborações técnicas e conversas sobre desenvolvimento de produtos e manufatura aditiva.', 'For career opportunities, technical collaborations and conversations about product development and additive manufacturing.')}</p><div className="button-row"><button className="button lime" onClick={() => setContactOpen(true)}><Mail size={18} />{t('Entrar em contato', 'Get in touch')}</button><a className="button dark" href={`${base}assets/cv/Vitor_Alves_CV_${language.toUpperCase()}.pdf`} download><Download size={18} />{language === 'es' ? 'Descargar CV' : language === 'en' ? 'Download CV' : 'Baixar currículo'}</a></div><div className="social-links" style={{ display: 'flex', gap: 18, marginTop: 24 }}><a href="https://www.instagram.com/v1tor_a/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><Instagram size={24} /></a><a href="https://www.linkedin.com/in/vitor-alves-design" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={24} /></a><a href="https://grabcad.com/vitor.alves-11" target="_blank" rel="noopener noreferrer" aria-label="GrabCAD" title="GrabCAD"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 2 9 5v10l-9 5-9-5V7zM3 7l9 5 9-5M12 12v10"/><path d="M14.5 6.5a3 3 0 1 0 0 3H12"/></svg></a></div><a className="email-link" href={`mailto:${email}`}>{email}</a></div></section>
    </main>
    <footer className="shell site-footer"><span>© {new Date().getFullYear()} Vitor Alves</span><span>{t('Design de Produto · CAD · Manufatura Aditiva', 'Product Design · CAD · Additive Manufacturing')}</span><a href={home}>{t('Início', 'Home')} ↑</a></footer>
    <Dialog.Root open={contactOpen} onOpenChange={setContactOpen}><Dialog.Portal><Dialog.Overlay className="dialog-overlay" /><Dialog.Content className="project-dialog contact-dialog"><Dialog.Close className="dialog-close" aria-label={t('Fechar contato', 'Close contact')}><X /></Dialog.Close><Dialog.Title>{t('Escreva sua mensagem', 'Write your message')}</Dialog.Title><Dialog.Description>{t('Escolha WhatsApp ou e-mail. A mensagem será aberta no aplicativo escolhido para você confirmar o envio.', 'Choose WhatsApp or email. Your message will open in the selected app for you to confirm sending.')}</Dialog.Description><form onSubmit={sendMessage} className="contact-form"><label htmlFor="contact-name">{t('Nome', 'Name')}</label><input id="contact-name" autoComplete="name" required pattern={String.raw`.*\S.*`} maxLength={100} value={senderName} onChange={e => setSenderName(e.target.value)} /><label htmlFor="contact-message">{t('Mensagem', 'Message')}</label><textarea id="contact-message" rows={6} required maxLength={3000} value={message} onChange={e => setMessage(e.target.value)} /><fieldset><legend>{t('Como deseja enviar?', 'How would you like to send it?')}</legend><label><input type="radio" name="contact-channel" value="whatsapp" checked={channel === 'whatsapp'} onChange={() => setChannel('whatsapp')} /> WhatsApp</label><label><input type="radio" name="contact-channel" value="email" checked={channel === 'email'} onChange={() => setChannel('email')} /> {t('E-mail', 'Email')}</label></fieldset><button type="submit" className="button primary" disabled={!senderName.trim() || !message.trim()}>{channel === 'whatsapp' ? t('Continuar no WhatsApp', 'Continue in WhatsApp') : t('Continuar no e-mail', 'Continue in email')} <ArrowUpRight size={18} /></button></form></Dialog.Content></Dialog.Portal></Dialog.Root>
    <Dialog.Root open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><Dialog.Portal><Dialog.Overlay className="dialog-overlay" /><Dialog.Content className="project-dialog"><Dialog.Close className="dialog-close" aria-label={t('Fechar projeto', 'Close project')}><X /></Dialog.Close>{selected && <><p className="eyebrow">{selected.tags.map(tag => tag === 'Engenharia reversa' ? t(tag, 'Reverse engineering') : tag === 'Manufatura Aditiva' ? t(tag, 'Additive Manufacturing') : tag).join(' / ')}</p><Dialog.Title>{c(selected.title)}</Dialog.Title><Dialog.Description>{c(selected.summary)}</Dialog.Description><ProjectGallery key={selected.id} photos={selected.photos} title={c(selected.title)} language={language} />{selected.model && <div className="dialog-model"><Suspense fallback={<p>{t('Carregando modelo…', 'Loading model…')}</p>}><ThreeViewer language={language} modelPath={selected.modelPath} /></Suspense></div>}<div className="case-details">{[[t('Contexto', 'Context'), selected.context], [t('Minha contribuição', 'My contribution'), selected.contribution], [t("Aplicação e documentação", "Application and documentation"), selected.evidence]].map(([label, copy], i) => <article key={i}><h3>{label as string}</h3><p>{c(copy as Copy)}</p></article>)}</div></>}</Dialog.Content></Dialog.Portal></Dialog.Root>
  </div>;
}
