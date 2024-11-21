
import React from "react";
import { Button } from "./ui";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import imgService from "../assets/colonoscopia.jpg";

export default function Services() {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Contenedor principal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 space-y-6"
          >
            <h1 className="text-4xl font-bold text-[#031432] leading-tight">
              Servicios médicos personalizados
            </h1>
            <p className="text-lg text-gray-700">
              Nuestro equipo ofrece atención de alta calidad con soluciones
              innovadoras para satisfacer tus necesidades. Desde diagnósticos
              hasta tratamientos avanzados, estamos aquí para ti.
            </p>
            <div>
            <Button
            title="Reserva una cita"
            Icon={FaWhatsapp}
            className="bg-white text-white px-6 py-3 rounded-full flex items-center gap-2"
          />

            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={imgService}
                alt="Servicios médicos"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

     
    </section>
  );
}
