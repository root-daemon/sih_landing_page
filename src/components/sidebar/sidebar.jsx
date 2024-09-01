import { BsTrello } from "react-icons/bs";
import { FaMapLocation } from "react-icons/fa6";

export default function Sidebar({ collapse }) {
  return (
    <div
      className={`flex h-full ${collapse ? "w-[90px]" : "w-[250px]"} flex-col gap-3 pl-6 pt-6`}
    >
      <button className="flex items-center justify-start gap-3 rounded-l-xl bg-[#EFEAE4] px-4 py-3 text-xl font-medium text-black">
        <BsTrello />
        {!collapse && <span>Tasks</span>}
      </button>
      <button className="flex items-center justify-start gap-3 px-4 py-3 text-xl font-medium text-black">
        <FaMapLocation />
        {!collapse && <span>Map</span>}
      </button>
    </div>
  );
}
