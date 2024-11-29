import React from 'react'
import imgAbout from "../assets/img/img4.png";

const AboutSection = () => {
    return (
        <section className="bg-gray-100 py-12 px-6 lg:px-24">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
            {/* Imagen del doctor */}
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <img
                src={imgAbout}// Reemplaza con la URL de la imagen del doctor
                alt="Dr. Achiri Goldberg"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            {/* Descripción sobre el doctor */}
            <div className="lg:w-2/3 lg:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre el Dr. Julio Alvarado</h2>
              <p className="text-gray-700 mb-6">
              El Doctor Alvarado cursó la carrera de Médico Cirujano en la Universidad Popular Autónoma del Estado de Puebla (UPAEP),
         realizó la especialidad en Cirugía General. 
              </p>
              <p className="text-gray-700 mb-6">
              Actualmente miembro certificado del Consejo Mexicano de Cirugía General, 
              así como miembro de la Sociedad de Gastroenterología del Estado de Puebla. 
              </p>
              <a href="#contact">
              <button className="bg-backgroundColor text-white py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-purple-600 transition duration-300">
              Contacto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 3.293a1 1 0 011.414 0l3.5 3.5a1 1 0 010 1.414l-3.5 3.5a1 1 0 01-1.414-1.414L14.586 8H6a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            </a>
            </div>
          </div>
        </section>
      );
    }
    
    export default AboutSection;