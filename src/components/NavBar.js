import { BurgerMenuIcon } from "../assets/icons/BurgerMenuIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import { MoonIcon } from "@/assets/icons/MoonIcon";

export const NavBar = (props) => {
  return (
    <div className="p-[16px] text-[#D1D5DB] bg-[#030712] text-[16px] dark:bg-white dark:text-black fixed top-0 w-screen ">
      <div className="lg:w-[1440px] flex justify-between m-auto">
        <p className="text-4xl font-bold text-center text-white dark:text-black ">
          COCO
        </p>
        <div className="hidden lg:flex items-center">
          <div className="flex gap-6 mr-6 ">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
          <div className="flex gap-[16px] items-center pl-[24px]">
            <button onClick={props.toggleDarkMode}>
              {props.state ? <SunIcon /> : <MoonIcon />}
            </button>
            <div className="whitespace-nowrap bg-white py-[6px] px-[16px] text-black rounded-xl dark:bg-black dark:text-white">
              Download CV
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <BurgerMenuIcon />
        </div>
      </div>
    </div>
  );
};
