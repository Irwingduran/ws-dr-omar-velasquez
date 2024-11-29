import React from 'react';

const AppointmentBanner = () => {
  return (
    <div className="w-full">
      {/* Banner principal */}
      <div
        className="relative w-full h-96 bg-gray-900 text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.findoctor.com.co/media/3290/medium_drjulio.png')", 
        }}
      >
        {/* Contenido del banner */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Agenda tu cita</h2>
          <p className="mb-6 max-w-2xl">
            Recibe atención médica de calidad y personalizada. Reserva tu cita en línea y accede al cuidado profesional que mereces.
          </p>
          <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
            Agendar cita
          </button>
        </div>

        {/* Overlay para resaltar el texto */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
      </div>

      {/* Sección del mapa */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 my-16">Ubicación del Consultorio</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.392346528213!2d-122.419415684457!3d37.7749295797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858159af8f0a7d%3A0xe1bdfdab4b9e3ed2!2sGolden+Gate+Bridge!5e0!3m2!1sen!2sus!4v1615853952384!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Consultorio Ubicación"
          ></iframe>
        </div>
        <p className="mt-4 text-gray-600">Visítanos en nuestra ubicación para consultas y atención médica personalizada.</p>
      </div>
    </div>
  );
};

export default AppointmentBanner;
