import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, imgSrc, description, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
        <div className="h-40 bg-gray-100 flex items-center justify-center">
          <img src={imgSrc} alt={title} className="w-full h-full object-contain" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-md transition-colors duration-300">
            Más información
          </button>
        </div>
      </div>
    </Link>
  );
};

export default function ServiceCards() {
  const services = [
    {
      title: "Endoscopía Gastrointestinal",
      imgSrc: "img/service1.jpeg",
      description: "Exploración no invasiva para evaluar el sistema digestivo.",
      link: "/Service1",
    },
    {
      title: "Laparoscopia Digestiva",
      imgSrc: "img/service3.png",
      description: "Cirugía de mínima invasión para tratar problemas digestivos.",
      link: "/Service2",
    },
    {
      title: "Colonoscopía",
      imgSrc: "img/service4.jpeg",
      description: "Prueba de diagnóstico para examinar el colon y recto.",
      link: "/Service3",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#031432]">Servicios</h2>
        <p className="text-gray-600 mt-4">
          Descubre nuestras especialidades y cómo podemos ayudarte a mejorar tu salud.
          <br /> Ofrecemos soluciones personalizadas y atención de alta calidad.
        </p>
      </div>
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            imgSrc={service.imgSrc}
            description={service.description}
            link={service.link} // Pasa la ruta al componente
          />
        ))}
      </div>
    </section>
  );
}
