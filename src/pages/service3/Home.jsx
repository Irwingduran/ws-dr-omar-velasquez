import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { FaCheckCircle, FaQuestionCircle, FaStar, FaHeartbeat, FaUserMd } from "react-icons/fa";

const ServiceDetailsAlternative = () => {
  const service = {
    title: "Colonoscopia de Alta Calidad",
    description:
      "Realizamos colonoscopias con tecnología avanzada y un enfoque en la comodidad y seguridad del paciente. Descubre la importancia de este procedimiento para la prevención y detección temprana de enfermedades.",
    features: [
      "Tecnología de última generación",
      "Equipo médico especializado",
      "Procedimiento seguro y eficaz",
      "Resultados precisos y confiables",
    ],
    benefits: [
      "Detección temprana de cáncer de colon",
      "Prevención de enfermedades digestivas",
      "Procedimiento ambulatorio y rápido",
      "Atención personalizada y humana",
    ],
    faqs: [
      {
        question: "¿Qué es una colonoscopia?",
        answer: "Es un procedimiento médico que permite visualizar el interior del colon y el recto para detectar anomalías como pólipos, inflamaciones o cáncer.",
      },
      {
        question: "¿Necesito prepararme para una colonoscopia?",
        answer: "Sí, es necesario seguir una dieta especial y un protocolo de limpieza intestinal antes del procedimiento. Te proporcionaremos instrucciones detalladas.",
      },
    ],
  };

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  // URLs de los videos de Facebook
  const videos = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F5437299019666969%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1049449072611358%2F&show_text=false&width=267&t=0",
   
  ];

  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-r from-teal-500 to-teal-300 text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold">{service.title}</h2>
            <p className="text-xl text-blue-100">{service.description}</p>
            <div className="flex space-x-4">
              <FaHeartbeat className="text-4xl text-white" />
              <FaUserMd className="text-4xl text-white" />
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto">
            <Slider {...settings}>
              {videos.map((video, index) => (
                <div key={index} className="relative pb-[133.33%] h-0 overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    src={video}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <h3 className="text-2xl font-bold text-black border-b-2 border-teal-500 pb-2">Características</h3>
          <ul className="space-y-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg hover:shadow-md transition-shadow">
                <FaCheckCircle className="text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1 space-y-6">
          <h3 className="text-2xl font-bold text-black border-b-2 border-teal-500 pb-2">Beneficios</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-teal-500">
                <FaStar className="text-yellow-500 mb-2" />
                <p className="text-gray-600 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-1 space-y-6">
          <h3 className="text-2xl font-bold text-black border-b-2 border-teal-500 pb-2">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <h4 className="flex items-center text-lg font-semibold text-black mb-2">
                  <FaQuestionCircle className="mr-2 text-teal-500" />
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-teal-500 mb-4">¡Agenda tu cita hoy mismo!</h3>
          <p className="text-xl text-teal-500 mb-8">No esperes más, tu salud es lo más importante.</p>
          <a href="https://api.whatsapp.com/send/?phone=5212224809611&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0" className="inline-block bg-teal-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-teal-300 transition-colors">
            Agendar una cita
          </a>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <ServiceDetailsAlternative />
      <Footer />
    </div>
  );
};

export default Home;
