import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import Notification from "../../components/Notification";
import BoardComponent from "../../components/Droppable";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";

export default function Board() {
  const [notification, setNotification] = useState(false);
  const [collapse, setCollpase] = useState(true);

  const navigate = useNavigate();
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#D6CFC8]">
      <header className="flex flex-row items-center justify-between px-12 py-6">
        <div className="flex flex-row gap-3">
          <img src="assets/img/icobw.svg" alt="e" className="h-8 w-8" />
          <h1 className="text-center text-2xl font-semibold uppercase text-black">
            Coordina
          </h1>
        </div>
        <div className="absolute left-96 top-7 flex items-center justify-center gap-3 text-sm font-medium">
          <span
            className="cursor-pointer opacity-50"
            onClick={() => navigate("/dashboard")}
          >
            Tasks
          </span>{" "}
          <FaArrowRightLong /> Traffic Management
        </div>
        <div
          onClick={() => setNotification(!notification)}
          className="cursor-pointer text-3xl text-black"
        >
          <TbLayoutSidebarRightCollapse
            className={`transition-all duration-100 ${notification ? "mr-96" : "rotate-180"}`}
          />
        </div>
      </header>
      <Notification notification={notification} />
      <div className="flex h-full w-full flex-row gap-0">
        <Sidebar collapse={collapse} />
        <div className="h-full w-full overflow-auto rounded-tl-3xl bg-gradient-to-br from-[#EFEAE4] to-[#e3d3c7df] p-12 pb-0">
          <h1 className="max-w-[700px] text-4xl font-semibold">
            Traffic Management and Transport Department
          </h1>
          <BoardComponent />
        </div>
      </div>
    </main>
  );
}
