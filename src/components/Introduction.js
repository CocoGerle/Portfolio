import { MapsIcon } from "@/assets/icons/MapsIcon";
import { Links } from "./Links";
export const Introduction = ({ state }) => {
  return (
    <div className="px-[16px] py-[64px]  lg:py-[96px] bg-[#030712] text-[#D1D5DB] dark:bg-white dark:text-black">
      <div className="flex flex-col-reverse gap-[48px] max-w-screen-lg m-auto lg:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className=" text-4xl text-[#F9FAFB] lg:text-7xl font-bold dark:text-black">
              Hi, I’m Gerlee 🫶🏻
            </h1>
            <p>
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              {/* <img className="w-6 h-6 " src="/maps-icon.png" /> */}
              <MapsIcon color={state ? "black" : "#d1d5da"} />
              <p>Ulaanbaatar, Mongolia</p>
            </div>
            <div className="flex gap-2">
              <img className="w-6 h-6" src="/green-icon.png" />
              <p>Available for new projects</p>
            </div>
          </div>
          <Links state={state} />
        </div>
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="h-[320px] w-[300px]">
            <img
              className="h-full w-full object-cover shadow-[-20px_20px_8.0px_rgb(108,37,17)]"
              src="/self-port.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
