import { useState, useEffect } from 'react';
import Header from './components/Header';
import MotherSection from './components/MotherSection';
import LaserSection from './components/LaserSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export type ServiceOptions = 'Excel Therapy O₂' | 'Depilación Láser Mujer' | 'Depilación Láser Hombre';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceOptions>('Excel Therapy O₂');

  const openModal = (service: ServiceOptions) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <MotherSection onBook={() => openModal('Excel Therapy O₂')} />
        <LaserSection onBookMen={() => openModal('Depilación Láser Hombre')} onBookWomen={() => openModal('Depilación Láser Mujer')} />
      </main>
      <Footer />
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialService={selectedService} 
      />
    </div>
  );
}
