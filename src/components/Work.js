import { Tag } from "./Tag";
import { WorkProjects } from "./WorkProjects";
export const Work = ({ state }) => {
  return (
    <div className="px-[16px] py-[64px]  lg:py-[96px] bg-[#030712] text-[#D1D5DB] dark:bg-white dark:text-black">
      <div className="max-w-screen-lg m-auto">
        <div className="flex justify-center flex-col items-center mb-[24px] gap-[16px] ">
          <Tag value="Ажилууд" />
          <p className="text-center">Миний хийсэн төслүүд:</p>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div>
            {" "}
            <WorkProjects
              state={state}
              link="https://expense-tracker-c4o6.vercel.app/"
              title="Expense Tracker"
              image="image1.png"
              text="Өрхийн болон өөрийн орлого зарлагаа бүртгэж хянах санхүүгийн зөв төлөвлөлт хийх аргад сургах мөн одоо сурч байгаа технологуудыг өөрийн болгон эзэмших чадвар суулгах зорилготой веб аппликейшн бүтээсэн."
            />
          </div>
          <WorkProjects
            state={state}
            link="https://e-commerce-chi-murex-72.vercel.app/"
            reverse
            title="E-Commerce"
            image="image2.png"
            text=" Энэхүү онлайн худалдааны сайт нь бараагаа хялбар борлуулах, барааны борлуулалт тооцоог хялбараар хийх, урсгалыг хянах, нарийн төвөгтэй тайлан тооцоог сар, улирал, жилээр тооцоолон дүн шинжилгээ хийх, худалдан авагчдад цаг хугацаа хэмнэх хөнгөвчлөх зэрэг боломж олгоно."
          />
          <WorkProjects
            state={state}
            link="https://instagram-frontend-pinecone-studio.vercel.app/login"
            title="Instagram"
            image="image.png"
            text="Энэхүү төслийг 6 гишүүнтэй багаар хийсэн бөгөөд Инстаграмыг дуурайн хийсэн. Миний хувьд энэ төсөл дээр голчлон Стори хэсэг дээр ажилласан."
          />
        </div>
      </div>
    </div>
  );
};
