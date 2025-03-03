import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="mx-auto my-12 max-w-screen-xl px-6 md:my-16">
      <div className="relative bg-gradient-to-tl from-teal-500 to-teal-400 text-white py-12 px-6 rounded-lg shadow-xl overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>

        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Texto */}
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            ¿Te atendimos bien? ¡Déjanos tu comentario en Google!
            </h2>
            <p className="mt-2 text-lg">
            Tu opinión es muy valiosa para nosotros y ayuda a que más personas conozcan nuestros servicios.

</p>
          </div>

          {/* Botón */}
          <a
            href="https://maps.google.com/?q=19.2554448,-99.6143056"
            target="_blank"
          >
            <button className="flex items-center bg-white text-black font-semibold text-lg py-3 px-8 rounded-full shadow-md  transition-transform transform hover:scale-105">
             
              Dejar un comentario
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