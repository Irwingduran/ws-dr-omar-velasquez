import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import imgAbout from "../assets/img1.png";

export default function About() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Contenedor principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Imagen destacada */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
              <img
                src={imgAbout}
                alt="Doctor Velásquez Martínez"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-300 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>

          {/* Contenido textual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1 md:order-2"
          >
            <h2 className="text-4xl font-bold text-[#031432] leading-tight">
              Conoce al Dr. Velásquez Martínez
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              El Dr. Velásquez Martínez se graduó de la Licenciatura de Médico Cirujano y Partero en la
              Universidad de Monterrey (UDEM). Hizo la Especialidad en Cirugía General y Gastroenterológica en
              la Universidad Autónoma de Querétaro (UAQ) y cursó una Alta Especialidad en Endoscopia
              Gastrointestinal en la Universidad Autónoma de México (UNAM).
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sección de certificaciones */}
      <div className="mt-16 bg-gray-50 py-12">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-[#031432] mb-8">
            Certificaciones y Experiencia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Punto 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center space-x-4 bg-white rounded-lg shadow-lg p-6"
            >
              <FaCheckCircle className="text-green-500 text-3xl" />
              <p className="text-gray-700 text-lg">
                Especialista en Cirugía Laparoscópica y Endoscópica.
              </p>
            </motion.div>

            {/* Punto 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center space-x-4 bg-white rounded-lg shadow-lg p-6"
            >
              <FaCheckCircle className="text-green-500 text-3xl" />
              <p className="text-gray-700 text-lg">
                Certificado por el Consejo Mexicano de Gastroenterología en Endoscopia Gastrointestinal.
              </p>
            </motion.div>

            {/* Punto 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center space-x-4 bg-white rounded-lg shadow-lg p-6"
            >
              <FaCheckCircle className="text-green-500 text-3xl" />
              <p className="text-gray-700 text-lg">
                Certificado por el Consejo Mexicano de Cirugía General.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
