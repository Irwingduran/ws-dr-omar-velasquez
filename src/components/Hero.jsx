export default function Hero() {
  return (
    <div className="pd:pb-[90px] mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-4 px-3 pb-10 pt-[80px] md:flex-row lg:gap-[72px] lg:px-0 lg:pt-[108px] bg-white">
      <div className="mt-10 flex flex-col items-start gap-6 md:mt-0">
  
        <h1 className="font-poppins text-4xl font-bold text-[#031432] md:text-5xl md:leading-[120%]">
        Cirujano Digestivo y Endoscopista Gastrointestinal
        </h1>
        <p className="max-w-[452px] text-para">
        Cirugía General y Digestiva, Cirugía Laparoscópica, Endoscópica y de Mínima Invasión, Alta especialidad en Endoscopia Gastrointestinal

        </p>
        
      </div>

      <div className="max-h-[506px] max-w-[678px]">
        <img
          className="size-full object-contain"
          src="/img2.jpg"
          alt="Hero"
        />
      </div>
    </div>
  );
}
