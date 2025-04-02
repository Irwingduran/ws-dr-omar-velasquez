
import React from "react";
import { Button } from "./ui";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import imgService from "../../assets/colonoscopia.jpg";

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
    Servicios especializados en salud digestiva
  </h1>
  <p className="text-lg text-gray-700">
    Con una atención médica integral y personalizada en cirugía digestiva y endoscopía gastrointestinal. Desde diagnósticos hasta tratamientos avanzados.
  </p>
  <ul className="text-lg text-gray-700 space-y-2">
    <li>✔ Cirugía laparoscópica y mínimamente invasiva</li>
    <li>✔ Colonoscopía y endoscopía digestiva alta</li>
    <li>✔ Diagnóstico y tratamiento de enfermedades gastrointestinales</li>
  </ul>
  <a href="https://wa.me/5218180109367?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta"
  target="_blank">
    <Button
      title="Reserva una cita"
      Icon={FaWhatsapp}
      className="bg-gradient-to-r from-teal-500 to-teal-400 text-white px-8 py-3 rounded-full flex items-center gap-2"
    />
  </a>
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
