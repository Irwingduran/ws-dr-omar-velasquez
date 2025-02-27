import React from "react";

const Mockup = ({ imageUrl, title, description, buttonText }) => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Contenido */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-gray-800 mb-5">{title}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>
            <a
              href="https://www.findoctor.com.mx/doctores/bruno-rubi-lopez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-teal-500 text-white hover:bg-teal-600 uppercase px-6 py-3 text-sm font-medium">
                {buttonText}
              </button>
            </a>
         
          </div>

          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={imageUrl} alt="Perfil Médico" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Ejemplo de uso
const App = () => {
  return (
    <Mockup
      imageUrl="/service/mockup.png"
      title="Descubre más sobre mi práctica en Findoctor"
      description="Consulta mi perfil digital en Findoctor para conocer detalles sobre mis servicios, ubicación, horarios y formas de contacto. Programa tu cita en línea de manera rápida y segura."
      buttonText="Visitar mi perfil"
    />
  );
};

export default App;