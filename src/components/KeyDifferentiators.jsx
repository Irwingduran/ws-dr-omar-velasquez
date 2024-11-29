import React from 'react';
import { FaAward, FaMicroscope, FaUserShield, FaHeartbeat } from 'react-icons/fa';

const KeyDifferentiators = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-24">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">¿Por qué elegirnos?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <DifferentiatorCard
          icon={<FaAward size={60} className="text-teal-500 mb-4" />}
          title="Experiencia Probada"
          description="Más de 15 años de experiencia en la práctica médica y en procedimientos avanzados."
        />
        <DifferentiatorCard
          icon={<FaMicroscope size={60} className="text-teal-500 mb-4" />}
          title="Tecnología Avanzada"
          description="Uso de equipo médico de última generación para garantizar diagnósticos precisos."
        />
        <DifferentiatorCard
          icon={<FaUserShield size={60} className="text-teal-500 mb-4" />}
          title="Atención Personalizada"
          description="Cada paciente recibe un tratamiento y seguimiento adaptado a sus necesidades."
        />
        <DifferentiatorCard
          icon={<FaHeartbeat size={60} className="text-teal-500 mb-4" />}
          title="Compromiso con la Salud"
          description="Dedicación total para ofrecer un servicio de calidad y bienestar a los pacientes."
        />
      </div>
    </section>
  );
};

const DifferentiatorCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      {icon}
      <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default KeyDifferentiators;
