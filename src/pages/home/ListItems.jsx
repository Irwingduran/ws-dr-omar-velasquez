import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { PiPlusCircleBold } from "react-icons/pi";

export default function ListItems() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-4 px-3 md:gap-7">
      <Item title="24 Horas con Cita" />
      <Item title="12 años de experiencia" Icon={FiCheckCircle} />
      <Item title="Eficiencia y Calidad" Icon={PiPlusCircleBold} />
    </div>
  );
}

function Item({
  Icon = FiCheckCircle,
  title = "",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) {
  return (
    <div className="flex w-max translate-y-[50%] items-center gap-3 rounded-[12px] bg-teal-500 px-[18px] py-2 text-white md:max-w-[295px]">
      <div>
        <Icon className="size-[38px]" />
      </div>
      <div>
        <h3 className="font-poppins text-lg font-medium">{title}</h3>
 
      </div>
    </div>
  );
}
