import React from "react";
import { motion } from "framer-motion";

const DoctorArticles = () => {
  const articles = [
    {
      title: "Los Avances en Cirugía Laparoscópica",
      image: "/img/article2.jpg",
      description:
        "Explora cómo la tecnología está revolucionando los procedimientos quirúrgicos mínimamente invasivos.",
    },
    {
      title: "Entrevista al Dr. Hernández: Experto en Gastroenterología",
      image: "/img/article2.jpg",
      description:
        "Conoce de primera mano las últimas tendencias y técnicas en el diagnóstico y tratamiento de enfermedades digestivas.",
    },
    {
      title: "5 Consejos para una Colonoscopia Exitosa",
      image: "/img/article2.jpg",
      description:
        "Sigue estos pasos clave para prepararte adecuadamente y tener una experiencia tranquila y sin complicaciones.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Título y subtítulo */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#031432]">Artículos</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Mantente informado con los últimos avances médicos, consejos y
            entrevistas exclusivas para mejorar tu salud y bienestar.
          </p>
        </div>

        {/* Grid de artículos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl flex flex-col overflow-hidden"
            >
              {/* Imagen */}
              <div className="flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Contenido textual */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#031432] mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 flex-grow">{article.description}</p>
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-md hover:bg-teal-700 transition-colors">
                  Leer más
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorArticles;
