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
            href="https://www.google.com.mx/maps/place/Dr.+Omar+Velasquez+Martinez+-+Cirujano+Digestivo+y+Endoscopista+Gastrointestinal+en+Toluca/@19.2548485,-99.6179717,17z/data=!4m15!1m8!3m7!1s0x85cd8b040a61fb93:0x662ccaf49f23bbe1!2sDr.+Omar+Velasquez+Martinez+-+Cirujano+Digestivo+y+Endoscopista+Gastrointestinal+en+Toluca!8m2!3d19.2548485!4d-99.6153968!10e1!16s%2Fg%2F11whpjmtjd!3m5!1s0x85cd8b040a61fb93:0x662ccaf49f23bbe1!8m2!3d19.2548485!4d-99.6153968!16s%2Fg%2F11whpjmtjd?hl=es&entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
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