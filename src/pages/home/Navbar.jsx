import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaHome, FaUser, FaConciergeBell, FaEnvelope } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white bg-opacity-90 p-3 shadow-md backdrop-blur-lg px-4 py-6">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img
            src="/logo.jpg"
            alt="Logo Dr. Omar Velásquez Martínez"
            className="h-10 w-10 object-cover rounded-full"
          />
          <h2 className="font-poppins text-lg md:text-[22px] font-semibold tracking-[0.44px] text-secondary truncate">
            Dr. Omar Velásquez Martínez
          </h2>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-10 md:flex">
          {["Inicio", "Conóceme", "Servicio", "Contacto"].map((item, index) => (
            <li key={index} className="group relative">
              <a
                className="flex items-center gap-2 text-para opacity-80 transition-all duration-200 hover:text-primary-start hover:opacity-100"
                href="#"
              >
                {index === 0 && <FaHome />}
                {index === 1 && <FaUser />}
                {index === 2 && <FaConciergeBell />}
                {index === 3 && <FaEnvelope />}
                {item}
              </a>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-start transition-all duration-300 group-hover:w-full"></div>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-primary-end transition-transform hover:scale-110"
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
                className="text-3xl text-primary-end hover:scale-110 transition-transform"
                aria-label="Cerrar menú"
              >
                <IoMdClose />
              </button>
            </div>
            <ul className="flex flex-col p-4 gap-6 bg-white">
              {["Inicio", "Conóceme", "Servicio", "Contacto"].map((item, index) => (
                <li key={index}>
                  <a
                    className="flex items-center gap-3 text-para opacity-80 transition-all duration-200 hover:text-primary-start hover:opacity-100 py-2"
                    href="#"
                    onClick={() => setIsOpen(false)}
                  >
                    {index === 0 && <FaHome className="text-xl" />}
                    {index === 1 && <FaUser className="text-xl" />}
                    {index === 2 && <FaConciergeBell className="text-xl" />}
                    {index === 3 && <FaEnvelope className="text-xl" />}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
