import React from 'react';

const associations = [
  { name: 'Sociedad de Gastroenterología', logo: '/path/to/logo1.png', url: 'https://sociedad-gastro.org' },
  { name: 'Asociación Mexicana de Cirugía', logo: '/path/to/logo2.png', url: 'https://amc.org.mx' },
  { name: 'Colegio de Médicos Especialistas', logo: '/path/to/logo3.png', url: 'https://colegiomedico.org' },
];

const Associations = () => {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Asociaciones y Afiliaciones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {associations.map((association, index) => (
            <a href={association.url} key={index} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transition-transform hover:scale-105">
              <img src={association.logo} alt={association.name} className="w-20 h-20 mb-4" />
              <p className="text-lg font-semibold text-gray-700">{association.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associations;
