import { Tag } from "./Tag";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuCopy } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { CiAt } from "react-icons/ci";
import { Links } from "./Links";
export const Footer = ({ state }) => {
  return (
    <>
      <div className="px-[16px] py-[64px]  lg:py-[96px] bg-[#030712] text-[#D1D5DB] dark:bg-white dark:text-black">
        <div className="max-w-screen-lg m-auto">
          <div className="flex justify-center flex-col items-center mb-[24px] gap-[24px] ">
            <Tag value="Get in touch" />
            <p className="text-center">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
            <div>
              <div className="flex flex-row items-center gap-2 text-[32px] font-semibold justify-center">
                <MdOutlineMailOutline />
                <p>tom@pinecone.mn</p>
                <LuCopy />
              </div>
              <div className="flex flex-row items-center gap-2 text-[32px] font-semibold justify-center">
                <IoCallOutline />
                <p>+976 88112233</p>
                <LuCopy />
              </div>
            </div>
            <p>You may also find me on these platforms!</p>
            <Links state={state} />
          </div>
        </div>
      </div>
      <div className="bg-[#111827] px-[35px] py-[24px] text-[#D1D5DB] text-[14px] items-center flex gap-1 justify-center dark:bg-gray-50 dark:text-gray-600">
        <CiAt />
        <p>2024 | Greetings with ❤️️ from Ulaanbaatar</p>
      </div>
    </>
  );
};
