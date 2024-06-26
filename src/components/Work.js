import { Tag } from "./Tag";
import { WorkProjects } from "./WorkProjects";
export const Work = ({ state }) => {
  return (
    <div className="px-[16px] py-[64px]  lg:py-[96px] bg-[#030712] text-[#D1D5DB] dark:bg-white dark:text-black">
      <div className="max-w-screen-lg m-auto">
        <div className="flex justify-center flex-col items-center mb-[24px] gap-[16px] ">
          <Tag value="Work" />
          <p className="text-center">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className="flex flex-col gap-[24px]">
          <WorkProjects state={state} title="Ub Cab" image="Picture.png" />
          <WorkProjects
            state={state}
            reverse
            title="Mentor Hub"
            image="Picture2.png"
          />
          <WorkProjects state={state} title="iToim" image="Picture3.png" />
        </div>
      </div>
    </div>
  );
};
