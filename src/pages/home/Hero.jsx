import img from '../../assets/IMG_3495.jpg';

export default function Hero() {
  return (
    <div className="relative mx-auto flex w-screen-xl flex-col items-center justify-center gap-8 px-6 py-12 md:flex-row md:items-center lg:gap-48 bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="h-full w-full"></div>
      </div>
      
      {/* Text section */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 md:items-start md:text-left md:max-w-md">
        <h1 className="font-poppins text-4xl font-bold text-[#031432] md:text-5xl md:leading-tight bg-clip-text text-transparent bg-teal-500">
          Cirujano Digestivo y Endoscopista Gastrointestinal
        </h1>
        <p className="max-w-[480px] text-gray-700 md:text-lg">
          Cirugía General y Digestiva, Cirugía Laparoscópica, Endoscópica y de Mínima Invasión, Alta especialidad en Endoscopía Gastrointestinal
        </p> 
       
      </div>

      {/* Image section */}
      <div className="relative z-10 flex justify-center md:max-w-lg">
        <img
          className="max-h-[420px] w-full rounded-lg object-cover transform hover:scale-105 transition-transform"
          src={img}
          alt="Hero"
        />
      </div>
    </div>
  );
}
