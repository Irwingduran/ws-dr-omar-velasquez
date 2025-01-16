import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Ubicaciones de los Consultorios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primera ubicación */}
          <div>
              <h3 className="text-xl font-semibold mb-4">Toluca</h3>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.631212583267!2d-99.6167824251421!3d19.25489774633262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8bc7db14b05f%3A0x6b8cebda9d78703d!2sCentro%20M%C3%A9dico%20Toluca.%20Servicios%20Especializados.!5e0!3m2!1ses!2smx!4v1732298205365!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación 1"
              ></iframe>
              <p className="mt-4 text-gray-600">Centro Médico Toluca</p>
            </div>
          </div>

          {/* Segunda ubicación */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tenancingo</h3>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2698642016144!2d-99.59634472161258!3d18.96368560966206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd95a0147cef9d%3A0x67309cccb981fb76!2sLaboratorios%20los%20Angeles!5e0!3m2!1ses!2smx!4v1732298345406!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación 2"
              ></iframe>
              <p className="mt-4 text-gray-600">Laboratorios los Angeles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
