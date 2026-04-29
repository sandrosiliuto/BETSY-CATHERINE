import { Calendar, MapPin, Phone, CheckCircle, Smartphone } from 'lucide-react';

interface LaserSectionProps {
  onBookMen: () => void;
  onBookWomen: () => void;
}

export default function LaserSection({ onBookMen, onBookWomen }: LaserSectionProps) {
  return (
    <section id="laser" className="relative w-full bg-[#0F172A] py-20 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        <div className="text-center md:text-left mb-16 md:flex justify-between items-end border-b border-slate-800 pb-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4 leading-tight italic">
              Láser Diodo
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed uppercase tracking-widest">
              Tecnología avanzada para una piel suave,<br/>sin vello y sin complicaciones.
            </p>
          </div>
          
          <div className="hidden md:flex flex-col gap-2 mt-8 font-mono text-[10px] text-[#38BDF8] min-w-[200px]">
            <div className="flex justify-between border-b border-slate-800 pb-1">
              <span>FECHA ÚNICA:</span>
              <span>2 DE MAYO</span>
            </div>
            <div className="flex justify-between">
              <span>UBICACIÓN:</span>
              <span>ANDRÉS ROJAS</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 mb-16">
          
          {/* Card Woman */}
          <div className="flex-1 space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase">Láser Mujer</h3>
            
            <ul className="text-xs space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-slate-500">✓</span>
                <span>Resultados visibles desde las primeras sesiones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500">✓</span>
                <span>Piel suave y uniforme</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500">✓</span>
                <span>Seguro y eficaz</span>
              </li>
            </ul>
            
            <button 
              onClick={onBookWomen}
              className="mt-4 bg-[#38BDF8] text-slate-900 font-bold py-3 px-6 text-[10px] uppercase tracking-widest rounded-none hover:bg-sky-300 transition-colors w-fit"
            >
              Agenda Mujer
            </button>
          </div>

          {/* Card Man */}
          <div className="flex-1 space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase">Láser Hombre</h3>
            
            <ul className="text-xs space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-slate-500">✓</span>
                <span>Ideal para espalda, pecho, hombros y más</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500">✓</span>
                <span>Piel limpia y sin irritación</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500">✓</span>
                <span>Sesiones rápidas y efectivas</span>
              </li>
            </ul>
            
            <button 
              onClick={onBookMen}
              className="mt-4 bg-[#38BDF8] text-slate-900 font-bold py-3 px-6 text-[10px] uppercase tracking-widest rounded-none hover:bg-sky-300 transition-colors w-fit"
            >
              Agenda Hombre
            </button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center bg-slate-800/50 p-8 border border-slate-700">
             <div className="text-center mb-6">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Cita Previa</p>
                <a href="tel:6799440754" className="text-2xl font-semibold text-[#38BDF8] hover:text-sky-300 transition-colors flex items-center gap-2">
                  <Phone size={20} />
                  679 944 0754
                </a>
             </div>
             
            <div className="md:hidden flex flex-col gap-2 mt-4 font-mono text-[10px] text-white w-full border-t border-slate-700 pt-6">
              <div className="flex justify-between border-b border-slate-700 pb-2">
                <span className="text-slate-400">FECHA:</span>
                <span>2 DE MAYO</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400">LUGAR:</span>
                <span>ANDRÉS ROJAS</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
