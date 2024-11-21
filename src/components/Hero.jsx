import img from '../assets/img2.jpg';

export default function Hero() {
  return (
    <div className="relative mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-6 px-6 pb-12 pt-16 md:flex-row lg:gap-12 bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="h-full w-full "></div>
      </div>
      
      {/* Text section */}
      <div className="relative z-10 mt-8 flex flex-col items-start gap-4 md:mt-0 md:max-w-md">
        <h1 className="font-poppins text-4xl font-bold text-[#031432] md:text-5xl md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
          Cirujano Digestivo y Endoscopista Gastrointestinal
        </h1>
        <p className="max-w-[480px] text-gray-700 md:text-lg">
          Cirugía General y Digestiva, Cirugía Laparoscópica, Endoscópica y de Mínima Invasión, Alta especialidad en Endoscopia Gastrointestinal
        </p> 
        <button className="mt-4 rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition-all">
          Más información
        </button>
      </div>

      {/* Image section */}
      <div className="relative z-10 flex justify-center md:max-w-lg">
        <img
          className="max-h-[506px] w-full rounded-lg  object-cover transform hover:scale-105 transition-transform"
          src={img}
          alt="Hero"
        />
      </div>
    </div>
  );
}
