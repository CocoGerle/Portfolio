import { FigmaIcon } from "@/assets/icons/FigmaIcon";
import { GitIcon } from "../assets/icons/GitIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import Link from "next/link";
export const Links = ({ state }) => {
  return (
    <div className="flex h-[36px] w-[116px]">
      <Link href={"https://github.com/CocoGerle"}>
        <GitIcon color={state ? "#4B5563" : "#d1d5da"} />
      </Link>
    </div>
  );
};
