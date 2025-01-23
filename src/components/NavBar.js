import { BurgerMenuIcon } from "../assets/icons/BurgerMenuIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import { MoonIcon } from "@/assets/icons/MoonIcon";
import { DeleteIcon } from "@/assets/icons/DeleteIcon";
import { useState } from "react";

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("hey");
  };
  return (
    <div className="p-[16px] text-[#D1D5DB] bg-[#030712] text-[16px] dark:bg-white dark:text-black ">
      <div className="max-w-screen-lg flex justify-between m-auto">
        <p className="text-4xl font-bold text-center text-white dark:text-black overflow-hidden">
          COCO
        </p>
        <div className="hidden lg:flex items-center">
          {/* <div className="flex gap-6 mr-6 ">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div> */}
          <div className="flex gap-[16px] items-center pl-[24px]">
            <button onClick={props.toggleDarkMode} className="flex reverse">
              {props.state ? <SunIcon /> : <MoonIcon />}
              {props.state ? " Өдрийн мүүд" : " Шөнийн мүүд"}
            </button>
            {/* <div className="whitespace-nowrap bg-white py-[6px] px-[16px] text-black rounded-xl dark:bg-black dark:text-white">
              Download CV
            </div> */}
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={handleClick}>
            <BurgerMenuIcon color={props.state ? "black" : "white"} />
          </button>
          <div
            className={`fixed left-[100%] duration-500 ease-in w-[320px] h-full bg-black dark:bg-[#FFFFFF] top-0 ${
              isOpen ? "translate-x-[-320px] " : ""
            }`}
          >
            <div className="flex flex-col items-start p-4 ">
              <div className="flex justify-between w-full pb-4  border-b border-[#1F2937] dark:border-[#F3F4F6]">
                <p className="text-4xl font-bold text-center text-white dark:text-black overflow-hidden">
                  COCO
                </p>
                <button onClick={handleClick}>
                  <DeleteIcon color={props.state ? "black" : "white"} />
                </button>
              </div>
              {/* <div className="flex flex-col gap-6 mr-6 text-[#D1D5DB] text-base py-4 border-b border-[#1F2937] w-full dark:text-black dark:border-[#F3F4F6]">
                <p>About</p>
                <p>Work</p>
                <p>Testimonials</p>
                <p>Contact</p>
              </div> */}
              <div className="flex flex-col gap-[16px] w-full items-center py-4">
                <div
                  className="flex flex-row justify-between w-full py-4"
                  onClick={props.toggleDarkMode}
                >
                  <p>Switch Theme</p>
                  <button>{props.state ? <SunIcon /> : <MoonIcon />}</button>
                </div>
                <div className="whitespace-nowrap bg-white py-[6px] px-[16px] text-black rounded-xl dark:bg-black dark:text-white w-full text-center">
                  Download CV
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
