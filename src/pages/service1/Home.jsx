import React from "react";
import Navbar from "../home/Navbar";
import { FaCheckCircle, FaQuestionCircle, FaStar, FaHeartbeat, FaUserMd } from "react-icons/fa";
import Footer from "../home/Footer";

const ServiceDetailsAlternative = ({ service = {} }) => {
  const {
    title = "Título no disponible",
    description = "Descripción no disponible.",
    features = [],
    benefits = [],
    faqs = [],
    testimonials = [],
    image = "https://via.placeholder.com/600x400",
  } = service;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-tl from-primary-start to-primary-end text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold">{title}</h2>
            <p className="text-xl text-blue-100">{description}</p>
            <div className="flex space-x-4">
              <FaHeartbeat className="text-4xl text-white" />
              <FaUserMd className="text-4xl text-white" />
            </div>
          </div>
          <div>
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {/* Features Column */}
        <div className="md:col-span-1 space-y-6">
          <h3 className="text-2xl font-bold text-black border-b-2 border-primary-start pb-2">
            Características
          </h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg hover:shadow-md transition-shadow"
              >
                <FaCheckCircle className="text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits Column */}
        <div className="md:col-span-1 space-y-6">
          <h3 className="text-2xl font-bold text-black border-b-2 border-primary-start pb-2">
            Beneficios
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
              >
                <FaStar className="text-yellow-500 mb-2" />
                <p className="text-gray-600 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Column */}
        <div className="md:col-span-1 space-y-6">
          <h3 className="text-2xl font-bold text-black border-b-2 border-primary-start pb-2">
            Preguntas Frecuentes
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-100 p-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h4 className="flex items-center text-lg font-semibold text-black mb-2">
                  <FaQuestionCircle className="mr-2 text-primary-start" />
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            Testimonios de Nuestros Pacientes
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      {testimonial.author}
                    </h4>
                    <div className="flex space-x-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-lg ${
                            i < testimonial.rating 
                            ? "text-yellow-500" 
                            : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const service = {
    title: "Consulta Médica Personalizada",
    description:
      "Nuestra consulta médica se centra en brindar una atención personalizada, adaptada a tus necesidades individuales.",
    features: [
      "Evaluaciones médicas detalladas",
      "Seguimiento continuo del paciente",
      "Diagnóstico preciso y profesional",
    ],
    benefits: [
      "Mejor calidad de vida",
      "Atención médica más accesible",
      "Soluciones adaptadas",
    ],
    faqs: [
      {
        question: "¿Qué incluye la consulta médica?",
        answer: "Incluye una revisión completa y un plan de tratamiento personalizado.",
      },
      {
        question: "¿Necesito agendar cita previa?",
        answer: "Sí, recomendamos agendar con anticipación para garantizar disponibilidad.",
      },
    ],
    testimonials: [
      {
        text: "¡Un servicio excelente! Me sentí escuchado y atendido en todo momento.",
        author: "Carlos Rodríguez",
        rating: 5,
      },
      {
        text: "El doctor fue muy amable y profesional. Totalmente recomendado.",
        author: "María López",
        rating: 5,
      },
    ],
    image: "https://cdn.findoctor.com.co/media/11816/medium_Dise%C3%B1o_sin_t%C3%ADtulo__7_.png",
  };

  return (
    <div>
      <Navbar />
      <ServiceDetailsAlternative service={service} />
      <Footer/>
    </div>
  );
};

export default Home;
