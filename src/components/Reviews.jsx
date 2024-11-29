import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewsData = [
    {
      name: "Juan Pérez",
      review: "El Dr. Alvarado es un profesional excelente. Su atención fue inmejorable y siempre se mostró atento a mis necesidades. Altamente recomendado.",
      date: "Marzo 2024",
    },
    {
      name: "Ana López",
      review: "Recibí un trato muy humano y profesional por parte del Dr. Alvarado. Me ayudó mucho en mi proceso de recuperación.",
      date: "Febrero 2024",
    },
    {
      name: "Carlos Méndez",
      review: "Sin duda, un experto en su campo. Su conocimiento y trato al paciente son impecables.",
      date: "Enero 2024",
    },
    // Añadir más reviews si es necesario
  ];

  const handlePrev = () => {
    setCurrentReview((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Opiniones de Pacientes</h2>
        <div className="relative bg-white shadow-lg rounded-2xl p-10">
          <FaQuoteLeft className="text-teal-400 text-4xl mb-4" />
          <p className="text-lg italic text-gray-700 mb-6">
            "{reviewsData[currentReview].review}"
          </p>
          <h4 className="text-2xl font-semibold text-teal-600">
            {reviewsData[currentReview].name}
          </h4>
          <p className="text-sm text-gray-500">{reviewsData[currentReview].date}</p>

          {/* Botones de navegación */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              className="bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition duration-200"
            >
              &#8592; Anterior
            </button>
            <button
              onClick={handleNext}
              className="bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition duration-200"
            >
              Siguiente &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
