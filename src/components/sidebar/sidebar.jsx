import { BsTrello } from "react-icons/bs";
import { FaMapLocation } from "react-icons/fa6";
import { MdOutlineGroups2 } from "react-icons/md";

export default function Sidebar({ collapse, active }) {
  return (
    <div
      className={`flex h-full ${collapse ? "w-[90px]" : "w-[250px]"} flex-col gap-3 pl-6 pt-6`}
    >
      <a
        href="/dashboard"
        className={`flex items-center justify-start gap-3 px-4 py-3 text-xl font-medium text-black ${active === "tasks" ? "rounded-l-xl bg-[#EFEAE4]" : ""}`}
      >
        <BsTrello />
        {!collapse && <span>Tasks</span>}
      </a>
      <a
        href="/maps"
        className={`flex items-center justify-start gap-3 px-4 py-3 text-xl font-medium text-black ${active === "maps" ? "rounded-l-xl bg-[#EFEAE4]" : ""}`}
      >
        <FaMapLocation />
        {!collapse && <span>Map</span>}
      </a>{" "}
      <a
        href="/resource"
        className={`flex items-center justify-start gap-3 px-4 py-3 text-xl font-medium text-black ${active === "resource" ? "rounded-l-xl bg-[#EFEAE4]" : ""}`}
      >
        <MdOutlineGroups2 />
        {!collapse && <span>Resource</span>}
      </a>
    </div>
  );
}
