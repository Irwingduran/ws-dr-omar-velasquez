import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Ubicación del Consultorio</h2>
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
    </section>
  );
};

export default LocationMap;
