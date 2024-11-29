import React from 'react'
import ImgHome from "../assets/img/JA.jpeg";

const DoctorProfile = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between p-20 bg-white">
          {/* Sección de texto */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl font-medium">¡Bienvenid@!</h3>
            <h1 className="text-4xl font-bold mt-2 mb-4">
              <span className=" px-2 py-1  text-backgroundColor">
             Dr. Julio Alvarado Lezama
              </span>
            </h1>
            <h2 className="text-2xl font-semibold mb-4">
            Cirujano Gastroenterólogo
            </h2>
            <p className="text-gray-600 mb-6">
            Gastroenterología, Cirugía Oncológica Gastrointestinal, Cirugía General y Laparoscopía.            </p>
            <button className="bg-backgroundColor text-white py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-purple-600 transition duration-300">
            Cédula: 4568576
            </button>
          </div>
    
          {/* Sección de imagen */}
          <div className="lg:w-1/2">
            <img
              src={ImgHome} // Sustituye esta URL con tu imagen de médicos
              alt="Doctors"
              className="rounded-lg"
            />
          </div>
        </div>
      );
    }
    
    export default DoctorProfile;