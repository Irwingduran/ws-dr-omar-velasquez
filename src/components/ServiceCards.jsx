import React from "react";

const ServiceCard = ({ title, imgSrc, description }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        <img src={imgSrc} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
          Más información
        </button>
      </div>
    </div>
  );
};

export default function ServiceCards() {
  const services = [
    {
      title: "Endoscopia Gastrointestinal",
      imgSrc: "/api/placeholder/400/320",
      description: "Exploración no invasiva para evaluar el sistema digestivo."
    },
    {
      title: "Laparoscopia Digestiva",
      imgSrc: "/api/placeholder/400/320",
      description: "Cirugía de mínima invasión para tratar problemas digestivos."
    },
    {
      title: "Cirugía Digestiva",
      imgSrc: "/api/placeholder/400/320",
      description: "Procedimientos quirúrgicos avanzados para el aparato digestivo."
    },
    {
      title: "Colonoscopia",
      imgSrc: "/api/placeholder/400/320",
      description: "Prueba de diagnóstico para examinar el colon y recto."
    },
    {
      title: "Cirugía Laparoscópica y Digestiva",
      imgSrc: "/api/placeholder/400/320",
      description: "Soluciones quirúrgicas con tecnología avanzada."
    },
    {
      title: "Gastritis",
      imgSrc: "/api/placeholder/400/320",
      description: "Tratamiento especializado para problemas de gastritis."
    }
  ];

  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 pb-[80px] sm:grid-cols-2 lg:grid-cols-3 md:pb-[164px]">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          imgSrc={service.imgSrc}
          description={service.description}
        />
      ))}
    </div>
  );
}