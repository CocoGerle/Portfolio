import { Tag } from "../components/Tag";
export const AboutMe = () => {
  return (
    <div className="bg-[#111827] py-[64px] px-[16px] text-[#D1D5DB] dark:bg-gray-50 dark:text-black">
      <div className="max-w-screen-lg lg:m-auto">
        <div className="flex justify-center mb-[24px] ">
          <Tag value="Миний тухай" />
        </div>
        <div className="lg:flex lg:flex-row">
          <div className="flex justify-center items-center flex-col lg:flex-1  lg:items-start ">
            <div className=" mb-[48px] h-[320px] w-[300px] lg:h-[480px] lg:w-[400px] ">
              <img
                className="h-full w-full object-cover shadow-[20px_20px_8.0px_rgba(0,0,0,0.38)]"
                src="/self-port2.jpg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[16px] lg:flex-1 justify-center">
            <p>
              Би урлаг судлаачаар сурч байсан ч бусдын бүтээлийг судлахаас илүү
              өөрөө хийж бүтээх хүсэл илүү байснаас developer болохоор шийдсэн.
              Өөрийн хийсэн вэб аппынхаа ажиллагааг хараад маш их урам зориг
              авдаг.
            </p>
            <h1 className="text-[24px] font-bold">Онцлох:</h1>
            <p>
              GitHub ашиглан, багаар ажиллаж, нэг кодыг олон талаас зэрэг бичиж
              чадна. Ингэж багаар ажилласан төслийн туршлагатай.
            </p>
            <p>
              Graphql дээр код дотроо бүх үйлдэл дээр Тест үүсгэж, прогдакшнруу
              оруулахаас өмнө нэгд нэггүй туршиж, шалгаж чадна. Төсөл дээр ингэж
              ажиллаж байсан туршлагатай.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
