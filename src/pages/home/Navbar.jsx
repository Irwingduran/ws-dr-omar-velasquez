import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaHome, FaUser, FaConciergeBell, FaEnvelope } from "react-icons/fa";
import ScrollToHash from "../../utils/ScrollToHash";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white bg-opacity-90 p-4 shadow-md backdrop-blur-lg">
      <ScrollToHash/>
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/logo.jpg"
            alt="Logo Dr. Omar Velásquez Martínez"
            className="h-10 w-10 object-cover rounded-full"
          />
          <h2 className="font-poppins text-lg md:text-[22px] font-semibold tracking-[0.44px] text-teal-500 truncate">
            Dr. Omar Velásquez Martínez
          </h2>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-teal-500 font-medium transition-all"
            >
              <FaHome />
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/#about"
              className="flex items-center gap-2 text-gray-700 hover:text-teal-500 font-medium transition-all"
            >
              <FaUser />
              Conóceme
            </a>
          </li>
          <li>
            <a
              href="/#services"
              className="flex items-center gap-2 text-gray-700 hover:text-teal-500 font-medium transition-all"
            >
              <FaConciergeBell />
              Servicio
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="flex items-center gap-2 text-gray-700 hover:text-teal-500 font-medium transition-all"
            >
              <FaEnvelope />
              Contacto
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=5218180109367&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
              className="px-4 py-2 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 transition-all"
              target="_blank"
            >
              Agendar cita
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-black transition-transform hover:scale-110"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <IoMdClose /> : <HiMiniBars3BottomRight />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 md:hidden">
          <div
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-black hover:scale-110 transition-transform"
                aria-label="Cerrar menú"
              >
                <IoMdClose />
              </button>
            </div>
            <ul className="flex flex-col p-4 gap-6 bg-white">
              <li>
                <a
                  href="/"
                  className="flex items-center gap-3 text-gray-700 hover:text-teal-500 font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <FaHome className="text-xl" />
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="flex items-center gap-3 text-gray-700 hover:text-teal-500 font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <FaUser className="text-xl" />
                  Conóceme
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="flex items-center gap-3 text-gray-700 hover:text-teal-500 font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <FaConciergeBell className="text-xl" />
                  Servicio
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="flex items-center gap-3 text-gray-700 hover:text-teal-500 font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <FaEnvelope className="text-xl" />
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5218180109367&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
                  className="px-4 py-2 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 transition-all"
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                >
                  Agendar cita
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
