import { Flower2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-40 border-b border-rose-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="text-slate-800">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10C50 10 35 30 35 50C35 70 50 90 50 90C50 90 65 70 65 50C65 30 50 10 50 10Z" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M50 30C50 30 20 40 10 50C0 60 15 80 15 80C15 80 30 70 40 60C50 50 50 30 50 30Z" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M50 30C50 30 80 40 90 50C100 60 85 80 85 80C85 80 70 70 60 60C50 50 50 30 50 30Z" stroke="currentColor" strokeWidth="3" fill="none"/>
              </svg>
            </div>
            <div className="font-semibold text-lg tracking-widest text-slate-700">
              BETSY CATHERINE <span className="text-[10px] font-light block -mt-1 tracking-widest">ESTÉTICA & LÁSER</span>
            </div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-slate-200 mx-2"></div>
          <div className="hidden sm:block italic text-sm text-slate-400 font-serif uppercase tracking-tighter">
            Germane de Capuccini
          </div>
        </div>
        <div className="hidden md:flex text-xs font-semibold tracking-widest text-slate-500 uppercase gap-8">
          <a href="#madres" className="hover:text-slate-800 transition-colors">Día de la Madre</a>
          <a href="#laser" className="hover:text-slate-800 transition-colors">Láser Diodo</a>
        </div>
      </div>
    </header>
  );
}
