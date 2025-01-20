import { Tag } from "../components/Tag";
export const AboutMe = () => {
  return (
    <div className="bg-[#111827] py-[64px] px-[16px] text-[#D1D5DB] dark:bg-gray-50 dark:text-black">
      <div className="max-w-screen-lg lg:m-auto">
        <div className="flex justify-center mb-[24px] ">
          <Tag value="About Me" />
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
          <div className="flex flex-col gap-[16px] lg:flex-1">
            <h1 className="text-[24px] font-bold">
              Curious about me? Here you have it:
            </h1>
            <p>
              I am full stack developer, passionate about React.js and Node.js.
              I excel in blending technical and visual aspects to craft
              exceptional digital products, prioritizing user experience,
              precise design, and optimized code.
            </p>
            <p>
              Since starting my web development journey in 2024, I have embraced
              challenges and kept up with the latest tech trends. Now, I am
              building cutting-edge web apps using Next.js, TypeScript, Nestjs,
              Tailwindcss, Graphql, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
