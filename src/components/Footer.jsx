import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tl from-primary-start to-primary-end p-8 text-white  py-14">
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
            <li><a href="#about" className="hover:text-primary-light transition-colors">Sobre Nosotros</a></li>
            <li><a href="#contact" className="hover:text-primary-light transition-colors">Contacto</a></li>
            <li><a href="#blog" className="hover:text-primary-light transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="mb-4 text-xl font-semibold border-b border-white pb-2">Contacto</h3>
          <ul className="space-y-1 text-white">
            <li>Email: <a href="mailto:contacto@empresa.com" className="hover:text-primary-light transition-colors">contacto@empresa.com</a></li>
            <li>Teléfono: <a href="tel:+521234567890" className="hover:text-primary-light transition-colors">+52 123 456 7890</a></li>
          </ul>
          
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="mb-4 text-xl font-semibold border-b border-white pb-2">Sígueme</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-all">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-all">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-all">
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
