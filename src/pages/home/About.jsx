import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function About() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-screen-lg mx-auto px-6 lg:px-8 relative z-10">
        {/* Contenedor principal */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12">
          {/* Carrusel de videos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex-1 max-w-md"
          >
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-full rounded-lg "
            >
              <SwiperSlide>
                <div className="relative w-full flex justify-center items-center">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F327955279543193%2F&show_text=false&width=267&t=0"
                    className="w-[267px] h-[476px] rounded-lg"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full flex justify-center items-center">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1717911501943881%2F&show_text=false&width=267&t=0"
                    className="w-[267px] h-[476px] rounded-lg"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Efectos de fondo */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-300 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>

          {/* Contenido textual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-lg text-center md:text-left space-y-6"
          >
            <h2 className="text-4xl font-bold text-[#031432] leading-tight">
              Conoce al Dr. Omar Velásquez Martínez
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              El Dr. Velásquez Martínez se graduó de la Licenciatura de Médico Cirujano y Partero en la
              Universidad de Monterrey (UDEM). Hizo la Especialidad en Cirugía General y Gastroenterológica en
              la Universidad Autónoma de Querétaro (UAQ) y cursó una Alta Especialidad en Endoscopía
              Gastrointestinal en la Universidad Autónoma de México (UNAM).
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sección de certificaciones */}
      <div className="mt-16 bg-gray-50 py-12">
        <div className="max-w-screen-lg mx-auto px-6 lg:px-8">
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
              <FaCheckCircle className="text-teal-500 text-3xl" />
              <p className="text-gray-700 text-lg">
                Especialista en Cirugía Laparoscópica y Endoscópica
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
              <FaCheckCircle className="text-teal-500 text-3xl" />
              <p className="text-gray-700 text-lg">
                Certificado por el Consejo Mexicano de Gastroenterología
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
              <FaCheckCircle className="text-teal-500 text-3xl" />
              <p className="text-gray-700 text-lg">
                Certificado por el Consejo Mexicano de Cirugía General
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
