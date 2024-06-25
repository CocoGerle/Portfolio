import { Tag } from "../components/Tag";
export const AboutMe = () => {
  return (
    <div className="bg-[#111827] py-[64px] px-[16px] text-[#D1D5DB]">
      <div className="lg:w-[70%] lg:m-auto">
        <div className="flex justify-center mb-[24px] ">
          <Tag value="About Me" />
        </div>
        <div className="lg:flex lg:flex-row">
          <div className="flex justify-center items-center flex-col lg:flex-1  lg:items-start ">
            <div className=" mb-[48px] h-[320px] w-[300px] lg:h-[480px] lg:w-[400px] ">
              <img
                className="h-full w-full object-cover"
                src="/self-port2.jpg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[16px] lg:flex-1">
            <h1 className="text-[24px] font-bold">
              Curious about me? Here you have it:
            </h1>
            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
