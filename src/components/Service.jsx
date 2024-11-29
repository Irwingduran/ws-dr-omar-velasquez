import React from "react";
import { FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";
import { GiStomach, GiLiver, GiHealthNormal } from "react-icons/gi";


const Service = () => {
  return (
    <section className="min-h-screen py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Servicios</h2>
          <p className="text-lg text-gray-600">
            Servicios de alta calidad y atención personalizada para cuidar de tu salud y bienestar.
          </p>
        </div>


{/* Tarjetas de servicios */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
  <ServiceCard 
    icon={<FaStethoscope size={60} className="text-teal-500" />} 
    title="Apendicitis" 
    description="Diagnóstico y tratamiento especializado para apendicitis aguda." 
  />
  <ServiceCard 
    icon={<GiLiver size={60} className="text-teal-500" />} 
    title="Cáncer del Colon" 
    description="Detección y manejo integral del cáncer de colon." 
  />
  <ServiceCard 
    icon={<GiStomach size={60} className="text-teal-500" />} 
    title="Cáncer del Estómago" 
    description="Tratamiento especializado para el cáncer gástrico." 
  />
  <ServiceCard 
    icon={<GiHealthNormal size={60} className="text-teal-500" />} 
    title="Cáncer del Páncreas" 
    description="Atención avanzada para el manejo del cáncer pancreático." 
  />
  <ServiceCard 
    icon={<FaHeartbeat size={60} className="text-teal-500" />} 
    title="Colecistitis Aguda" 
    description="Diagnóstico y tratamiento inmediato para la inflamación de la vesícula biliar." 
  />
  <ServiceCard 
    icon={<FaUserMd size={60} className="text-teal-500" />} 
    title="Coledocolitiasis" 
    description="Manejo médico y quirúrgico de cálculos en el conducto biliar." 
  />
</div>





      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      {/* Parte superior con el ícono */}
      <div className="flex justify-center items-center bg-teal-50 p-8">
        {icon}
      </div>
      {/* Contenido de la tarjeta */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-700 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {/* Efecto decorativo en la parte superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
    </div>
  );
};

export default Service;
