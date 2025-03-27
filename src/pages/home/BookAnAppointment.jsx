import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BookAnAppointment() {
  return (
    <div className="mx-auto my-12 max-w-screen-xl px-6 md:my-16">
      <div className="relative flex items-center rounded-lg bg-gradient-to-tl from-teal-500 to-teal-400 text-white py-8 px-6 md:py-10 md:px-12 lg:py-12 lg:px-16 overflow-hidden">
        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-start md:items-center w-full text-left md:text-center space-y-4">
          <h3 className="text-2xl font-bold leading-snug md:text-3xl">
            ¡Agenda tu cita ahora mismo!
          </h3>
          <a href="https://api.whatsapp.com/send/?phone=5212224809611&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
          target="_blank">
          <button className="flex items-center gap-3 bg-white text-teal-800 rounded-full px-5 py-2 text-sm font-medium shadow-lg hover:scale-105 transition">
            <FaWhatsapp className="text-lg" />
            Agendar una cita
          </button>
          </a>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
