import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-[#fff] bg-opacity-80 p-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <a href="/">
          <h2 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          Dr. Omar Velásquez Martínez
          </h2>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <a
              className="text-primary-start hover:text-primary-start hover:opacity-100"
              href="#"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
              href="#"
            >
              Conóceme
            </a>
          </li>
          <li>
            <a
              className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
              href="#"
            >
              Servicio
            </a>
          </li>
          <li>
            <a
              className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
              href="#"
            >
              Contacto
            </a>
          </li>
        </ul>

 {/* Space in Screen */}
        <div className="hidden md:flex" ></div>

        {/* Mobile Screen */}
        <div className="relative md:hidden">
          {isOpen ? (
            <IoMdClose
              onClick={() => setIsOpen(false)}
              className="size-7 cursor-pointer text-primary-end"
            />
          ) : (
            <HiMiniBars3BottomRight
              onClick={() => setIsOpen(true)}
              className="size-7 cursor-pointer text-primary-end"
            />
          )}

          {isOpen && (
            <div className="absolute right-2 top-8 min-w-[220px] rounded-2xl border bg-white p-4 shadow-lg">
              <ul className="mb-8 flex flex-col items-center gap-6">
                <li>
                  <a
                    className="text-primary-start hover:text-primary-start hover:opacity-100"
                    href="#"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                    href="#"
                  >
                    Conóceme
                  </a>
                </li>
                <li>
                  <a
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                    href="#"
                  >
                    Servicio
                  </a>
                </li>
                <li>
                  <a
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                    href="#"
                  >
                    Contacto
                  </a>
                </li>
              </ul>

            
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
