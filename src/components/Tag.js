export const Tag = (props) => {
  return (
    <div className="bg-[#374151] h-7 w-fit rounded-xl py-1 px-5 flex items-center text-[#D1D5DB] text-sm font-medium dark:bg-gray-200 dark:text-gray-600">
      {props.value}
    </div>
  );
};
