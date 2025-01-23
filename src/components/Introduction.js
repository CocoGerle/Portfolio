import { MapsIcon } from "@/assets/icons/MapsIcon";
import { Links } from "./Links";
export const Introduction = ({ state }) => {
  return (
    <div className="px-[16px] py-[64px]  lg:py-[96px] bg-[#030712] text-[#D1D5DB] dark:bg-white dark:text-black">
      <div className="flex flex-col-reverse gap-[48px] max-w-screen-lg m-auto lg:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p
              className="h-fit
             text-2xl text-[#F9FAFB] lg:text-5xl font-bold dark:text-black overflow-hidden "
            >
              Сайн уу? Гэрлээ байна.🫶🏻
            </p>
            <p>
              Би full stack хөгжүүлэгч тэр дундаа React.js, Node.js дээр голчлон
              ажилладаг. Би хурдан үзэмжтэй, ямар ч төхөөрөмж дээр ажилладаг вэб
              апп бүтээхийг зорьдог. Өөрийн сэтгэлдээ хүрсэн зүйл хийхээрээ
              түүнээсээ их таашаал авдаг. Цаашид та бүхэнтэй ингэж ажиллахыг
              хүсч байна.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              {/* <img className="w-6 h-6 " src="/maps-icon.png" /> */}
              <MapsIcon color={state ? "black" : "#d1d5da"} />
              <p>Улаанбаатар, Монгол</p>
            </div>
            <div className="flex gap-2">
              <img className="w-6 h-6" src="/green-icon.png" />
              <p>Хамтран ажиллахад хэзээд бэлэн</p>
            </div>
          </div>
          <Links state={state} />
        </div>
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="h-[320px] w-[300px]">
            <img
              className="h-full w-full object-cover shadow-[-20px_20px_8.0px_rgb(108,37,17)]"
              src="/self-port.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
