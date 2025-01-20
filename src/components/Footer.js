import { Tag } from "./Tag";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuCopy } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { CiAt } from "react-icons/ci";
import { Links } from "./Links";
export const Footer = ({ state }) => {
  const handleCopyPhoneNumber = () => {
    const phoneNumber = "+976 80898009";
    const email = "cocogerle@gmail.com";
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy phone number: ", err);
      });
  };
  const handleCopyEmail = () => {
    const email = "cocogerle@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };
  return (
    <>
      <div className="px-[16px] py-[64px]  lg:py-[96px] bg-[#030712] text-[#D1D5DB] dark:bg-white dark:text-black">
        <div className="max-w-screen-lg m-auto">
          <div className="flex justify-center flex-col items-center mb-[24px] gap-[24px] ">
            <Tag value="Get in touch" />
            <p className="text-center">
              What is next? Feel free to reach out to me if you are looking for
              a developer, have a query, or simply want to connect.
            </p>
            <div>
              <div className="flex flex-row items-center gap-2 text-[32px] font-semibold justify-center">
                <MdOutlineMailOutline />
                <p>cocogerle@gmail.com</p>
                <LuCopy
                  className="cursor-pointer"
                  onClick={handleCopyEmail}
                  title="Copy email"
                />
              </div>
              <div className="flex flex-row items-center gap-2 text-[32px] font-semibold justify-center">
                <IoCallOutline />
                <p>+976 80898009</p>
                <LuCopy
                  className="cursor-pointer"
                  onClick={handleCopyPhoneNumber}
                  title="Copy phone number"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p>You may also find me on Github!</p>
              <Links state={state} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111827] px-[35px] py-[24px] text-[#D1D5DB] text-[14px] items-center flex gap-1 justify-center dark:bg-gray-50 dark:text-gray-600">
        <CiAt />
        <p>2025 | Greetings with ❤️️ from Ulaanbaatar</p>
      </div>
    </>
  );
};
