import { Upwork } from "./Upwork";
import { Tag } from "./Tag";
const arr = [
  {
    title: "Full Stack Developer ",
    date: "Apr 2024 - Jan 2025",
    list: ["Pinecone Academy"],
  },
];
export const Experience = () => {
  return (
    <div className="bg-[#111827] py-[64px] px-[16px] text-[#D1D5DB] dark:bg-gray-50 dark:text-black">
      <div className="max-w-screen-lg lg:m-auto">
        <div className="flex justify-center flex-col items-center mb-[24px] gap-[16px] ">
          <Tag value="Experience" />
          {/* <p className="text-center">
            Here is a quick summary of my most recent experiences:
          </p> */}
        </div>
        <div className="flex flex-col gap-[24px] lg:px-[192px]">
          {arr.map((item, index) => (
            <Upwork
              date={item.date}
              title={item.title}
              list={item.list}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
