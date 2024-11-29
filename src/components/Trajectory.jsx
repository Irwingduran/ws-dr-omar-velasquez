import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Trajectory = () => {
  return (
    <section className="min-h-screen py-16 px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Trayectoria</h2>
          <p className="text-lg text-gray-600">
            El Dr. Julio Alvarado es un especialista reconocido por su
            amplia experiencia y dedicación a sus pacientes. Con un enfoque en
            prácticas modernas y cuidado personalizado, ha contribuido a la
            medicina con logros y actualizaciones constantes.
          </p>
        </div>

        {/* Experiencia */}
        <div className="mb-12">
  <h3 className="text-2xl font-bold text-teal-600 mb-6">Experiencia</h3>
  <div className="relative">
    {/* Línea de tiempo */}
    <div className="absolute w-1 bg-teal-500 h-full left-8 top-0"></div>
    {trajectoryData.map((item, index) => (
      <div key={index} className="mb-10 flex items-start relative">
        {/* Icono */}
        <div className="w-16 h-16 flex-shrink-0 bg-teal-500 text-white rounded-full flex items-center justify-center">
          {item.icon}
        </div>
        {/* Contenido */}
        <div className="ml-6 p-4 bg-white shadow-md rounded-lg w-full">
          <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
        {/* Conector de la línea */}
        {index !== trajectoryData.length - 1 && (
          <div className="absolute w-1 h-full bg-teal-500 left-8 top-16"></div>
        )}
      </div>
    ))}
  </div>
</div>


        {/* Cursos */}
        <div className="mb-12">
  <h3 className="text-2xl font-bold text-teal-600 mb-6">
    Constante actualización médica
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {courses.map((course, index) => (
      <div
        key={index}
        className="flex items-start p-4 bg-white shadow-md rounded-lg"
      >
        <div className="w-10 h-10 flex-shrink-0 bg-teal-500 text-white rounded-full flex items-center justify-center mr-4">
          <MdHealthAndSafety size={20} />
        </div>
        <div>
          <p className="text-sm text-gray-700">{course}</p>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Ponencias */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-teal-600 mb-6">Ponencias</h3>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800">Ponencia:</h4>
            <p className="text-gray-600">“Cáncer de Páncreas”.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrajectoryCard = ({ icon, title, description }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex items-start">
      <div className="w-10 h-10 flex-shrink-0 bg-teal-500 text-white rounded-full flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const trajectoryData = [
  {
    icon: <RiMicroscopeLine size={24} />,
    title: "Sociedad de Gastroenterología del Estado de Puebla",
    description: "2006-2012",
  },
  {
    icon: <MdHealthAndSafety size={24} />,
    title: "Asociación Mexicana de Gastroenterología",
    description: "2000-20XX",
  },
  {
    icon: <FaHeartbeat size={24} />,
    title: "Certificado por el Consejo Mexicano de Cirugía General",
    description: "2000-20XX",
  },
  {
    icon: <MdHealthAndSafety size={24} />,
    title: "Recertificación por el Consejo Mexicano de Cirugía General",
    description: "2000-20XX",
  },
  {
    icon: <RiMicroscopeLine size={24} />,
    title: "Médico adscrito en el Departamento de Cirugía Gastrointestinal",
    description: "2000-20XX",
  },
];

const courses = [
  "Curso Internacional de Actualización en Cirugía General.",
  "Curso Internacional de Hígado, Páncreas y Vías Biliares.",
  "Curso de actualización en Colón, recto y ano.",
  "Diplomado de Actualización Médica. La Salle 2005.",
  "Curso: “Nudos y Suturas en Cirugía Endoscópica”.",
];

export default Trajectory;
