import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const DoctorReviews = () => {
  const reviews = [
    {
      name: 'Sofía Martínez',
      rating: 5,
      text: 'El doctor es excepcional. Su atención personalizada y su conocimiento médico me hicieron sentir completamente en confianza durante todo el proceso. Definitivamente recomiendo sus servicios.'
    },
    {
      name: 'Alejandro Gómez',
      rating: 4,
      text: 'Excelente experiencia con el doctor. Su profesionalismo y empatía hicieron que mi visita fuera una grata sorpresa. Logró solucionar mi problema de manera eficiente.'
    },
    {
      name: 'Lucía Fernández',
      rating: 5,
      text: 'Sin duda, el mejor médico que he tenido. Su enfoque en el paciente y su amplio conocimiento son realmente impresionantes. Estoy muy satisfecha con los resultados y lo recomendaría a cualquiera.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8  my-32 max-w-3xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <FaQuoteLeft className="text-gray-400 text-3xl" />
          <h3 className="text-2xl font-bold text-[#031432]">Lo que dicen nuestros pacientes</h3>
        </div>
        <div className="relative w-full">
          <AnimatePresence>
            {reviews.map((review, index) => (
              index === currentIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center space-x-1 text-yellow-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaQuoteLeft key={i} className="text-lg" />
                      ))}
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                    <h4 className="text-lg font-medium text-[#031432]">{review.name}</h4>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
          <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
            <button
              onClick={handlePrevious}
              className="bg-white rounded-full shadow-md p-2 hover:bg-gray-200 transition-colors"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white rounded-full shadow-md p-2 hover:bg-gray-200 transition-colors"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorReviews;
