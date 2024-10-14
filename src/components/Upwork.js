import { UpworkIcon } from "@/assets/icons/UpworkIcon";

export const Upwork = (props) => {
  return (
    <div className="flex flex-col gap-[16px] bg-[#1F2937] p-[32px] rounded-xl lg:flex-row lg:justify-between shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] dark:bg-white">
      <UpworkIcon />
      <p className="lg:order-last">{props.date}</p>
      <div className="flex flex-col gap-[16px]">
        <h1>{props.title}</h1>
        <ul className="list-disc ml-[20px]">
          {props.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
