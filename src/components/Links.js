import { FigmaIcon } from "@/assets/icons/FigmaIcon";
import { GitIcon } from "../assets/icons/GitIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
export const Links = ({ state }) => {
  return (
    <div className="flex h-[36px] w-[116px]">
      <GitIcon color={state ? "black" : "#d1d5da"} />
      <TwitterIcon color={state ? "black" : "#d1d5da"} />
      <FigmaIcon color={state ? "black" : "#d1d5da"} />
    </div>
  );
};
