import React from 'react';
import { motion } from 'framer-motion';

const DoctorArticles = () => {
  const articles = [
    {
      title: 'Los Avances en Cirugía Laparoscópica',
      image: '/article-image-1.jpg',
      description: 'Explora cómo la tecnología está revolucionando los procedimientos quirúrgicos mínimamente invasivos.'
    },
    {
      title: 'Entrevista al Dr. Hernández: Experto en Gastroenterología',
      image: '/article-image-2.jpg',
      description: 'Conoce de primera mano las últimas tendencias y técnicas en el diagnóstico y tratamiento de enfermedades digestivas.'
    },
    {
      title: '5 Consejos para una Colonoscopia Exitosa',
      image: '/article-image-3.jpg',
      description: 'Sigue estos pasos clave para prepararte adecuadamente y tener una experiencia tranquila y sin complicaciones.'
    }
  ];

  return (
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
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#031432] mb-2">{article.title}</h3>
            <p className="text-gray-600">{article.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Leer más
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DoctorArticles;