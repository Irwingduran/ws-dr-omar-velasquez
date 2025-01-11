import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-teal-500 to-teal-400 p-8 text-white  py-14">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-0">
        
        {/* Logo y descripción */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4">Dr. Omar Velásquez Martínez</h2>
          <p className="text-white leading-relaxed">
          Con experiencia y dedicación, para las mejores soluciones médicas confiables para cuidar tu salud.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="mb-4 text-xl font-semibold border-b border-white pb-2">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#services" className="hover:text-primary-light transition-colors">Servicios</a></li>
            <li><a href="#about" className="hover:text-primary-light transition-colors">Sobre Mí</a></li>
            <li><a href="#contact" className="hover:text-primary-light transition-colors">Contacto</a></li>
            <li><a href="#blog" className="hover:text-primary-light transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="mb-4 text-xl font-semibold border-b border-white pb-2">Contacto</h3>
          <ul className="space-y-1 text-white">
            <li>Email: <a href="mailto:drovm@hotmail.com" className="hover:text-primary-light transition-colors">drovm@hotmail.com</a></li>
            <li>Urgencias: <a href="tel:+528180109367" className="hover:text-primary-light transition-colors">+52 8180109367</a></li>
            <li>Citas Centro Medico Toluca: <a href="tel:+527292802874" className="hover:text-primary-light transition-colors">+52 7292802874</a></li>
          </ul>
          
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="mb-4 text-xl font-semibold border-b border-white pb-2">Sígueme</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/EndoscopiaenToluca" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-all">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.tiktok.com/@omar.gastro?_t=8k4h6MdrJ70&_r=1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-all">
              <FaTiktok size={24} />
            </a>
            <a href="https://www.instagram.com/endoscopiaentoluca" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-all">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-14 border-t border-white pt-4 text-center text-white">
        <p>Todos los derechos reservados. <br /> &copy; 2025 <a className="hover:text-yellow-500" href="https://delta-digital.com.mx/">Delta Agency.</a> </p>
      </div>
    </footer>
  );
}
