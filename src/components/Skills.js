import { JavascriptIcon } from "@/assets/icons/JavascriptIcon";
import {Tag} from "./Tag";
import { Typescript } from "@/assets/icons/Typescript";
import { React } from "@/assets/icons/React";
import { Next } from "@/assets/icons/Next";
import { Node } from "@/assets/icons/Node";
import { Express } from "@/assets/icons/Express";
import { Nest } from "@/assets/icons/Nest";
import { Socket } from "@/assets/icons/Socket";
import { MongoDB } from "@/assets/icons/MongoBD";
import { Sass } from "@/assets/icons/Sass";
import { Tailwind } from "@/assets/icons/Tailwind";
import { Figma } from "@/assets/icons/Figma";
import { Cypress } from "@/assets/icons/Cypress";
import { Storybook } from "@/assets/icons/Storybook";
import {Git} from "../assets/icons/Git"

const arr = [
  {
    svg: <JavascriptIcon/>,
    title:"Javascript",
  },
  {
    svg: <Typescript/>,
    title:"Typescript",
  },
  {
    svg: <React/>,
    title:"React",
  },
  {
    svg: <Next/>,
    title:"Next.js",
  },
  {
    svg: <Node/>,
    title:"Node.js",
  },
  {
    svg: <Express/>,
    title:"Express.js",
  },
  {
    svg: <Nest/>,
    title:"Nest.js",
  },
  {
    svg: <Socket/>,
    title:"Socket.js",
  },
  {
    svg: <MongoDB/>,
    title:"MongoBD",
  },
  {
    svg: <Sass/>,
    title:"Sass/Scss",
  },
  {
    svg: <Tailwind/>,
    title:"Tailwind.css",
  },
  {
    svg: <Cypress/>,
    title:"Cypress",
  },
  {
    svg: <Storybook/>,
    title:"Storybook",
  },
  {
    svg: <Git/>,
    title:"Git",
  },
  {
    svg:<Figma/>,
    title:"Figma",
  }
]

export const Skills = () => {
  return (
    <div>
      <div className="px-[16px] py-[64px]  lg:py-[96px] bg-[#030712] text-[#D1D5DB]">
        <div className="lg:w-[70%] m-auto">
          <div className="flex justify-center flex-col items-center mb-[24px] gap-[16px] ">
            <Tag value="Skills" />
            <p className="text-center">The skills, tools and technologies I am really good at:</p>
          </div>
          <div className="grid grid-cols-3  place-items-center gap-[16px] lg:grid lg:gap-[87px] lg:grid-cols-8 mt-[48px]">
          {arr.map((item) => (
              <div className="flex flex-col items-center gap-2" key={item.title}>
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
