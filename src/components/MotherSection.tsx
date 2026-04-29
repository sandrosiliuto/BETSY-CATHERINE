import { CheckCircle2, ShieldCheck, Droplets, Sparkles, Tag } from 'lucide-react';

interface MotherSectionProps {
  onBook: () => void;
}

export default function MotherSection({ onBook }: MotherSectionProps) {
  return (
    <section id="madres" className="relative w-full bg-[#FFF3F6] overflow-hidden py-16 sm:py-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{background: 'radial-gradient(circle, #fbcfe8 0%, transparent 80%)'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-serif text-5xl sm:text-6xl text-slate-900 mb-4 tracking-tight leading-tight">
            <span className="block text-xl sm:text-2xl text-slate-500 font-sans tracking-widest uppercase mb-2 font-semibold">Bono Promocional</span>
            Día de las Madres
          </h1>
          <div className="inline-block px-3 py-1 border border-rose-300 text-rose-500 text-[10px] uppercase tracking-widest font-semibold w-fit">
            Disponible hasta el 3 de Mayo
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md shadow-xl border border-rose-100 p-8 sm:p-12 lg:p-16 mb-8 rounded-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side: Text & Features */}
            <div>
              <div className="mb-8 space-y-2">
                <h2 className="font-serif italic text-2xl sm:text-3xl text-[#C5A028] tracking-tight">
                  EXCEL THERAPY O₂
                </h2>
                <p className="text-[11px] font-sans uppercase tracking-widest text-slate-500 leading-relaxed max-w-sm">
                  Tratamiento facial antiedad exclusivo y avanzado con última generación en nanocosmética
                </p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-rose-400">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest text-slate-700 uppercase">Ingredientes exclusivos</h3>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">En cosmética y nanocosmética</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-rose-400">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest text-slate-700 uppercase">Fórmula de última generación</h3>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">Refuerza defensas cutáneas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-rose-400">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest text-slate-700 uppercase">TEC-EXOSOME HA COMPLEX</h3>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">Con 7 billones de exosomas por ml.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-rose-400">
                    <Droplets size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest text-slate-700 uppercase">Hidratación profunda</h3>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">Multicapa hasta 20 veces mayor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Pricing & Action */}
            <div className="flex flex-col items-center justify-center p-10 bg-rose-50/50 border-[0.5px] border-rose-200 relative h-full">
              <div className="absolute top-4 right-4 bg-rose-200 text-rose-800 font-bold px-3 py-1 text-xs tracking-widest rounded-none shadow-sm flex items-center gap-1 uppercase">
                <Tag size={12} />
                -25% DTO
              </div>
              
              <div className="text-center mb-8">
                <span className="block text-slate-400 font-sans tracking-widest uppercase text-[10px] mb-2">Germaine de Capuccini</span>
                <div className="text-6xl sm:text-7xl font-serif font-light text-rose-900 tracking-tight">
                  180<span className="text-4xl text-rose-700">€</span>
                </div>
              </div>

              <button 
                onClick={onBook}
                className="w-full max-w-xs mt-4 bg-slate-900 text-white px-8 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-slate-700 transition-colors rounded-none"
              >
                RESERVA AHORA
              </button>

              <div className="mt-8 text-center w-full">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4">*Apto para pieles sensibles, sin perfume.</p>
                <div className="w-2/3 h-px bg-rose-200 mx-auto my-4"></div>
                <p className="font-serif italic text-rose-800 text-lg sm:text-xl">
                  Regala Belleza & Bienestar
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
