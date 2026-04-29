import { useState, useEffect, FormEvent } from 'react';
import { X, Calendar as CalendarIcon, Clock, MessageSquare, User, Phone, Check } from 'lucide-react';
import { ServiceOptions } from '../App';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService: ServiceOptions;
}

const WHATSAPP_NUMBER = '346799440754';

export default function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState<ServiceOptions>(initialService);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [dateWarning, setDateWarning] = useState('');

  // Reset form when modal opens with new initial service
  useEffect(() => {
    if (isOpen) {
      setService(initialService);
      // Pre-fill date based on service if applicable
      if (initialService.includes('Láser')) {
        const currentYear = new Date().getFullYear();
        setDate(`${currentYear}-05-02`); // defaults to May 2nd
      } else {
        setDate('');
      }
      setDateWarning('');
    }
  }, [isOpen, initialService]);

  // Validate dates
  useEffect(() => {
    if (!date) {
      setDateWarning('');
      return;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // For Excel Therapy (Mother's Day): valid from today until May 3
    if (service === 'Excel Therapy O₂') {
      const mayThird = new Date(today.getFullYear(), 4, 3); // Month is 0-indexed (4 = May)
      if (selectedDate < today) {
        setDateWarning('La fecha no puede ser en el pasado.');
      } else if (selectedDate > mayThird) {
        setDateWarning('El bono promocional solo es válido hasta el 3 de Mayo.');
      } else {
        setDateWarning('');
      }
    } 
    // For Laser: strictly May 2
    else if (service.includes('Láser')) {
      const maySecond = new Date(today.getFullYear(), 4, 2);
      if (selectedDate.getTime() !== maySecond.getTime()) {
        setDateWarning('La jornada de láser está programada exclusivamente para el 2 de Mayo.');
      } else {
        setDateWarning('');
      }
    }
  }, [date, service]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Simple block if invalid date
    if (dateWarning) return;

    const formattedMessage = `*Nueva solicitud de cita*%0A%0A*Servicio:* ${service}%0A*Nombre:* ${name}%0A*Fecha:* ${date}%0A*Hora:* ${time}%0A*Teléfono:* ${phone || 'No especificado'}${message ? `%0A*Mensaje:* ${message}` : ''}`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${formattedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] border border-slate-200">
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
          <div>
            <h3 className="font-serif italic text-2xl text-slate-900">Agenda tu Cita</h3>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Reserva rápida vía WhatsApp</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 transition-colors text-slate-500 rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="flex-grow overflow-y-auto px-6 py-6 custom-scrollbar">
          <form id="booking-form" onSubmit={handleSubmit} className="space-y-6">
            
            {/* Service Selection */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">1. Selecciona el Servicio</label>
              <div className="grid gap-3">
                
                {['Excel Therapy O₂', 'Depilación Láser Mujer', 'Depilación Láser Hombre'].map((opt) => (
                  <label 
                    key={opt}
                    className={`flex items-center p-3 sm:p-4 cursor-pointer transition-all border ${
                      service === opt 
                        ? (opt.includes('O₂') ? 'border-rose-400 bg-rose-50/50' : 'border-sky-400 bg-sky-50/50') 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="service" 
                      value={opt} 
                      checked={service === opt}
                      onChange={(e) => setService(e.target.value as ServiceOptions)}
                      className="sr-only" 
                    />
                    <div className={`w-4 h-4 border flex items-center justify-center mr-3 flex-shrink-0 rounded-full ${
                      service === opt 
                        ? (opt.includes('O₂') ? 'border-rose-500 bg-rose-500' : 'border-sky-500 bg-sky-500')
                        : 'border-slate-300'
                    }`}>
                      {service === opt && <Check size={10} className="text-white" />}
                    </div>
                    <span className={`font-medium text-sm ${service === opt ? 'text-slate-900' : 'text-slate-600'}`}>{opt}</span>
                    {opt === 'Excel Therapy O₂' && <span className="ml-auto text-xs font-serif text-[#C5A028] hidden sm:block">180€</span>}
                  </label>
                ))}

              </div>
            </div>

            <div className="h-px bg-gray-100 w-full" />

            {/* Date & Time */}
            <div className="space-y-4">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">2. Fecha y Hora</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Date Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <CalendarIcon size={18} />
                  </div>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`block w-full pl-10 pr-3 py-3 border ${dateWarning ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200'} focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all text-slate-700 text-sm`}
                  />
                  {dateWarning && (
                    <p className="mt-2 text-[10px] text-rose-500 uppercase tracking-widest font-semibold">{dateWarning}</p>
                  )}
                  {service.includes('Láser') && !dateWarning && (
                     <p className="mt-2 text-[10px] text-sky-600 uppercase tracking-widest font-semibold">Preconfigurado: 2 de Mayo</p>
                  )}
                </div>

                {/* Time Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Clock size={16} />
                  </div>
                  <select
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all text-slate-700 text-sm appearance-none bg-white"
                  >
                    <option value="" disabled>Selecciona Franja</option>
                    <option value="10:00 - 11:00">10:00 - 11:00</option>
                    <option value="11:00 - 12:00">11:00 - 12:00</option>
                    <option value="12:00 - 13:00">12:00 - 13:00</option>
                    <option value="13:00 - 14:00">13:00 - 14:00</option>
                    <option value="16:00 - 17:00">16:00 - 17:00</option>
                    <option value="17:00 - 18:00">17:00 - 18:00</option>
                    <option value="18:00 - 19:00">18:00 - 19:00</option>
                    <option value="19:00 - 20:00">19:00 - 20:00</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-100 w-full" />

            {/* Personal Details */}
            <div className="space-y-4">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">3. Tus Datos</label>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 top-3 pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all text-slate-700 text-sm"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 top-3 pointer-events-none text-gray-400">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  placeholder="Teléfono (Opcional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all text-slate-700 text-sm"
                />
              </div>

              <div className="relative">
                <div className="absolute left-0 pl-3 top-3 pointer-events-none text-gray-400">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  placeholder="Mensaje adicional (Opcional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={2}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all text-slate-700 text-sm resize-none"
                />
              </div>
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex flex-col gap-3 sticky bottom-0 z-10">
          <p className="text-[10px] uppercase tracking-widest text-center text-slate-500 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
            Serás redirigido a WhatsApp
          </p>
          <button
            form="booking-form"
            type="submit"
            disabled={!!dateWarning}
            className={`w-full py-4 text-xs tracking-widest uppercase font-semibold text-slate-900 transition-all flex justify-center items-center gap-2 ${
              dateWarning 
                ? 'bg-slate-200 cursor-not-allowed text-slate-400' 
                : 'bg-[#25D366] hover:bg-[#20bd5a]'
            }`}
          >
            Enviar solicitud
          </button>
        </div>

      </div>
    </div>
  );
}
