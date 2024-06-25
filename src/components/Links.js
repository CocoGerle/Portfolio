import { FigmaIcon } from "@/assets/icons/FigmaIcon";
import {GitIcon} from "../assets/icons/GitIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
export const Links = () => {
  return (
    <div className="flex h-[36px] w-[116px]">
      <GitIcon/>
      <TwitterIcon/>
      <FigmaIcon/>
    </div>
  );
};
