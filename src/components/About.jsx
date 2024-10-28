import React from "react";
import { Button } from "./ui";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 pt-28 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[220px]">
      <div className="max-h-[495px] max-w-[586px]">
        <img
          className="size-[85%] object-contain md:size-full"
          src="/img1.png"
          alt="About"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          
        </h5>
        <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
        Un médico dedicado con la misión principal de ayudar
        </h1>
        <p className="mb-4 max-w-[485px] text-para">
        El Dr. Velásquez Martínez se graduó de la Licenciatura de Médico Cirujano y Partero en la Universidad de Monterrey (UDEM) 
        Hizo la Especialidad en Cirugía General y Gastroenterológica en la Universidad Autónoma de Querétaro (UAQ)
         y cursó una Alta Especialidad en Endoscopia Gastrointestinal en la Universidad Autónoma de México (UNAM).
        </p>
       {/* <Button title="Book an appointment" Icon={FaWhatsapp} /> */} 
      </div>
    </div>
  );
}
