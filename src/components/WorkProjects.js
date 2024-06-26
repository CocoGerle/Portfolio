import { Tag } from "./Tag";
import { ShareIcon } from "../assets/icons/ShareIcon";

const arr = [
  {
    text: "React",
  },
  {
    text: "Next.js",
  },
  {
    text: "Typescript",
  },
  {
    text: "Nest.js",
  },
  {
    text: "PostgreSQL",
  },
  {
    text: "Tailwindcss",
  },
  {
    text: "Figma",
  },
  {
    text: "Cypress",
  },
  {
    text: "Storybook",
  },
  {
    text: "Git",
  },
];

export const WorkProjects = (props) => {
  return (
    <div
      className={`flex flex-col rounded-xl overflow-hidden shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${
        props.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="bg-[#374151]  p-[48px] lg:flex-1 dark:bg-gray-100 ">
        <img className="pt-[15px]" src={props.image} />
      </div>
      <div className=" bg-[#111827] flex flex-col gap-[24px] pt-[63px] pb-[48px] px-[48px] lg:flex-1 lg:justify-start dark:bg-white  ">
        <div className="text-[20px] font-bold">{props.title}</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-[8px]">
          {arr.map((items) => (
            <Tag value={items.text} />
          ))}
        </div>
        <ShareIcon color={props.state ? "#4B5563" : "#d1d5da"} />
      </div>
    </div>
  );
};
