import React from "react";
import { Button } from "./ui";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="mx-auto max-w-screen-xl px-3 pt-28 md:pb-[145px] lg:pt-[220px]">
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
        {/* Image Container */}
        <motion.div
          className="overflow-hidden rounded-lg  max-h-[495px] max-w-[586px] transform transition-transform hover:scale-105"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="object-cover w-full h-full"
            src="/img1.png"
            alt="About"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex flex-col items-start gap-6 p-5 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h5 className="text-[22px] font-medium text-secondary">
            {/* Podrías agregar un subtítulo o una cita */}
            Experiencia y dedicación
          </h5>
          <h1 className="text-[32px] font-semibold leading-normal text-[#031432]">
            Un médico dedicado con la misión principal de ayudar
          </h1>
          <p className="max-w-[485px] text-para text-gray-700">
            El Dr. Velásquez Martínez se graduó de la Licenciatura de Médico
            Cirujano y Partero en la Universidad de Monterrey (UDEM). Hizo la
            Especialidad en Cirugía General y Gastroenterológica en la
            Universidad Autónoma de Querétaro (UAQ) y cursó una Alta Especialidad en Endoscopia
            Gastrointestinal en la Universidad Autónoma de México (UNAM).
          </p>
          
        </motion.div>
      </div>
    </div>
  );
}
