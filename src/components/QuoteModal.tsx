import React, { useState } from 'react';
import { X, MessageCircle, Mail, UploadCloud } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioConfig } from '../data/portfolioData';

interface QuoteModalProps {
  isOpen: boolean;
  contextTitle?: string;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  contextTitle,
  onClose,
}) => {
  const [service, setService] = useState('Modelagem 3D CAD');
  const [processType, setProcessType] = useState('Preciso de Recomendação');
  const [timeline, setTimeline] = useState('Normal (5 a 7 dias úteis)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');
  const [fileName, setFileName] = useState('');

  if (!isOpen) return null;

  const services = [
    'Modelagem 3D CAD',
    'Design de Produto',
    'Impressão 3D',
    'Engenharia Reversa',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá ${portfolioConfig.authorName}! Gostaria de um orçamento:\n*Nome:* ${name}\n*WhatsApp:* ${phone}\n*Serviço:* ${service}\n*Processo Desejado:* ${processType}\n*Prazo:* ${timeline}\n*Detalhes:* ${desc}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${portfolioConfig.whatsappNumber}?text=${encoded}`, '_blank');
    onClose();
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Orçamento: ${service} - ${name || 'Cliente'}`);
    const body = encodeURIComponent(
      `Olá,\n\nTenho interesse em:\n- Serviço: ${service}\n- Processo: ${processType}\n- Prazo: ${timeline}\n- Detalhes: ${desc}\n\nContato: ${name} (${phone})`
    );
    window.location.href = `mailto:${portfolioConfig.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 p-4 bg-ink/75 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-cream border-2 border-ink rounded-3xl p-6 sm:p-8 brutal-shadow-lg relative overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border-2 border-ink bg-white hover:bg-neutral-100 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="mb-6">
          <Badge variant="lime" className="mb-2">
            Orçamento Direto
          </Badge>
          <h3 className="text-3xl font-black font-heading text-ink uppercase">
            {contextTitle ? `Orçamento: ${contextTitle}` : 'Vamos tirar sua ideia do papel'}
          </h3>
          <p className="text-xs sm:text-sm text-ink/70 font-medium mt-1">
            Preencha os dados abaixo para receber uma estimativa de prazo e valor via WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Services */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-ink mb-2">
              Tipo de Serviço
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold">
              {services.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setService(item)}
                  className={`py-2 px-3 rounded-xl border-2 border-ink text-center transition-all ${
                    service === item
                      ? 'bg-lime border-ink shadow-[2px_2px_0px_#141414]'
                      : 'bg-white hover:bg-neutral-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Process & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-ink mb-1.5">
                Processo / Tecnologia
              </label>
              <select
                value={processType}
                onChange={(e) => setProcessType(e.target.value)}
                className="w-full bg-white border-2 border-ink rounded-xl px-3.5 py-2.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-cobalt"
              >
                <option value="Preciso de Recomendação">Preciso de Recomendação Técnica</option>
                <option value="FDM (Filamento PLA / PETG / Nylon)">FDM (Filamento)</option>
                <option value="SLA (Resina de Alta Definição)">SLA (Resina)</option>
                <option value="SLS (Nylon Sinterizado)">SLS (Nylon em Pó)</option>
                <option value="SLM (Metal / Titânio)">SLM (Metal / Titânio)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-ink mb-1.5">
                Prazo Desejado
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full bg-white border-2 border-ink rounded-xl px-3.5 py-2.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-cobalt"
              >
                <option value="Normal (5 a 7 dias úteis)">Normal (5 a 7 dias úteis)</option>
                <option value="Prioritário (48 a 72 horas)">Prioritário (48 a 72 horas)</option>
                <option value="Urgente / Express (24h)">Urgente / Express (24h)</option>
              </select>
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-ink mb-1.5">
                Seu Nome
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Lucas Silva"
                className="w-full bg-white border-2 border-ink rounded-xl px-3.5 py-2.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-cobalt"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-ink mb-1.5">
                WhatsApp com DDD
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex: (85) 99999-9999"
                className="w-full bg-white border-2 border-ink rounded-xl px-3.5 py-2.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-cobalt"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-ink mb-1.5">
              Descrição da Peça ou Ideia
            </label>
            <textarea
              rows={3}
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Dimensões aproximadas, requisitos mecânicos, se já possui arquivo 3D..."
              className="w-full bg-white border-2 border-ink rounded-xl p-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-cobalt"
            />
          </div>

          {/* Mock Upload */}
          <label className="border-2 border-dashed border-ink/40 rounded-xl p-3 bg-white/50 text-center hover:bg-white transition-colors cursor-pointer flex items-center justify-center gap-2 text-xs font-bold text-ink/80">
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) setFileName(e.target.files[0].name);
              }}
            />
            <UploadCloud className="w-4 h-4 text-cobalt" />
            <span>
              {fileName ? `Anexo: ${fileName}` : 'Anexar arquivo STEP, STL, OBJ ou foto (opcional)'}
            </span>
          </label>

          {/* Submit Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              variant="coral"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>ENVIAR VIA WHATSAPP</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleEmail}
              className="flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span>POR E-MAIL</span>
            </Button>
          </div>

        </form>

      </div>
    </div>
  );
};
