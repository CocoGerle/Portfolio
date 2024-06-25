import { Tag } from "./Tag";
import { WorkProjects } from "./WorkProjects";
export const Work = () => {
  return (
    <div className="px-[16px] py-[64px]  lg:py-[96px] bg-[#030712] text-[#D1D5DB]">
      <div className="lg:w-[70%] m-auto">
        <div className="flex justify-center flex-col items-center mb-[24px] gap-[16px] ">
          <Tag value="Work" />
          <p className="text-center">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className="flex flex-col gap-[24px]">
            <WorkProjects title="Ub Cab" image="Picture.png"/>
            <WorkProjects reverse title="Mentor Hub" image="Picture2.png"/>
            <WorkProjects title="iToim" image="Picture3.png"/>
        </div>
      </div>
    </div>
  );
};
