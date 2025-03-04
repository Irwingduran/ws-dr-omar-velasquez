import React, { useState, useCallback, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const DoctorReviews = ({ autoPlayInterval = 5000 }) => {
  const reviews = [
    {
      id: 1,
      name: "Sofía Martínez",
      rating: 5,
      text: "El doctor es excepcional. Su atención personalizada y su conocimiento médico me hicieron sentir completamente en confianza durante todo el proceso. Definitivamente recomiendo sus servicios.",
    },
    {
      id: 2,
      name: "Alejandro Gómez",
      rating: 5,
      text: "Excelente experiencia con el doctor. Su profesionalismo y empatía hicieron que mi visita fuera una grata sorpresa. Logró solucionar mi problema de manera eficiente.",
    },
    {
      id: 3,
      name: "Lucía Fernández",
      rating: 5,
      text: "Sin duda, el mejor médico que he tenido. Su enfoque en el paciente y su amplio conocimiento son realmente impresionantes. Estoy muy satisfecha con los resultados y lo recomendaría a cualquiera.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  }, [reviews.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  }, [reviews.length]);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(handleNext, autoPlayInterval);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, handleNext, autoPlayInterval]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleNext, handlePrevious]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      handlePrevious();
    }
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const renderStars = useCallback((rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`text-lg ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
      />
    ));
  }, []);

  return (
    <section className="bg-white py-16 sm:py-8">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 sm:px-4">
        <div className="text-center mb-12 sm:mb-8">
          <h2 className="text-4xl font-bold text-[#031432] sm:text-2xl">
            Testimonios de Nuestros Pacientes
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto sm:text-sm sm:mt-2">
            Escucha las experiencias reales de nuestros pacientes. Nos enorgullece brindar un
            servicio personalizado y de alta calidad.
          </p>
        </div>

        <div
          className="relative bg-white rounded-lg shadow-xl p-8 sm:p-4 sm:text-sm max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Testimonios de pacientes"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center space-y-6 sm:space-y-4"
            >
              <FaQuoteLeft className="text-gray-300 text-3xl sm:text-2xl" aria-hidden="true" />
              <p className="text-gray-600 italic max-w-2xl text-sm sm:text-xs">
                {reviews[currentIndex].text}
              </p>
              <div className="flex items-center space-x-1" aria-label={`${reviews[currentIndex].rating} de 5 estrellas`}>
                {renderStars(reviews[currentIndex].rating)}
              </div>
              <h4 className="text-lg font-semibold text-[#031432] sm:text-base">
                {reviews[currentIndex].name}
              </h4>
            </motion.div>
          </AnimatePresence>

          {/* Improved navigation arrows positioning */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-2 sm:px-0">
            <button
              onClick={handlePrevious}
              className="bg-white/70 rounded-full shadow-md p-3 sm:p-2 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Testimonio anterior"
            >
              <FaChevronLeft className="text-gray-600 text-xl sm:text-base" aria-hidden="true" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/70 rounded-full shadow-md p-3 sm:p-2 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Siguiente testimonio"
            >
              <FaChevronRight className="text-gray-600 text-xl sm:text-base" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4" role="tablist">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                index === currentIndex ? "bg-teal-500" : "bg-gray-300"
              }`}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorReviews;