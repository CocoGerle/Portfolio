import {
  Cypress,
  Express,
  Figma,
  Git,
  JavascriptIcon,
  Nest,
  Next,
  Node,
  React,
  Sass,
  Socket,
  Storybook,
  Tailwind,
  Typescript,
} from "@/assets/icons";
import { Tag } from "./Tag";
import { MongoDB } from "@/assets/icons/MongoBD";

export const Skills = ({ state }) => {
  const arr = [
    {
      svg: <JavascriptIcon />,
      title: "Javascript",
    },
    {
      svg: <Typescript />,
      title: "Typescript",
    },
    {
      svg: <React />,
      title: "React",
    },
    {
      svg: <Next />,
      title: "Next.js",
    },
    {
      svg: <Node />,
      title: "Node.js",
    },
    {
      svg: <Express color={state ? "black" : "white"} />,
      title: "Express.js",
    },
    {
      svg: <Nest />,
      title: "Nest.js",
    },
    {
      svg: <Socket color={state ? "black" : "white"} />,
      title: "Socket.js",
    },
    {
      svg: <MongoDB />,
      title: "MongoBD",
    },
    {
      svg: <Sass />,
      title: "Sass/Scss",
    },
    {
      svg: <Tailwind />,
      title: "Tailwind.css",
    },
    {
      svg: <Cypress color={state ? "black" : "white"} />,
      title: "Cypress",
    },
    {
      svg: <Storybook />,
      title: "Storybook",
    },
    {
      svg: <Git />,
      title: "Git",
    },
    {
      svg: <Figma />,
      title: "Figma",
    },
  ];
  return (
    <div>
      <div className="px-[16px] py-[64px]  lg:py-[96px] bg-[#030712] text-[#D1D5DB] dark:bg-white dark:text-black  ">
        <div className="max-w-screen-lg m-auto">
          <div className="flex justify-center flex-col items-center mb-[24px] gap-[16px] ">
            <Tag value="Skills" />
            <p className="text-center">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
          <div className="grid grid-cols-3  place-items-center gap-[16px] lg:grid lg:gap-[87px] lg:grid-cols-8 mt-[48px]">
            {arr.map((item) => (
              <div
                className="flex flex-col items-center gap-2"
                key={item.title}
              >
                <div>{item.svg}</div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
