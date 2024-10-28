import React from "react";
import { ServiceCard } from "./ui";

export default function ServiceCards() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-9 pb-[80px] md:pb-[164px]">
      <ServiceCard title="Endoscopia Gastrointestinal" />
      <ServiceCard title="Laparoscopia Digestiva" imgSrc="/card-img-1.png" />
      <ServiceCard title="Cirugía Digestiva" imgSrc="/card-img-1.png" />
      <ServiceCard title="Colonoscopia" imgSrc="/card-img-1.png" />
      <ServiceCard title="Cirugía Laparoscópica y Digestiva" imgSrc="/card-img-1.png" />
      <ServiceCard title="Gastritis" imgSrc="/card-img-1.png" />
    </div>
  );
}
