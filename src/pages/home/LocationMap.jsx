import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Ubicaciones de los Consultorios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primera ubicación */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.392346528213!2d-122.419415684457!3d37.7749295797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858159af8f0a7d%3A0xe1bdfdab4b9e3ed2!2sGolden+Gate+Bridge!5e0!3m2!1sen!2sus!4v1615853952384!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación 1"
            ></iframe>
            <p className="mt-4 text-gray-600">Golden Gate Bridge - Consultorio 1</p>
          </div>

          {/* Segunda ubicación */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.7741795345615!2d-89.21819168574645!3d13.705073702578443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633079b50f9dd7%3A0xf13a04c045a6d42e!2sMonumento%20al%20Divino%20Salvador%20del%20Mundo!5e0!3m2!1ses!2ssv!4v1635737639758!5m2!1ses!2ssv"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación 2"
            ></iframe>
            <p className="mt-4 text-gray-600">Monumento al Divino Salvador - Consultorio 2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
