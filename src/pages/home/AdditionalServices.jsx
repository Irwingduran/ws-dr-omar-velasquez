import React from "react";

export default function AdditionalServices() {
    const services = [
        "Endoscopia Gastrointestinal",
        "Laparoscopia Digestiva",
        "Cirugía Digestiva",
        "Colonoscopia",
        "Colangiografía Endoscópica",
        "Cirugía Laparoscópica y Digestiva",
        "Gastritis",
        "Esofagitis",
        "Enfermedad por reflujo",
        "Hígado graso",
        "Síndrome de Intestino Irritable (S.I.I)",
        "Enfermedad Diverticular",
       
      ];
      

  return (
    <section className="bg-white ">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#031432]">Otros Servicios</h2>
          <p className="text-gray-600 mt-4">
            Además de nuestros servicios especializados, ofrecemos una variedad de opciones para atender tus necesidades de salud.
          </p>
        </div>

        {/* Lista de servicios */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
            >
              <span className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
              <p className="text-gray-700">{service}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
