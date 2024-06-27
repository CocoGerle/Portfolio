import { FigmaIcon } from "@/assets/icons/FigmaIcon";
import { GitIcon } from "../assets/icons/GitIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
export const Links = ({ state }) => {
  return (
    <div className="flex h-[36px] w-[116px]">
      <GitIcon color={state ? "#4B5563" : "#d1d5da"} />
      <TwitterIcon color={state ? "#4B5563" : "#d1d5da"} />
      <FigmaIcon color={state ? "#4B5563" : "#d1d5da"} />
    </div>
  );
};
