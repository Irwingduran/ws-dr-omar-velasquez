import React from "react";
import { Button } from "./ui";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#031432] leading-tight">
              Soluciones innovadoras y confiables
            </h2>
            <p className="text-secondary text-lg font-medium">Nuestros Servicios</p>
          </div>
          <p className="text-gray-600 max-w-md">
            Ofrecemos soluciones que mejoran tu experiencia y optimizan tus resultados. Descubre lo que
            podemos hacer por ti y tu negocio.
          </p>
          <Button
            title="Reserva una cita"
            Icon={FaWhatsapp}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2"
          />
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-lg"
        >
          <img
            className="w-full h-full object-cover"
            src="/img3.jpg"
            alt="Servicios"
          />
          <div className="absolute inset-0"></div>
        </motion.div>
      </div>
    </section>
  );
}