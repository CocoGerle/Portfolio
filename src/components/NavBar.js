import { BurgerMenuIcon } from "../assets/icons/BurgerMenuIcon";
export const NavBar = () => {
  return (
    <div className="p-[16px] text-[#D1D5DB] bg-[#030712] text-[16px] ">
      <div className="lg:w-[70%] flex justify-between m-auto">
        <p className="text-4xl font-bold text-center text-white">COCO</p>
        <div className="hidden lg:flex items-center">
          <div className="flex gap-6 mr-6 ">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
          <div className="flex gap-[16px] items-center pl-[24px] border-l">
            <img className="w-[24px] h-[24px]" src="/moon-icon.png" />
            <div className="whitespace-nowrap bg-white py-[6px] px-[16px] text-black rounded-xl">
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
