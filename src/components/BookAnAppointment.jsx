import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BookAnAppointment() {
  return (
    <div className="mx-auto my-12 max-w-screen-xl px-6 md:my-16">
      <div className="relative flex items-center rounded-[24px] bg-gradient-to-tl from-primary-start to-primary-end text-white py-8 px-6 md:py-10 md:px-12 lg:py-12 lg:px-16 overflow-hidden">
        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-start md:items-center w-full text-left md:text-center space-y-4">
          <h3 className="text-2xl font-bold leading-snug md:text-3xl">
            ¡Agenda tu cita ahora mismo!
          </h3>
          <p className="text-sm md:text-base max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            viverra turpis habitant eu sociis fermentum felis.
          </p>
          <button className="flex items-center gap-3 bg-white text-primary-start rounded-full px-5 py-2 text-sm font-medium shadow-lg hover:scale-105 transition">
            <FaWhatsapp className="text-lg" />
            Agendar una cita
          </button>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
