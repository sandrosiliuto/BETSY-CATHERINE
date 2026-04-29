export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-20 sm:h-12 px-6 lg:px-10 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-400 uppercase tracking-widest mt-auto">
      <div className="mt-4 sm:mt-0">&copy; {currentYear} Betsy Catherine Estética & Láser</div>
      <div className="flex gap-4 sm:gap-8 mb-4 sm:mb-0">
        <span className="cursor-pointer hover:text-slate-800 transition-colors">Política de Privacidad</span>
        <span className="hidden sm:inline">|</span>
        <span>Andrés Rojas Peluqueros</span>
      </div>
    </footer>
  );
}
